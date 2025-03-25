export default async function deleteBooking(token: string, bookingId: string) {
    const res = await fetch(`https://backend-bogos.vercel.app/api/v1/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      const error = await res.json();
      console.error("Delete failed:", error);
      throw new Error(error.message || "Failed to delete booking");
    }
  
    return await res.json();
  }