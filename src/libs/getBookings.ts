export default async function getBookings(token: string) {
  const res = await fetch('https://backend-bogos.vercel.app/api/v1/bookings', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Fetch bookings failed:", error);
    throw new Error(error.message || "Failed to fetch bookings");
  }

  return await res.json(); // should return { success, count, data }
}