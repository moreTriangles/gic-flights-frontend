import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getBestFlights } from '../api/FlightsApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const [returnFlight, setReturnFlight] = React.useState("")
  const [departureFlight, setDepartureFlight] = React.useState("")

  const handleOpen = () => {
    setOpen(true);
    getBestFlights(props.startDate, props.endDate)
      .then(res => {
          res.json().then(data => {  
            const d = data[0]
            const dString = `${d['flight_name']} from ${d['departure_city']} to ${d['arrival_city']}. Time: ${d['departure_time'].slice(0,5)} to ${d['arrival_time'].slice(0,5)}. Price: ${d['price']}`
            setDepartureFlight(dString)
            const r = data[1]
            const rString = `${r['flight_name']} from ${r['departure_city']} to ${r['arrival_city']}. Time: ${r['departure_time'].slice(0,5)} to ${r['arrival_time'].slice(0,5)}. Price: ${r['price']}`
            setReturnFlight(rString)
          })
      })
  }
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Button sx={{ marginTop: '20px' }} variant='contained' onClick={handleOpen}>Find Best Flights</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Best Departure Flight from Singapore to Incheon
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {departureFlight}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Best Return Flight from Incheon to Singapore
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {returnFlight}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}