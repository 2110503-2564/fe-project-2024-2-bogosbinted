"use client"
import DateReserve from "@/components/DateReserve"
import { useState } from "react"
import dayjs, { Dayjs  } from "dayjs"
import { useDispatch, UseDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../../interface"

export default function Booking(){
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [venue, setVenue] = useState('Bloom')
    const [name, setName] = useState("")  
    const [contactNumber, setContactNumber] = useState("")
    
    const dispatch = useDispatch<AppDispatch>()
    
    const makeBooking = () =>{
        if(venue && name && contactNumber && bookingDate){
            const item:BookingItem={
                nameLastname: name,
                tel: contactNumber,
                venue: venue,
                bookDate: dayjs(bookingDate).format("DD/MM/YYYY")
            }
            dispatch(addBooking(item))
            
        }
    }

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-meduim">New Booking</div>
            <div>
                <DateReserve 
                onNameChange={(value:string)=>{setName(value)}}
                onContactChange={(value:string)=>setContactNumber(value)}
                onDateChange={(value:Dayjs|null)=>{setBookingDate(value)}}
                onVenueChange={(value:string)=>{setVenue(value)}}
                
                />
            </div>
            <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white" onClick={makeBooking}>Book Venue</button>
        </main>
    )
}