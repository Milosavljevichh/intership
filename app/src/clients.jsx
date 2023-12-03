import {useNavigate} from "react-router-dom"
import React, { useRef} from 'react'

import ClientsTable from "./components/clientsTable"

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

import ButtonCss from './button.css'
import CSS from './h1.css'

const Clients = () => {
    const clientNameRef = useRef()
    let navigate = useNavigate()
    return ( 
        

        <div className = "client">
            <div className="padding"></div>
            <h1 className="h1">Welcome to your client list</h1>
            <br></br>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" color="primary"  onClick={() => {navigate("/addClient")}}>
                  <AddIcon sx={{ mr: 1 }} />
                  New Client
             </Fab>
             &nbsp;&nbsp; 
             <Fab variant="extended" color="secondary" onClick={() => {navigate("/")}}>
                  <HomeIcon sx={{ mr: 1 }} />
                  Homepage
             </Fab>
            </Box>
            <br></br>
            <br></br>
            <ClientsTable />

            

    <br></br>
            
        </div>
     );
}

export default Clients