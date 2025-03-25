export default async function updateBooking(
  token: string,
  bookingId: string,
  data: { campground: string; bookDate: string }
) {
  const res = await fetch(
    `https://backend-bogos.vercel.app/api/v1/bookings/${bookingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error("Update failed:", error);
    throw new Error(error.message || "Failed to update booking");
  }

  return await res.json();
}