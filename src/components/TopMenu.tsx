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
                session? <Link href="/api/auth/signout"><div className='flex items-center h-full px-2 absolute left-5 text-gray-800 text-sm font-lg'>Sign-Out of {session.user?.name}</div></Link>
                :<Link href="/api/auth/signin"><div className='flex items-center h-full px-2 absolute left-5 text-gray-800 text-sm font-lg'>Sign-In</div></Link>
            }
            
        </div>
    );
}