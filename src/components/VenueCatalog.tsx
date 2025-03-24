import Link from "next/link";
import Card from "./Card";
import { CampgroundItem,CampgroundJson } from "../../interface";

export default async function CampgroundCatalog({campgroundsJson}:{campgroundsJson:CampgroundJson}){
    const campgroundJsonReady = await campgroundsJson
    return(
        <>
        We got {campgroundJsonReady.count} campgrounds right now in our catalog to choose from.
        <div style={{margin:"40px" ,display:"flex",
        flexDirection:"row" ,alignContent:"space-around",
        justifyContent:"space-around",flexWrap:"wrap",padding:"10px"}}>
            {
                campgroundJsonReady.data.map((campgroundItem:CampgroundItem)=>(
                    <Link href={`/campground/${campgroundItem.id}`}className="w-1/5">
                        <Card venueName={campgroundItem.name} imgSrc={campgroundItem.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}