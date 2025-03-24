'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
    const { data:session } = useSession()
    const router = useRouter()

    return (
        <div className={styles.banner}>
            <Image src={'/imgs/banner.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-7xl font-medium'>EVERGLOW CAMP</h1>
                <h4 className='text-2xl font-serif'>Time Camping isn’t time spent, it’s invested.</h4>
            </div>
            {
                session ? ( <div className="z-30 absolute top-20 left-1/2 transform -translate-x-1/2 font-semibold text-white text-xl" >
                Hello {session.user?.name}! Welcome to</div>) : null
            }
            <button className="bg-gray-600 text-white font-bold 
            py-4 px-8 m-4 rounded-lg z-30 absolute bottom-20 left-1/2 transform -translate-x-1/2
            hover:bg-gray-800 transition-colors duration-200 text-lg" 
            onClick={(e) => {e.stopPropagation(); router.push('/campground'); }}
            >
            VIEW CAMPGROUNDS
            </button>
        </div>

    )
}