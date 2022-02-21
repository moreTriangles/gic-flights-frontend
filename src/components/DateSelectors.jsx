import { useState } from 'react'
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, Stack, TextField } from "@mui/material";
import TransitionsModal from './TransitionsModal';

function addDays(date, days) {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

export function DateSelectors() {
    const [startDate, setStartDate] = useState(new Date('2022-08-10'));
    const [endDate, setEndDate] = useState(addDays(startDate, 135));

    return (
        <div>
            <Stack justifyContent='center' spacing={5} direction='row' marginTop='20px'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    minDate = {new Date('2022-08-10')}
                    maxDate = {new Date('2022-08-14')}
                    renderInput={(props) => <TextField variant='outlined' {...props} />}
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(newValue);
                    }}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    minDate = {addDays(startDate, 135)}
                    maxDate = {new Date('2023-01-07')}
                    renderInput={(props) => <TextField variant='outlined' {...props} />}
                    value={endDate}
                    onChange={(newValue) => {
                        setEndDate(newValue);
                    }}
                    />
                </LocalizationProvider>
            </Stack>
            <TransitionsModal startDate={startDate} endDate={endDate}/>
        </div>
        
    )
}