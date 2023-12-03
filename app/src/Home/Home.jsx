import {useNavigate} from "react-router-dom"
import ButtonCss from './button.css'
import HCss from './h1.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const bull = (
  <Box
    component="span"
    sx={{ mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);



function Home() {

  const clientCard = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14, color:'#dee4e7' }} color="text.secondary" gutterBottom>
          Have a look at
        </Typography>
        <Typography variant="h5" component="div"  sx={{color:'#e0fbfc'}}>
         <i> Your client list </i>
        </Typography>
          
      </CardContent>
      <CardActions >
        <Fab variant="extended" color="primary" sx={{ margin: 'auto' }} onClick={() => {navigate("/clients")}}>
                  <AutoAwesomeMosaicIcon sx={{ mr: 1 }} />
                  Go to client List
             </Fab>
      </CardActions>
    </React.Fragment>
  );
  
  const appointmentCard = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14, color:'#dee4e7' }} color="text.secondary" gutterBottom>
          Have a look at
        </Typography>
        <Typography variant="h5" component="div" sx={{color:'#e0fbfc'}}>
         <i> Your appoitment list </i>
        </Typography>
          
      </CardContent>
      <CardActions >
        
        <Fab variant="extended" color="primary" sx={{ margin: 'auto' }} onClick={() => {navigate("/appointments")}}>
                  <AutoAwesomeMotionIcon sx={{ mr: 1 }} />
                  Go to appointment list
             </Fab>
      </CardActions>
    </React.Fragment>
  );

  let navigate = useNavigate()
  return (
    
    <div>
      <div className="header">
        &nbsp;
    </div>
    <h1 className="h1">
      Welcome to Clients-Appointments Application!
    </h1>
    <br />
    <br />
    <br />
    <br />
    {/* <Box sx={{ minWidth: 275, maxWidth: 275}}>
      <Card sx = {{ marginLeft: 'auto' }}variant="outlined">{clientCard} </Card>
      <Card variant="outlined">{appointmentCard}</Card>
    </Box>  */}
     <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 450,
          height: 250,
          margin: 'auto',
          textAlign: 'center',
          borderRadius: '20px'
        },
      }}
    >
      <Paper elevation={3} sx={{paddingTop: '55px', backgroundColor:'#3a5a78'}} >
      {clientCard}
      </Paper>
      <Paper elevation={3} sx={{paddingTop: '55px', backgroundColor:'#3a5a78'}}> {appointmentCard} </Paper>
    </Box>
    
      {/* <button onClick={() => {navigate("/clients")}} className="button">CLIENTS</button> &nbsp; &nbsp;
      <button onClick={() => {navigate("/appointments")}} className="button"> APPOINTMENTS </button> */}
    </div>
  )
}

export default Home;