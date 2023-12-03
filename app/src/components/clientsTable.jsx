import faker from 'faker'

import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorIcon from '@mui/icons-material/BorderColor';

//confirm dialog MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const useStyles = makeStyles((theme) => ({

    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
        
    }
}))




function ClientsTable() {

  //delete client state
  const [selectedRow, setSelectedRow] = useState();

  //confirm dialog MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedRow(id);
    
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow();
  };
//nav
  let navigate = useNavigate()

  //loading clients
  const [clients, setClients] = useState([])
  const getClients = () => axios.get('http://localhost:3006/clients');
  
  const refreshClients = ()=>{
    getClients().then( res => {

      setClients(res.data);
  });
}
  useEffect(() => {
   // TODO: load data
    // use refreshClients to sett loaded data (setClients(data))
   refreshClients();
  },[])
  
 
  //delete clients


  const deleteClient = async (id) => {

    try {
      console.log(selectedRow)
      console.log(id)
      await axios.delete(`http://localhost:3006/client?id=${id}`)
      console.log('Item successfully deleted.')
      
    }
     catch (error) {
      toastNotifyError()
    }
  }


    
    
//success
    const toastNotifySuccess = () => {
      toast.success('You successfully deleted the client!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });
    }
//error
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
 
const { id } = useParams();
  
    return (
      
      

        <TableContainer >
          <ToastContainer />
          <Table sx={{ minWidth: 650, maxWidth: 1550, margin:'auto auto', border: 2, borderColor: '#450fa3'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}>Name</TableCell>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}>Surname</TableCell>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}>Address</TableCell>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}>Phone Number</TableCell>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}>email</TableCell>
                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#450fa3', color: 'white', textAlign: 'center'}}></TableCell> 
              </TableRow>
            </TableHead>
            
            <TableBody>
              {clients && clients
            
              .sort( (a, b) => a.id > b.id ? 1 : -1 )
              .map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{fontWeight: 'bold', color: '#d911a7', textAlign: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}> {row.name} </TableCell>
                  <TableCell sx={{fontWeight: 'bold', color: '#d911a7', textAlign: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}>{row.surname}</TableCell>
                  <TableCell sx={{textAlign: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}>{row.address}</TableCell>
                  <TableCell sx={{textAlign: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}>{row.phoneNumber}</TableCell>
                  <TableCell sx={{textAlign: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}>{row.email}</TableCell>
                  <TableCell sx={{ alignContent: 'center', borderBlockColor:"#450fa3", backgroundColor: '#dee4e7', borderBlockWidth: '2px'}}> 
                   <button className="buttonEdit" onClick={() => {navigate(`/editClient/${row.id}`)}}><BorderColorIcon /></button><br></br> 
                  <button className="buttonYellow" onClick={() => {navigate(`/viewclient/${row.id}`)}}><VisibilityIcon /></button><br></br>
                  {/* <button className="buttonRed" onClick={() => HandleDeleteClient(row.id).then(getClients)}>DELETE CLIENT</button></TableCell> */}
                  <button className="buttonRed" onClick={() => handleClickOpen(row.id)}><DeleteIcon /></button>
                  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this client?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is pernament.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => deleteClient(selectedRow).then(refreshClients).then(toastNotifySuccess).then(handleClose)}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      );

              }


export default ClientsTable;