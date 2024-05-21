import { CircleUserRound } from 'lucide-react'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { DropdownMenu } from './ui/dropdown-menu'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

function UsernameMenu() {
    const {user,logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 flex-bold hover:text-yellow-500 gap-2'>
            <CircleUserRound className='text-yellow-500' />
            {user?.given_name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-yellow-500">
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick={()=>logout()} className= "flex flex-1 font-bold bg-yellow-500">Log out</Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu