import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"

//css
import ButtonCss from './button.css'
import CSS from './h1.css'
//mui 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { textAlign } from '@mui/system';

import axios from 'axios';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';

import { useClientData } from './useDataForViewClient';

const style = {
    width: '100%',
    maxWidth: 560,
    bgcolor: 'background.paper',
    margin: 'auto',
    borderRadius: 10, 
    border: 5, 
    borderColor: '#450fa3'
  };

  const textAlignStyle = {
    textAlign: 'center',
  }

function ViewClient() {

    let navigate = useNavigate();

    const {id} = useParams()
  
    
  const [currentClients, setClients] = useState([])
  const getClients = () => axios.get('http://localhost:3006/clients');
  
  const refreshClients = ()=>{
    getClients().then( res => {
      let client = res.data.find((el) => el.id === id);
      setClients(client);
      
  });
}
  useEffect(() => {
 
   refreshClients();
  },[])

  const { name, surname, address, phoneNumber, email } = currentClients;
 

    return  (
      
    <div>
      <br></br>
        <br></br>
      <h1 className="h1">View <i>client!</i></h1> <br></br>
      {/* <button onClick={() => {navigate("/clients")}} className ="button">CLIENT LIST</button> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" color="secondary" onClick={() => {navigate("/clients")}}>
                  <ArrowBackIcon sx={{ mr: 1 }} />
                  Client list
             </Fab>
             </Box>
      <br></br>
      
       
          <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem sx={{ marginLeft: 'auto'}}>
          <ListItemText primary='Name:'/><ListItemText primary={currentClients.name}/>
        </ListItem>

        <Divider sx={{bgcolor: "secondary.light"}} />

        <ListItem divider  sx={{ marginLeft: 'auto'}}>
        <ListItemText primary='Surname:'/><ListItemText primary={currentClients.surname}/>
        </ListItem>

        <Divider sx={{bgcolor: "secondary.light"}} />

        <ListItem sx={{ marginLeft: 'auto'}}>
        <ListItemText primary='Address:'/><ListItemText primary={currentClients.address} />
        </ListItem>

        <Divider sx={{bgcolor: "secondary.light"}}/>

        <ListItem sx={{ marginLeft: 'auto'}}>
        <ListItemText primary='Phone Number:'/><ListItemText primary={currentClients.phoneNumber} />
        </ListItem>

        <Divider sx={{bgcolor: "secondary.light"}} />

        <ListItem sx={{ marginLeft: 'auto'}}>
        <ListItemText primary='Email:'/><ListItemText primary={currentClients.email} />
        </ListItem>
        </List>
       
   
   
    </div>
  )
}

export default ViewClient;