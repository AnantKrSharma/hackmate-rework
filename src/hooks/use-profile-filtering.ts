/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from 'react'
import { FilterOptions, User } from '../types'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

export function useProfileFiltering(filters: FilterOptions) {
  const { user: clerkUser } = useUser()
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState<string[]>([])
  const [selectedMatch, setSelectedMatch] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [lastFetchedParams, setLastFetchedParams] = useState<string>('')
  const [mutualMatchIds, setMutualMatchIds] = useState<string[]>([])
  const [viewedProfileIds, setViewedProfileIds] = useState<string[]>([])
  
  // Fetch viewed profiles to track locally
  const fetchViewedProfiles = useCallback(async () => {
    if (!clerkUser?.id) return;
    
    try {
      const response = await axios.get('/api/view', {
        params: { userId: clerkUser.id }
      });
      
      if (response.data && Array.isArray(response.data.viewedProfiles)) {
        const viewedIds = response.data.viewedProfiles.map((view: any) => view.userBId);
        setViewedProfileIds(viewedIds);
      }
    } catch (err) {
      console.error('Error fetching viewed profiles:', err);
    }
  }, [clerkUser?.id]);
  
  // Fetch mutual matches to exclude from results
  const fetchMutualMatches = useCallback(async () => {
    if (!clerkUser?.id) return;
    
    try {
      const response = await axios.get('/api/matches', {
        params: { userId: clerkUser.id, mutual: true }
      });
      
      if (response.data && Array.isArray(response.data.matches)) {
        // Extract the IDs of users who have mutual matches with the current user
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const matchedIds = response.data.matches.map((match: any) => 
          match.userAId === clerkUser.id ? match.userBId : match.userAId
        );
        setMutualMatchIds(matchedIds);
      }
    } catch (err) {
      console.error('Error fetching mutual matches:', err);
    }
  }, [clerkUser?.id]);
  
  // Load mutual matches and viewed profiles when the component mounts or user changes
  useEffect(() => {
    const fetchInitialData = async () => {
      await Promise.all([fetchMutualMatches(), fetchViewedProfiles()]);
    };
    
    fetchInitialData();
  }, [fetchMutualMatches, fetchViewedProfiles]);
  
  // Memoize the filter parameters to prevent unnecessary API calls
  const filterParams = useMemo(() => {
    if (!clerkUser?.id) return null;
    
    const params = new URLSearchParams({
      userId: clerkUser.id,
      pageSize: '10',
      excludeViewed: 'true',
    });
    
    // Add filter parameters
    if (filters.skills.length > 0) {
      params.append('skills', filters.skills.join(','));
    }
    
    if (filters.domains.length > 0) {
      params.append('domains', filters.domains.join(','));
    }
    
    if (filters.workingStyles.length > 0) {
      params.append('workingStyles', filters.workingStyles.join(','));
    }
    
    if (filters.collaborationPrefs.length > 0) {
      params.append('collaborationPrefs', filters.collaborationPrefs.join(','));
    }
    
    params.append('experienceMin', filters.experienceRange[0].toString());
    params.append('experienceMax', filters.experienceRange[1].toString());
    
    if (filters.startupStages && filters.startupStages.length > 0) {
      params.append('startupStages', filters.startupStages.join(','));
    }
    
    params.append('enableLocationBasedMatching', filters.enableLocationBasedMatching.toString());
    
    // Add location parameters if enabled - FIXED: Now using userCoordinates passed from parent
    if (filters.enableLocationBasedMatching && filters.userCoordinates) {
      params.append('latitude', filters.userCoordinates.latitude.toString());
      params.append('longitude', filters.userCoordinates.longitude.toString());
      params.append('maxDistance', filters.maxDistance?.toString() || '50');
    }
    
    // Add mutualMatchIds to exclude from results
    if (mutualMatchIds.length > 0) {
      params.append('excludeUserIds', mutualMatchIds.join(','));
    }
    
    // Add viewedProfileIds to additionally exclude
    if (viewedProfileIds.length > 0) {
      const existingExcludeIds = params.get('excludeUserIds')?.split(',') || [];
      const allExcludeIds = [...new Set([...existingExcludeIds, ...viewedProfileIds])];
      
      if (params.has('excludeUserIds')) {
        params.set('excludeUserIds', allExcludeIds.join(','));
      } else {
        params.append('excludeUserIds', viewedProfileIds.join(','));
      }
    }
    
    return params;
  }, [
    clerkUser?.id, 
    filters.skills, 
    filters.domains, 
    filters.workingStyles, 
    filters.collaborationPrefs,
    filters.experienceRange,
    filters.startupStages,
    filters.enableLocationBasedMatching,
    filters.userCoordinates, // FIXED: Changed from filters.coordinates
    filters.maxDistance,
    mutualMatchIds,
    viewedProfileIds
  ]);
  
  // Fetch users based on filters
  const fetchUsers = useCallback(async (resetPage = false) => {
    if (!filterParams) return;
    
    const newPage = resetPage ? 1 : page;
    const currentParams = filterParams.toString();
    
    // Add page parameter
    filterParams.set('page', newPage.toString());
    const paramsWithPage = filterParams.toString();
    
    // Skip if parameters haven't changed and we're not resetting or loading more
    if (
      !resetPage && 
      lastFetchedParams === paramsWithPage && 
      filteredUsers.length > 0
    ) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Fetching with params:', paramsWithPage);
      console.log('Viewed profiles to exclude:', viewedProfileIds);
      
      // Update last fetched params
      setLastFetchedParams(paramsWithPage);
      
      // Request with cache headers
      const response = await axios.get(`/api/user?${paramsWithPage}`, {
        headers: {
          'X-User-ID': clerkUser?.id || '',
          'Cache-Control': 'max-age=300' // 5 minutes
        }
      });
      const data = response.data;
      
      console.log('Raw users from API:', data.users.map((u: User) => u.id));
      
      // Double client-side filtering to ensure we don't show:
      // 1. Users with mutual matches
      // 2. Users that have already been viewed
      const filteredData = data.users.filter((user: User) => {
        const isMatch = mutualMatchIds.includes(user.id);
        const isViewed = viewedProfileIds.includes(user.id);
        
        if (isMatch) console.log(`Excluding user ${user.id} - already matched`);
        if (isViewed) console.log(`Excluding user ${user.id} - already viewed`);
        
        return !isMatch && !isViewed;
      });
      
      console.log('Filtered users after client-side filtering:', filteredData.map((u: User) => u.id));
      
      if (resetPage || currentParams !== lastFetchedParams.split('&page=')[0]) {
        setFilteredUsers(filteredData);
      } else {
        setFilteredUsers(prev => [...prev, ...filteredData]);
      }
      
      setPage(newPage + 1);
      setHasMore(data.pagination.page < data.pagination.totalPages);
      
      // Reset current index if we're resetting the page and have results
      if ((resetPage || currentParams !== lastFetchedParams.split('&page=')[0]) && filteredData.length > 0) {
        setCurrentIndex(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching users'));
      console.error('Error fetching users:', err);
    } finally {
      setIsLoading(false);
    }
  }, [
    clerkUser?.id,
    filterParams,
    page,
    lastFetchedParams,
    filteredUsers.length,
    mutualMatchIds,
    viewedProfileIds
  ]);
  
  // Mark a profile as viewed
  const markProfileViewed = useCallback(async (viewedId: string) => {
    if (!clerkUser?.id) return;
    
    try {
      await axios.post('/api/view', { 
        userId: clerkUser.id, 
        viewedId 
      });
      
      // Also update local state to immediately filter this profile
      setViewedProfileIds(prev => [...prev, viewedId]);
    } catch (err) {
      console.error('Error marking profile as viewed:', err);
    }
  }, [clerkUser?.id]);
  
  // Reset viewed profiles
  const resetViewedProfiles = useCallback(async () => {
    if (!clerkUser?.id) return;
    
    setIsLoading(true); // Show loading state immediately
    
    try {
      // Clear local state immediately for a responsive UI feel
      setViewedProfileIds([]);
      
      // Make the API call to reset in the background
      await axios.delete('/api/view', { 
        data: { userId: clerkUser.id } 
      });
      
      // Reset page to 1
      setPage(1);
      
      // Clear filtered users immediately to prevent seeing old results
      setFilteredUsers([]);
      
      // Return a successful promise
      return Promise.resolve();
    } catch (err) {
      console.error('Error resetting viewed profiles:', err);
      return Promise.reject(err);
    } finally {
      setIsLoading(false);
    }
  }, [clerkUser?.id]);
  
  // Refresh filtered users - useful when we run out of profiles
  const refreshFilteredUsers = useCallback(async () => {
    // Clear current filtered users immediately for UI responsiveness
    setFilteredUsers([]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Run these requests in parallel
      await Promise.all([
        fetchMutualMatches(),
        fetchViewedProfiles()
      ]);
      
      // Then fetch users with the updated filters
      await fetchUsers(true);
      return Promise.resolve();
    } catch (err) {
      console.error('Error refreshing filtered users:', err);
      return Promise.reject(err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchMutualMatches, fetchViewedProfiles, fetchUsers]);
  
  // ADDED: Initial fetch when filters or filterParams change
  useEffect(() => {
    if (filterParams) {
      fetchUsers(true);
    }
  }, [filterParams?.toString(), fetchUsers]);
  
  // Load more profiles when nearing the end
  useEffect(() => {
    if (currentIndex >= filteredUsers.length - 2 && hasMore && !isLoading) {
      fetchUsers(false);
    }
  }, [currentIndex, fetchUsers, filteredUsers.length, hasMore, isLoading]);
  
  // Mark profile as viewed when changing index
  useEffect(() => {
    if (!filteredUsers[currentIndex]?.id || !clerkUser?.id) return;
    
    // Only mark as viewed if user spends at least 5 seconds on a profile
    const timer = setTimeout(() => {
      markProfileViewed(filteredUsers[currentIndex].id);
    }, 10000);
    
    // Clear the timer if the user changes profiles before the delay
    return () => clearTimeout(timer);
  }, [currentIndex, filteredUsers, clerkUser?.id, markProfileViewed]);
  
  return {
    filteredUsers,
    currentIndex,
    setCurrentIndex,
    matches,
    setMatches,
    selectedMatch,
    setSelectedMatch,
    isLoading,
    error,
    hasMore,
    resetViewedProfiles,
    refreshFilteredUsers, // Export the refresh function
    viewedProfileIds // Export viewed profile IDs for additional client-side filtering if needed
  }
}