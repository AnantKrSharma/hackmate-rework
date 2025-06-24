import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Linkedin, Twitter } from "lucide-react";
import { User, ContactInfo } from "../../types";

interface MatchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentUser: User | null
  matchedUser: User | null
  onContinueSwiping?: () => void;
  onStartChat?: () => void;
}

export default function MatchDialog({
  open,
  onOpenChange,
  currentUser,
  matchedUser
}: MatchDialogProps) {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [, setIsLoading] = useState(false);
  
  // Fetch contact info when dialog opens
  useEffect(() => {
    const fetchContactInfo = async () => {
      if (!open || !matchedUser || !matchedUser.id) return;
      
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/user/${matchedUser.id}/contactInfo`);
        setContactInfo(response.data.contactInfo);
      } catch (error) {
        console.error('Error fetching contact info:', error);
        // Fall back to using any existing contact info
        setContactInfo(matchedUser.contactInfo || null);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContactInfo();
  }, [open, matchedUser]);
  
  if (!matchedUser || !currentUser) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">It&apos;s a Match! 🎉</DialogTitle>
          <DialogDescription className="text-center">
            You and {matchedUser.name} have liked each other
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center py-4">
          <div className="relative">
            {matchedUser.avatarUrl ? (
              <img
                src={matchedUser.avatarUrl}
                alt={matchedUser.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center border-4 border-primary">
                <span className="text-4xl font-bold text-blue-300">
                  {matchedUser.name.charAt(0)}
                </span>
              </div>
            )}
            
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full">
              New Match!
            </div>
          </div>
        </div>
        
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg">{matchedUser.name}</h3>
          
          {/* Social Links Row */}
          <div className="flex justify-center gap-2 mt-2">
            {contactInfo?.linkedinUrl && (
              <a 
                href={contactInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            
            {contactInfo?.twitterUrl && (
              <a 
                href={contactInfo.twitterUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="space-y-3 border-t pt-3">
          <p className="text-sm text-center">
            You can now connect with {matchedUser.name} directly!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {contactInfo?.email && (
              <div className="w-full sm:w-auto">
                  <span className="select-text">{contactInfo.email}</span>
              </div>
            )}
            
            {contactInfo?.scheduleUrl && (
              <Button
                variant="outline"
                className="w-full sm:w-auto hover:cursor-pointer"
                onClick={() => window.open(contactInfo.scheduleUrl, '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            )}
          </div>
        </div>
        
        <DialogFooter className="pt-2">
          <Button 
            variant="secondary" 
            className="w-full sm:w-auto hover:cursor-pointer"
            onClick={() => onOpenChange(false)}
          >
            Continue Swiping
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}