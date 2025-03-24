import Image from 'next/image';
import getCampground from '@/libs/getCampground'

export default async function CampgroundDetailPage({params}: {params: {cid: string}}) {
    const campgroundDetail = await getCampground(params.cid)
    
    return (
        <main className="text-center p-5">
            <h1 className='text-lg font-medium'>{campgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
            <Image src={campgroundDetail.data.picture}
                alt='Product Picture'
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black'
            />
            <div className='text-md mx-5 text-left'>{campgroundDetail.data.description}
                <div>{campgroundDetail.data.name}</div>
                <div>{campgroundDetail.data.address}</div>
                <div>Call us at {campgroundDetail.data.tel}</div>
            </div>
            </div>
        </main>
    )
}