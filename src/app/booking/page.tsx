"use client"
import DateReserve from "@/components/DateReserve"
import { useState } from "react"
import dayjs, { Dayjs  } from "dayjs"
import { useDispatch, UseDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../../interface"
import { useSession } from "next-auth/react";
import createBooking from "@/libs/createBooking";

export default function Booking(){
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [campground, setCampground] = useState('it my life cafe x camp')
    const [name, setName] = useState("")  
    const [contactNumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const { data: session, status } = useSession();
    
    const makeBooking = async () =>{
        console.log("Session data:", session);
        if (!session?.user?.token) {
            alert("You must be logged in to book!");
            return;
          }
        
          if (campground && email && name && contactNumber && bookingDate) {
            try {

                const campgroundMap: Record<string, string> = {
                    "it my life cafe x camp": "67c26d6769e9a7daead357b1",
                    "taketime": "67c26dbe69e9a7daead357b4",
                    "macamping": "67c26e0569e9a7daead357b7",
                    "patoi": "67c26e5669e9a7daead357ba"
                  };
                  
                const campgroundId = campgroundMap[campground];

                if (!campgroundId) {
                    alert("Campground ID not found!");
                    return;
                }
                  
                await createBooking(session.user.token, campgroundId, dayjs(bookingDate).format("YYYY-MM-DD"));
                
                alert("Booking successful!");
        
                setCampground("");
                setName("");
                setContactNumber("");
                setEmail("");
                setBookingDate(null);

            } catch (err: any) {
              console.error("Booking error:", err);
              alert(err.message);
            }
          }
    }

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div>
            <DateReserve
                onNameChange={setName}
                onContactChange={setContactNumber}
                onDateChange={setBookingDate}
                onCampChange={setCampground}
                onEmailChange={setEmail}

                valueName={name}
                valueTel={contactNumber}
                valueEmail={email}
                valueCamp={campground}
                valueDate={bookingDate}
            />
            </div>
            <button name="Book Venue" className="block rounded-md bg-gray-600 hover:bg-gray-800 px-3 py-2
            shadow-sm text-white" onClick={makeBooking}>Book Venue</button>
        </main>
    )
}