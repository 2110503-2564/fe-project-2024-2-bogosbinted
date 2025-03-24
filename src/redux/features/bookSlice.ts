import { createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";
import { PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
}

const initialState:BookState = { bookItems: [] }

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
              (item) =>
                item.venue === action.payload.venue &&
                item.bookDate === action.payload.bookDate
            );
          
            if (index !== -1) {
              state.bookItems[index] = action.payload;
            } else {
              state.bookItems.push(action.payload);
            }
        },

        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            const bookingToRemove = action.payload;
      
            state.bookItems = state.bookItems.filter(
              (item) =>
                !(
                  item.nameLastname === bookingToRemove.nameLastname &&
                  item.tel === bookingToRemove.tel &&
                  item.venue === bookingToRemove.venue &&
                  item.bookDate === bookingToRemove.bookDate
                )
            )
        }
    }

})
export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer