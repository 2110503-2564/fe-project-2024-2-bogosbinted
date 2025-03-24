import getCampgrounds from "@/libs/getCampgrounds"
import VenueCatalog from "@/components/VenueCatalog"
import { CampgroundJson } from "../../../../interface";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default async function Campground() {
    const campgrounds:CampgroundJson = await getCampgrounds();
    return (
        <main className="text-center p-5 mt-20">
            <h1 className='text-xl font-medium'>Select Your Desired Place</h1>
            <Suspense fallback={<LinearProgress />}>
                <VenueCatalog campgroundsJson={campgrounds}/>
            </Suspense>
        </main>
    )
}