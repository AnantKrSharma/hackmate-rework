'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ModeToggle } from './toggle-button'
import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export const AuthNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full h-16 transition-all duration-200",
        scrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                HackMate
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-8 w-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
