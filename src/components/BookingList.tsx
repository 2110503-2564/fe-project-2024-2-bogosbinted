"use client";
import { useAppSelector } from "@/redux/store";
import { removeBooking, editBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useState } from "react"
import { Select, MenuItem, TextField } from "@mui/material";

export default function BookingList() {
  const bookingItems = useAppSelector(
    (state) => state.bookSlice.bookItems
  );
  const { data: session, status } = useSession();
  const dispatch = useDispatch<AppDispatch>();

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    nameLastname: "",
    tel: "",
    campground: "",
    bookDate: ""
  });

  if (!session) {
    return (
      <div className="text-red-500 text-lg my-4">
        You must be logged in to view your bookings.
      </div>
    );
  }

  // const userBookings = bookingItems.filter(
  //   (bookingItem) => bookingItem.email === session.user?.email
  // );

  const handleEditClick = (index: number, bookingItem: any) => {
    setEditingIndex(index);
    setEditForm(bookingItem);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    if (editingIndex === null) return;

    const updatedBooking = {
      ...editForm,
      email: session.user?.email
    }

    // Dispatch the editBooking action
    dispatch(editBooking({ index: editingIndex, updatedBooking }));

    // Clear editing state
    setEditingIndex(null);
  };

  // Handle Cancel button click
  const handleCancelClick = () => {
    setEditingIndex(null);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {bookingItems.length === 0 ? (
        <div className="text-gray-500 text-lg my-4">No Venue Booking</div>
      ) : (
        bookingItems.map((bookingItem, index) => (
          <div
            key={index}
            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 w-[80%] max-w-md shadow"
          >
            {/* If this is the booking being edited */}
            {editingIndex === index ? (
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="nameLastname"
                  value={editForm.nameLastname}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="border p-1 rounded"
                />
                <input
                  type="text"
                  name="tel"
                  value={editForm.tel}
                  onChange={handleInputChange}
                  placeholder="Tel"
                  className="border p-1 rounded"
                />
                <Select
                  variant="standard"
                  name="campground"
                  id="campground"
                  className="w-full"
                  value={editForm.campground}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setEditForm((prev) => ({
                      ...prev,
                      campground: newValue
                    }));
                  }}
                >
                  <MenuItem value="it my life cafe x camp">it my life cafe x camp</MenuItem>
                  <MenuItem value="taketime">Take Time Nature</MenuItem>
                  <MenuItem value="macamping">Ma-Camping & Resort in Ra-yong</MenuItem>
                  <MenuItem value="patoi">Patoi House</MenuItem>
                </Select>
                <input
                  type="date"
                  name="bookDate"
                  value={editForm.bookDate}
                  onChange={handleInputChange}
                  placeholder="Date"
                  className="border p-1 rounded"
                />

                <div className="flex gap-2">
                  <button
                    className="mt-2 block rounded-md bg-green-600 hover:bg-green-700 px-3 py-1 text-white shadow-sm"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="mt-2 block rounded-md bg-gray-400 hover:bg-gray-500 px-3 py-1 text-white shadow-sm"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Default view mode */}
                <div className="text-xl font-semibold">{bookingItem.nameLastname}</div>
                <div className="text-sm text-gray-700">{bookingItem.tel}</div>
                <div className="text-sm text-gray-700">{bookingItem.campground}</div>
                <div className="text-sm text-gray-700">{bookingItem.bookDate}</div>

                <div className="flex gap-2 mt-2">
                  <button
                    className="rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                    onClick={() => dispatch(removeBooking(bookingItem))}
                  >
                    Remove from List
                  </button>

                  <button
                    className="rounded-md bg-yellow-500 hover:bg-yellow-600 px-3 py-1 text-white shadow-sm"
                    onClick={() => handleEditClick(index, bookingItem)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
