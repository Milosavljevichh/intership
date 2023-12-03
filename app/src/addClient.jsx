import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
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


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#053e85',
    },
    neutral: {
      main: '#ffffff',
      contrastText: '#fff',
    },
  },
});

const AddClient = () => {

  const navigate = useNavigate()

//success toast
  const toastNotifySuccess = () => {
    toast.success('You successfully added your client!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
  }

//error toast
const toastNotifyError = () => {
  toast.error('Oops, something went wrong!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });
}


const [name, setName] = useState( '' );
const [surname, setSurname] = useState( '' );
const [address, setAddress] = useState( '' );
const [phonenumber, setPhone] = useState( '' );
const [email, setEmail] = useState( '' );


//disable special chars
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
  const result = event.target.value.replace(/\D/g, '');
  setPhone(result);
};
////email verification
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
const [error, setError] = useState(null);
const handleEmailChange = event => {
  if (!isValidEmail(event.target.value)) {
    setError('Invalid email');
  } else {
    setError(null);
  }
  // (e) => setName(e.target.value)
  // const result = event.target.value.replace(/[^a-z]/gi, '');
  setEmail(event.target.value);
};


//data
let clientData = {
  
    name: name,
   surname: surname,
   address: address,
   phoneNumber: phonenumber,
   email: email 
 
}


const saveClient = async () => {
try{
  axios.post('http://localhost:3006/saveClient', clientData)
} catch (error) {
  toastNotifyError()
}
}

const enabled =
          name.length > 0 &&
          surname.length > 0 &&
          address.length > 0 &&
          phonenumber.length > 0 &&
          email.length >0 &&
          error === null;


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
          value={name}
          onChange={handleNameChange}
        //   defaultValue="Name"
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
          value={surname}
          onChange={handleSurnameChange}
        //   defaultValue="Surname"
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
          value={address}
          onChange={handleAddressChange}
        //   defaultValue="Address"
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
          value={phonenumber}
          onChange={handlePhoneChange}
        //   defaultValue="PhoneNumber"
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
          value={email}
          onChange={handleEmailChange}
          
        //   defaultValue="Email"
        />
        {error && <h4 style={{color: 'red'}}>{error}</h4>}
        </Paper>
        
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" color="primary"  onClick={() => {navigate("/clients")}}>
                  <HomeIcon sx={{ mr: 1 }} />
                  Homepage
             </Fab>&nbsp;&nbsp;
             <Fab variant="extended" color="success"  onClick={() => {saveClient().then(navigate("/clients")).then(toastNotifySuccess)}} disabled={!enabled}>
                  <SaveIcon sx={{ mr: 1 }} />
                  Save Client
             </Fab>
             </Box>
    </div>
    </Box>
  );
}

export default AddClient;