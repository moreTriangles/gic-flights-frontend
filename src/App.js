import './App.css';
import { getFlights } from './api/FlightsApi';
import { useState, useEffect } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import { DateSelectors } from './components/DateSelectors';
import { Data } from './components/Data';

function App() {

  return (
    <div className="App">
      <ButtonAppBar />
      <DateSelectors />
      <Data />
    </div>
  );
}

export default App;
