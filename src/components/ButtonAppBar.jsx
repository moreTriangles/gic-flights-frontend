import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const styles = theme => ({
  input: {
    color: "red"
  }
});

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" marginX='auto' component="div">
              Flight Simulator
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// export default withStyles(styles)(ButtonAppBar);