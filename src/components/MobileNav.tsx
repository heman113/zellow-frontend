import {  CircleUserRound, Menu } from 'lucide-react'
import { Sheet , SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './MobileNavLinks'

function MobileNav() {
     const {isAuthenticated, user , loginWithRedirect} = useAuth0()
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-yellow-500'/>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                {isAuthenticated ? 
                <span className='flex items-center font-bold gap-2'> 
                <CircleUserRound  className='text-yellow-500'/>
                {user?.given_name}
                </span> : 
                (<span>Welcome to Zellow!</span>)}
                
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex flex-col gap-4'>
                {isAuthenticated ? (<MobileNavLinks />) : 
                (<Button onClick={()=>loginWithRedirect()} className='flex-1 font-bold bg-yellow-500'>Log In </Button>)}
                
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav