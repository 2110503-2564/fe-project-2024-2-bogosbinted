"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";

export default function DateReserve({
  onNameChange,
  onContactChange,
  onDateChange,
  onCampChange,
  onEmailChange
}: {
  onNameChange: (value: string) => void;
  onContactChange: (value: string) => void;
  onDateChange: (value: Dayjs | null) => void;
  onCampChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}) {
  const [nameLastname, setNameLastname] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [bookdate, setBookDate] = useState<Dayjs | null>(null);
  const [campground, setCampground] = useState<string>("it my life cafe x camp");
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setNameLastname(newValue);
    onNameChange(newValue); 
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTel(newValue);
    onContactChange(newValue); 
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setEmail(newValue);
    onEmailChange(newValue); 
  };

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-col">
      <label htmlFor="Name-Lastname">Name-Lastname</label>
      <TextField
        name="Name-Lastname"
        id="Name-Lastname"
        variant="standard"
        value={nameLastname}
        onChange={handleNameChange}
      />

      <label htmlFor="Email">Email</label>
      <TextField
        name="email"
        id="email"
        variant="standard"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="Contact-Number">Contact-Number</label>
      <TextField
        name="Contact-Number"
        id="Contact-Number"
        variant="standard"
        value={tel}
        onChange={handleContactChange}
      />

      <div className="flex flex-row justify-center space-x-5">
        <MUILocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white"
            value={bookdate}
            onChange={(value) => {
              setBookDate(value);
              onDateChange(value); 
            }}
          />
        </MUILocalizationProvider>

        <Select
          variant="standard"
          name="camp"
          id="camp"
          className="h-[2em] w-[200px]"
          value={campground}
          onChange={(e) => {
            const newValue = e.target.value;
            setCampground(newValue);
            onCampChange(newValue);
          }}
        >
          <MenuItem value="it my life cafe x camp">it my life cafe x camp</MenuItem>
          <MenuItem value="taketime">Take Time Nature</MenuItem>
          <MenuItem value="macamping">Ma-Camping & Resort in Ra-yong</MenuItem>
          <MenuItem value="patoi">Patoi House</MenuItem>
        </Select>
      </div>
    </div>
  );
}
