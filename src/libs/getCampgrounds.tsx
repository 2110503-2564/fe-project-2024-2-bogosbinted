export default async function getCampgrounds() {
    const response = await fetch("https://backend-bogos.vercel.app/api/v1/campgrounds")
    if(!response.ok) {
        throw new Error("Failed to fetch venues")
    }
    return await response.json()
}