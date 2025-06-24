'use client'

import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ModeToggle } from './toggle-button'
import { ChevronDown, Menu, Sparkles, UserRoundPen, UserSearch } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Button } from './button'
import { useEffect, useState } from 'react'

export const Navbar = ({ showSignIn = true }: { showSignIn?: boolean }) => {
  const [scrolled, setScrolled] = useState(false)
  const { isSignedIn } = useUser()

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
        "flex items-center fixed top-0 z-50 w-full h-18 transition-all duration-200",
        scrolled 
          ? "fixed top-0 w-full border-b z-50  bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "fixed top-0 w-full border-b z-50  bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                HackMate
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex items-center sm:space-x-6">
            <div className="flex items-center space-x-2 md:space-x-5">
              <ModeToggle/>
            
              {isSignedIn ? (
                <>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant={'outline'} className='hover:cursor-pointer'>
                              <Menu className='h-6 w-6 block md:hidden' />
                              <span className='hidden md:block'> Menu </span>
                              <ChevronDown className='h-6 w-6 hidden md:block'/>
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="overflow-y-auto [&>*]:text-lg md:[&>*]:text-base [&>*]:hover:cursor-pointer">
                          {/* <DropdownMenuItem>
                              <Link href={'/'} className='flex items-center gap-2'>
                                  <House  className='h-8 w-8 md:h-6 md:w-6'/>
                                  <span> Home </span>
                              </Link>
                          </DropdownMenuItem> */}
                          <DropdownMenuItem>
                              <Link href={'/explore'} className='flex items-center gap-2'>
                                  <UserSearch className='h-8 w-8 md:h-6 md:w-6'/>
                                  <span> Explore </span>
                              </Link>
                          </DropdownMenuItem>          
                          <DropdownMenuItem>
                              <Link href={'/profile'} className='flex items-center gap-2'>
                                  <UserRoundPen className='h-8 w-8 md:h-6 md:w-6'/>
                                  <span> Profile </span>
                              </Link>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>

                  <UserButton appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10',
                      userButtonPopoverCard: 'shadow-xl',
                      userButtonMainIdentifier: 'font-semibold',
                    }
                  }}
                  />
                </>
                ) : (
                  showSignIn &&
                  <SignInButton>
                    <Button variant={'outline'} className='hover:cursor-pointer'> Sign In </Button>
                  </SignInButton>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
