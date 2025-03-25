"use client";
import { useAppSelector } from "@/redux/store";
import { removeBooking, editBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useState } from "react"
import { Select, MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import getBookings from "@/libs/getBookings";

export default function BookingList() {

  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if(!session?.user?.token) return;

      try {
        const res = await getBookings(session.user.token);
        setBookings(res.data);
      } catch(err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [session]);

  if(!session){
    return (
      <div className="text-red-500 text-lg my-4">You must be logged in to view bookings.</div>
    );
  }

  if (loading) {
    return (
      <div className="text-gray-500 text-lg my-4 animate-pulse">
        Loading your bookings...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-lg my-4">Error: {error}</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-gray-500 text-lg my-4">No bookings found</div>;
  }
  
  return (
    <div className="flex flex-col items-center w-full">
      {bookings.map((bookingItem: any, index: number) => (
        <div
          key={index}
          className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 w-[80%] max-w-md shadow"
        >
          <div className="text-xl font-semibold">{session.user?.name}</div>
          <div className="text-sm text-gray-700">{bookingItem.campground?.name}</div>
          <div className="text-sm text-gray-700">
            {bookingItem.bookDate.slice(0, 10)}
          </div>
        </div>
      ))}
    </div>
  );
}
