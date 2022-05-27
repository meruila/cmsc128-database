import React, { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ShackerToolbar from "../components/ShackerToolbar";
import Sidebar from "../components/toolbar/AdminSidebar"; 
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Component Edit Profile Page.
 * A user can change their first name and/or last name. The email is only set for display and unchangable.
 * @returns React component for Edit Profile Page.
 */

// Dummy Profile account


function EditProfilePage() {
    const [canEdit, setCanEdit] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gotFetched, setgotFetched] = useState();
    const [email, setEmail] = useState("")

    useEffect(() => {
        fetch(
            "http://localhost:3001/viewProfile",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(response => response.json())
            .then(body => {
            if (body.success) {
                console.log("success");
                console.log(body);
                setFirstName(body.profile.firstName);
                setLastName(body.profile.lastName);
                setEmail(body.profile.email);
                // console.log(body.users[0].user.name.fname)
                setgotFetched(true);
            }
            else{
                console.log(body.note);
                setgotFetched(true);
            }
            })
            .catch(err => console.log(err)); 
    }, [])

     // Handles the changes in login credentials (username, password) textfields
    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
    
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Submitted!")
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        
        const name={
            firstName: firstName,
            lastName: lastName
        }

        fetch(
            "http://localhost:3001/editProfile",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(name)
            })
            .then(response => response.json())
            .then(body => {
            if (body.success) {
                console.log("success");
                console.log(body);
                window.location.reload(true)
            }
            else{
                console.log(body.note);
            }
            })
    }

    const setFieldsEditable = (evt) => {
        evt.preventDefault();
        if (canEdit) { setCanEdit(false) }
        else { setCanEdit(true) }
    }

    if (gotFetched === undefined) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
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
                Edit Profile
                <IconButton onClick={setFieldsEditable}>
                    <EditIcon/>
                </IconButton>
            </Typography>
            
            
            <Grid container columnSpacing={8} rowSpacing={2} sx={{ px: 18 }}>
                <Grid item xs={7}>
                    <TextField 
                    name="firstName"
                    label="First Name" 
                    variant="outlined" 
                    fullWidth size="small" 
                    onChange={handleOnChange}
                    defaultValue={firstName}
                    disabled={canEdit}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField 
                    name="lastName"
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth size="small" 
                    onChange={handleOnChange}
                    defaultValue={lastName}
                    disabled={canEdit}
                    />
                </Grid>
                {/* Email is not changeable, display only.*/}
                <Grid item xs={7}>
                    <TextField 
                    label="Email" variant="outlined" 
                    fullWidth size="small" 
                    value={email} 
                    disabled />
                </Grid>
            </Grid>

            <Box sx={{ 
                px: 18, 
                mt: 5,
                mb: 4 
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={4.35}>
                            <Link to="/change-password" style={{ textDecoration: 'none' }}>  
                                <Button 
                                variant="contained" 
                                sx={{ 
                                    mr: 2, 
                                backgroundColor: '#0D542F', 
                                '&:hover': {
                                backgroundColor: '#093005'
                                }
                                }}>
                                Change Password
                                </Button>
                            </Link>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Link to="/home" style={{ textDecoration: 'none' }}>  
                            <Button 
                            variant="contained" 
                            sx={{
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
                    </Grid>
                    <Grid item xs={1}>
                        <Button 
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ 
                            mr: 2, 
                            backgroundColor: '#8A1538', 
                            '&:hover': {
                            backgroundColor: '#570E24'
                            }
                        }}>
                            Save
                        </Button>
                    </Grid>
                </Grid>

            </Box>
                                                                                                                            
        </div>
    );
}

export default EditProfilePage;
