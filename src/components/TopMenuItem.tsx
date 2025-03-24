import styles from './topmenu.module.css'
import Link from 'next/link'

export default function TopMenuItem ({ title, pageRef }:{ title:string, pageRef:string }) {
    return (
        <Link className="flex items-center h-full px-4 text-white text-sm font-bold hover:[color:rgb(140,96,34)] transition" href={pageRef}>
            {title}
        </Link>
    )
}