"use client";
import { useAppSelector } from "@/redux/store";
import { removeBooking, editBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useState } from "react"
import { Select, MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import dayjs from "dayjs";
import updateBooking from "@/libs/updateBooking";
import getBookings from "@/libs/getBookings";
import deleteBooking from "@/libs/deleteBooking";

export default function BookingList() {

  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    campground: "",
    bookDate: "",
  });

  const handleDelete = async (bookingId: string) => {
    if (!session?.user?.token) return;
  
    const confirm = window.confirm("Are you sure you want to delete this booking?");
    if (!confirm) return;
  
    try {
      await deleteBooking(session.user.token, bookingId);
      alert("Booking deleted.");
  
      const res = await getBookings(session.user.token);
      setBookings(res.data);
    } catch (err: any) {
      alert(err.message || "Failed to delete booking");
    }
  };

  const handleEditClick = (booking: any) => {
    setEditingId(booking._id);
    setEditForm({
      campground: booking.campground.name,
      bookDate: booking.bookDate.slice(0, 10), // format YYYY-MM-DD
    });
  };

  const handleSaveClick = async (bookingId: string) => {
    if (!session?.user?.token) return;
  
    try {
      const campgroundMap: Record<string, string> = {
        "it my life cafe x camp": "67c26d6769e9a7daead357b1",
        "taketime": "67c26dbe69e9a7daead357b4",
        "macamping": "67c26e0569e9a7daead357b7",
        "patoi": "67c26e5669e9a7daead357ba",
      };
  
      const campgroundId = campgroundMap[editForm.campground];
  
      await updateBooking(session.user.token, bookingId, {
        campground: campgroundId,
        bookDate: editForm.bookDate,
      });
  
      alert("Booking updated!");
      setEditingId(null);
  
      const res = await getBookings(session.user.token);
      setBookings(res.data);
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      if(!session?.user?.token) return;

      try {
        const res = await getBookings(session.user.token);
        console.log("Fetched bookings:", res.data);
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
          {editingId === bookingItem._id ? (
            <>
              <Select
                variant="standard"
                value={editForm.campground}
                onChange={(e) =>
                  setEditForm((prev) => ({
                    ...prev,
                    campground: e.target.value,
                  }))
                }
                className="w-full mb-2"
              >
                <MenuItem value="it my life cafe x camp">it my life cafe x camp</MenuItem>
                <MenuItem value="taketime">Take Time Nature</MenuItem>
                <MenuItem value="macamping">Ma-Camping & Resort in Ra-yong</MenuItem>
                <MenuItem value="patoi">Patoi House</MenuItem>
              </Select>
  
              <TextField
                type="date"
                variant="standard"
                value={editForm.bookDate}
                onChange={(e) =>
                  setEditForm((prev) => ({
                    ...prev,
                    bookDate: e.target.value,
                  }))
                }
                className="w-full mb-2"
              />
  
              <div className="flex gap-2 mt-2 justify-end">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  onClick={() => handleSaveClick(bookingItem._id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-xl font-semibold">{bookingItem.user?.name}</div>
              <div className="text-sm text-gray-700">{bookingItem.campground?.name}</div>
              <div className="text-sm text-gray-700">
                {bookingItem.bookDate.slice(0, 10)}
              </div>
  
              <div className="flex gap-2 mt-2 justify-end">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  onClick={() => handleEditClick(bookingItem)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(bookingItem._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );  
}
