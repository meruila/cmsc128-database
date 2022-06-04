import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ShackerToolbar from "../components/ShackerToolbar";

/**
 * Component Change Password Page.
 * A user can change their password by retyping their old password and replacing it with a new one.
 * @returns React component for Change Password Page.
 */

function ChangePasswordPage() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

     // Handles the changes in the oldPassword, newPassword, and retypePassword textfields
    const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case 'oldPassword':
                setOldPassword(value);
                break;
            case 'newPassword':
                setNewPassword(value);
                break;
            case 'retypePassword':
                setRetypePassword(value);
                break;
            default:
                break;
        }
      }

    return (
        <div>
            <ShackerToolbar />
            <Typography variant="h1" component="div" gutterBottom sx={{ 
                px: 18, 
                pt: 5,
                fontWeight: 'bold',
                fontSize: 52,
                mb: 6,
                mt: 3
            }}>
                Change Password
            </Typography>
            <Grid container columnSpacing={8} rowSpacing={2} sx={{ px: 18 }}>
                <Grid item xs={7}>
                    <TextField 
                    label="Old Password" 
                    variant="outlined" 
                    fullWidth size="small" 
                    onChange={handleOnChange}
                    defaultValue={oldPassword}
                    type="password"
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField 
                    label="New Password" 
                    variant="outlined" 
                    fullWidth size="small" 
                    onChange={handleOnChange}
                    defaultValue={newPassword}
                    type="password"
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField 
                    label="Retype Password" 
                    variant="outlined" 
                    fullWidth size="small"
                    defaultValue={retypePassword}
                    type="password"
                    />
                </Grid>
            </Grid>

            <Box sx={{ 
                px: 18, 
                mt: 5,
                mb: 4 
            }}>
                <Link to="/edit-profile" style={{ textDecoration: 'none' }}>  
                    <Button variant="contained" sx={{
                    mr: 2,
                    backgroundColor: '#E9E9E9',
                    color: '#434343',
                    '&:hover': {  
                        backgroundColor: '#B3B3B3',
                        color: '#434343',
                    }
                    }}>
                    Cancel
                    </Button>
                </Link>
                <Button variant="contained" sx={{ 
                    mr: 2, 
                    backgroundColor: '#8A1538', 
                    '&:hover': {
                    backgroundColor: '#570E24'
                    }
                }}>
                    Save
                </Button>
            </Box>
            
        </div>
    );
}

export default ChangePasswordPage;
