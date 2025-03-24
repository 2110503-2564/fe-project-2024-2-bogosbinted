// 'use client'
// import Card from '@/components/Card'
// import { useReducer } from 'react'
// import Link from 'next/link'

// export default function CardPanel() {
//     const cardReducer = (venueList: Map<string, number>, action: { type: string; venueName: string; rating?: number}) => {
//         switch(action.type) {
//             case 'add': {
//                 const newVenueList = new Map(venueList);
//                 newVenueList.set(action.venueName, action.rating??0);
//                 return newVenueList
//             }
//             case 'remove': {
//                 const newVenueList = new Map(venueList);
//                 newVenueList.delete(action.venueName);
//                 return newVenueList;
//             }
//             default: {
//                 return venueList;
//             }
//         }
//     }

//     let defaultVenue = new Map<string, number>([
//         ["The Bloom Pavilion", 0],
//         ["The Grand Table", 0],
//         ["Spark Space", 0],
//     ]);

//     const [venueList, dispatchRate] = useReducer(cardReducer, defaultVenue)

//     const mockVenueRepo = [{vid:"001", name:"The Bloom Pavilion", image:"/img/bloom.jpg"},
//             {vid:"002", name:"Spark Space", image:"/img/sparkspace.jpg"},
//             {vid:"003", name:"The Grand Table", image:"/img/grandtable.jpg"}
//     ]

//     return(
//         <div>
//             <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
//                 {
//                     mockVenueRepo.map((cardItem)=>(
//                         <Link href={`/venue/${cardItem.vid}`} className="w-1/5">
//                         <Card venueName={cardItem.name} imgSrc={cardItem.image}
//                         />
//                         </Link>
//                         )
//                     )
//                 }
//             </div>
//             <div className="w-full text-xl font-medium">Venue List with Ratings : {venueList.size}</div>
//                 { Array.from(venueList).map(([venueName, rating])=><div data-testid={venueName}
//                 onClick={()=>dispatchRate({type:'remove', venueName:venueName})}
//                 >{venueName}:{rating}</div>) }
//         </div>
//     )
// }