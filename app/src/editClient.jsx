import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { useParams } from 'react-router-dom';
//css
import CSS from './h1.css'
//mui
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme } from '@mui/material/styles';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useQuery } from 'react-query'

import { useClientData } from './useDataForEditClient';


const EditClient = () => {

const navigate = useNavigate()

const {id} = useParams()
  
    
  const [currentClients, setCurrentClients] = useState([])
  const getClients = () => axios.get('http://localhost:3006/clients');
  
  const refreshClients = ()=>{
    getClients().then( res => {
      let client = res.data.find((el) => el.id === id);
      setCurrentClients(client); 
  });
}

const { name, surname, address, phoneNumber, email } = currentClients;
 
 
//values 
const [newName, setName] = useState();
const [newSurname, setSurname] = useState();
const [newAddress, setAddress] = useState();
const [newPhone, setPhone] = useState();
const [newEmail, setEmail] = useState();

//handle field change
const handleNameChange = event => {
  // (e) => setName(e.target.value)
  const result = event.target.value.replace(/[^a-z]/gi, '');
  setName(result);
};

const handleSurnameChange = event => {
  // (e) => setName(e.target.value)
  const result = event.target.value.replace(/[^a-z]/gi, '');
  setSurname(result);
};

const handleAddressChange = event => {
  // (e) => setName(e.target.value)
  const result = event.target.value.replace(/[^a-z]/gi, '');
  setAddress(result);
};

const handlePhoneChange = event => {
  // (e) => setName(e.target.value)
  const result = event.target.value.replace(/[^a-z]/gi, '');
  setPhone(result);
};

const handleEmailChange = event => {
  // (e) => setName(e.target.value)
  const result = event.target.value.replace(/[^a-z]/gi, '');
  setEmail(result);
};


  useEffect(() => {

   refreshClients();
   
  },[])
  console.log(currentClients.name)
 //saving
  let newClientData = {
  
    name: newName,
   surname: newSurname,
   address: newAddress,
   phoneNumber: newPhone,
   email: newEmail 
 
}


const saveEditedClient = async () => {
  try{
    console.log(newClientData)
    axios.post('http://localhost:3006/saveClient', newClientData)
  } catch (error) {
    console.log(error)
  }
}


return (
<Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    // disableUnderline
    noValidate
    autoComplete="off"
  >
    <div>
    <br />
    <br />
    <h1 className="h1">Add a new client!</h1> <br></br>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 450,
          height: 520,
          margin: 'auto',
          textAlign: 'center',
          borderRadius: '20px'
        },
      }}
    >
        <Paper elevation={3} sx={{paddingTop: '55px', backgroundColor:'#3a5a78'}} >
    <TextField
    variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'},"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" }, }, "& .MuiInputBase-root": {
                color: 'white'
            },
            "& .MuiFormHelperText-root": {color: 'white'},
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#ee6c4d"
              }
            }}}
          required
          id="outlined-required"
          label="Name"
          helperText="Your clients name"
          type="text"
          onChange={handleNameChange}
          value= {newName || name || ''} 
          
        />
        <br />
        <TextField
    variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'},"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" }, }, "& .MuiInputBase-root": {
                color: 'white'
            },
            "& .MuiFormHelperText-root": {color: 'white'},
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#ee6c4d"
              }
            }}}
          required
          id="outlined-required"
          label="Surname"
          helperText="Your clients surname"
          onChange={handleSurnameChange}
          value= {newSurname || surname || ''} 
        />
        <br />
        <TextField
    variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'},"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" }, }, "& .MuiInputBase-root": {
                color: 'white'
            },
            "& .MuiFormHelperText-root": {color: 'white'},
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#ee6c4d"
              }
            }}}
          required
          id="outlined-required"
          label="Address"
          helperText="Your clients address"
          onChange={handleAddressChange}
          value= {newAddress || address || ''} 
        />
        <br />
        <TextField
    variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'},"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" }, }, "& .MuiInputBase-root": {
                color: 'white'
            },
            "& .MuiFormHelperText-root": {color: 'white'},
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#ee6c4d"
              }
            }}}
          required
          id="outlined-required"
          label="PhoneNumber"
          helperText="Your clients phone number"
          onChange={handlePhoneChange}
          value= {newPhone || phoneNumber || ''} 
        />
        <br />
        <TextField
    variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'},"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" }, }, "& .MuiInputBase-root": {
                color: 'white'
            },
            "& .MuiFormHelperText-root": {color: 'white'},
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#ee6c4d"
              }
            }}}
          required
          id="outlined-required"
          label="Email"
          helperText="Your clients email"
          onChange={handleEmailChange}
          value= {newEmail || email || ''} 
        />
        {/* {error && <h4 style={{color: 'red'}}>{error}</h4>} */}
        </Paper>
        
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" color="primary"  onClick={() => {navigate("/clients")}}>
                  <HomeIcon sx={{ mr: 1 }} />
                  Homepage
             </Fab>&nbsp;&nbsp;
             <Fab variant="extended" color="success"  onClick={() => {saveEditedClient()}} >
                  <SaveIcon sx={{ mr: 1 }} />
                  Save Client
             </Fab>
             </Box>
    </div>
    </Box>
);
}

export default EditClient;