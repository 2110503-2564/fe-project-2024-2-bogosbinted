export default async function getCampgrounds() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response = await fetch("http://localhost:5000/api/v1/venues")
    if(!response.ok) {
        throw new Error("Failed to fetch venues")
    }
    return await response.json()
}