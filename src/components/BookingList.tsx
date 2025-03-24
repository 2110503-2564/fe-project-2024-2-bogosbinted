"use client";
import { useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function BookingList() {
  const bookingItems = useAppSelector(
    (state) => state.bookSlice.bookItems
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center w-full">
      {bookingItems.length === 0 ? (
        <div className="text-gray-500 text-lg my-4">
          No Venue Booking
        </div>
      ) : (
        bookingItems.map((bookingItem, index) => (
          <div
            key={index}
            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 w-[80%] max-w-md shadow"
          >
            <div className="text-xl font-semibold">
              {bookingItem.nameLastname}
            </div>
            <div className="text-sm text-gray-700">{bookingItem.tel}</div>
            <div className="text-sm text-gray-700">
              {bookingItem.venue}
            </div>
            <div className="text-sm text-gray-700">
              {bookingItem.bookDate}
            </div>
            <button
              className="mt-2 block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
              onClick={() => dispatch(removeBooking(bookingItem))}
            >
              Remove from List
            </button>
          </div>
        ))
      )}
    </div>
  );
}
