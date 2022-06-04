import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteLogDialog() {
  // Used for Delete Dialog Box; handleClickOpen() handleClose()
  const [open, setOpen] = React.useState(false);

  const deleteAllLogs = () => {
    fetch(
        "http://localhost:3001/deleteAllLogs",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({password: "a"})         
        })
        .then(response => response.json())
        .then(body => {
            console.log(body);
          if (body.success) {
            
            console.log(body);
            alert(body.note);
          }
          else {
            console.log(body);
            alert(body.note);
          }
          window.location.reload(true)
    })
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    deleteAllLogs();
    setOpen(false);
  };
  //---------------------------------------

 return (
     <div>
        <Button variant="contained"
            startIcon={<DeleteIcon />}
            color="error"
            onClick={handleClickOpen}
            sx={{ px: 2 }}>
            Delete All
        </Button>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Delete all student records?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                This will delete all logs in the database.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
    </div>
 )
}

export default DeleteLogDialog;