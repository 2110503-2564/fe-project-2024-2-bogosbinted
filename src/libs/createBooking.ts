export default async function createBooking(
    token: string,
    campgroundId: string,
    bookDate: string
) {
    const res = await fetch(`https://backend-bogos.vercel.app/api/v1/campgrounds/${campgroundId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ bookDate })
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create booking");
    }

    return await res.json();
}