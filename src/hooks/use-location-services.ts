/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck 
import { useState, useEffect } from 'react'
import geohash from 'ngeohash'
import { toast } from 'sonner'

type LocationCoordinates = {
  latitude: number
  longitude: number
  geohash: string
}

export function useLocationServices(userId?: string) {
  const [locationPermissionRequested, setLocationPermissionRequested] = useState(false)
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [userCoordinates, setUserCoordinates] = useState<LocationCoordinates | null>(null)
  const [isSavingLocation, setIsSavingLocation] = useState(false)
  
  // Load saved location on mount
  useEffect(() => {
    const loadSavedLocation = async () => {
      if (!userId) return;
      
      try {
        const response = await fetch(`/api/user/${userId}/location`);
        
        if (response.ok) {
          const locationData = await response.json();
          
          if (locationData && locationData.latitude && locationData.longitude) {
            setUserCoordinates({
              latitude: locationData.latitude,
              longitude: locationData.longitude,
              geohash: locationData.geohash
            });
            
            // Set userLocation to match GeolocationCoordinates format
            setUserLocation({
              latitude: locationData.latitude,
              longitude: locationData.longitude,
              accuracy: 0,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null
            } as GeolocationCoordinates);
            
            setLocationPermissionRequested(true);
            
            toast("Using saved location", {
              description: `Your previously saved location (${locationData.geohash.substring(0, 5)}...) will be used for matching.`
            });
          }
        }
      } catch (error) {
        console.error("Failed to load saved location:", error);
      }
    };
    
    loadSavedLocation();
  }, [userId]);
  
  // Save location to database
  const saveUserLocationToDatabase = async (locationData: LocationCoordinates) => {
    if (!userId) return;
    
    setIsSavingLocation(true);
    try {
      const response = await fetch(`/api/user/${userId}/location`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(locationData)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const savedLocation = await response.json();
      console.log("Location saved to database:", savedLocation);
      
      toast.success("Location saved", {
        description: "Your location has been saved for matching."
      });
    } catch (error) {
      console.error("Failed to save location:", error);
      toast.error("Failed to save location", {
        description: "Location detected but couldn't be saved. Some features may not work properly."
      });
    } finally {
      setIsSavingLocation(false);
    }
  };
  
  // Request location permission
  const requestLocationPermission = () => {
    setLocationPermissionRequested(true);
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // Generate geohash with precision 7 (city-level precision)
          const geoHashValue = geohash.encode(latitude, longitude, 7);
          
          // Store all location data
          setUserLocation(position.coords);
          setUserCoordinates({
            latitude,
            longitude,
            geohash: geoHashValue
          });
          
          setIsLoadingLocation(false);
          
          // Show success toast with location info
          toast.success("Location detected", {
            description: `Found you at: ${geoHashValue}`
          });
          
          // Save to database if user is authenticated
          if (userId) {
            await saveUserLocationToDatabase({
              latitude,
              longitude,
              geohash: geoHashValue
            });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
          
          // Different error messages based on error code
          const errorMessages = {
            1: "Location access denied. Please enable location permissions in your browser settings.",
            2: "Location unavailable. Please try again later.",
            3: "Location request timed out. Please try again."
          };
          
          const errorMessage = errorMessages[error.code as keyof typeof errorMessages] || "Couldn't get your location";
          
          toast.error("Location access failed", {
            description: errorMessage
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setIsLoadingLocation(false);
      toast.error("Geolocation not supported", {
        description: "Your browser doesn't support location services."
      });
    }
  };
  
  return {
    userLocation,
    userCoordinates,
    isLoadingLocation,
    isSavingLocation,
    locationPermissionRequested,
    requestLocationPermission
  }
}