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
  onEmailChange,
  valueName,
  valueTel,
  valueEmail,
  valueCamp,
  valueDate,
}: {
  onNameChange: (value: string) => void;
  onContactChange: (value: string) => void;
  onDateChange: (value: Dayjs | null) => void;
  onCampChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  valueName: string;
  valueTel: string;
  valueEmail: string;
  valueCamp: string;
  valueDate: Dayjs | null;
}) {

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-col">
      <label htmlFor="Name-Lastname">Name-Lastname</label>
      <TextField
        name="Name-Lastname"
        id="Name-Lastname"
        variant="standard"
        value={valueName}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <label htmlFor="Email">Email</label>
      <TextField
        name="email"
        id="email"
        variant="standard"
        value={valueEmail}
        onChange={(e) => onEmailChange(e.target.value)}
      />

      <label htmlFor="Contact-Number">Contact-Number</label>
      <TextField
        name="Contact-Number"
        id="Contact-Number"
        variant="standard"
        value={valueTel}
        onChange={(e) => onContactChange(e.target.value)}
      />

      <div className="flex flex-row justify-center space-x-5">
        <MUILocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white"
            value={valueDate}
            onChange={(value) => onDateChange(value)}
          />
        </MUILocalizationProvider>

        <Select
          variant="standard"
          name="camp"
          id="camp"
          className="h-[2em] w-[200px]"
          value={valueCamp}
          onChange={(e) => onCampChange(e.target.value)}
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
