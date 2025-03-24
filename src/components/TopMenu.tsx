import styles from './topmenu.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions} from '@/app/api/auth/[...nextauth]/authOptions'
import { Link } from '@mui/material'
import TopMenuItem from './TopMenuItem';

export default async function TopMenu () {
    const session = await getServerSession(authOptions)
    
    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='Bookings' pageRef='/booking'/>
            <TopMenuItem title='My Bookings' pageRef='/mybooking'/>
            {
    session ? (
        <Link href="/api/auth/signout?callbackUrl=/">
            <div className="flex items-center absolute left-5 h-full px-4 text-white text-sm font-bold hover:[color:rgb(140,96,34)] transition">
                Sign-Out
            </div>
        </Link>
    ) : (
        <div className="flex items-center space-x-4 absolute left-5 h-full">
            <Link href="/register">
            <div className="flex items-center h-full px-4 text-white text-sm font-bold hover:[color:rgb(140,96,34)] transition">
                Register
            </div>
            </Link>
            <Link href="/api/auth/signin?callbackUrl=/">
            <div className="flex items-center h-full px-4 text-white text-sm font-bold hover:[color:rgb(140,96,34)] transition">
                Sign-In
            </div>
            </Link>
        </div>
    )
}
        </div>
    );
}