export default async function getCampground(id:string) {
    const response = await fetch(`https://backend-bogos.vercel.app/api/v1/campgrounds/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch venue")
    }
    return await response.json()
}   