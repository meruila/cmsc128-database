import React, { useState , useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

import Overlaybottom from '../assets/Overlay-bottom';
import Overlaytop from '../assets/Overlay-top';
import SHACKERicon from '../assets/SHACKericon';

import Cookies from "universal-cookie";
import { UserContext } from '../contexts/UserContext';

import { useNavigate } from "react-router-dom";

/**
 * Component for Login Page
 * If successful login, user is redirected to home page 
 * or previous page they were trying to access
 * If no user is logged in, user is restricted to the login page.
 */

/* UP Colors Hex Values */
const maroon = "#8A1538";
//const green = "0D542F";

/* Used to create custom themes */
const theme = createTheme();

export default function SignIn() {

    const [emailHelperText, setEmailHelperText] = useState("Input email");
    const [passwordHelperText, setPasswordHelperText] = useState("Input password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate()

    const { user, setUser } = useContext(UserContext);

    // useEffect(() => {
    //     fetch(
    //         "http://localhost:3001/viewSummary",
    //         {
    //           method: "POST",
    //           credentials: "include",
    //           headers: {
    //             "Content-Type": "application/json"
    //           },
    //         })
    //         .then(response => response.json())
    //         .then(body => {
    //           if (body.success) {
    //               console.log(body);
    //           }
    //           else {
    //             console.log(body);
    //           }
    //     })
        
    // });

    const handleSubmitCredentials = (event) => {
        event.preventDefault();
        const credentials = {
            email: email,
            password: password
        }

        fetch(
            "http://localhost:3001/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(credentials)
            })
            .then(response => response.json())
            .then(body => {
              if (!body.success) {
                  console.log(body);
              }
              else {
                // successful log in. store the token as a cookie
                console.log(body);

      
                const cookies = new Cookies();
                cookies.set(
                  "authToken",
                  body.token,
                  {
                    path: "/",
                    age: 60*60,
                    sameSite: "lax"
                  });

                setUser(email);
                localStorage.setItem('user', email);
                localStorage.setItem('isAuthenticated', true);
                
                alert("Successfully logged in!");
                Navigate("/home");
              }
        })
    };



     // Handles the changes in login credentials (username, password) textfields
    const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case 'email':
                setEmail(value);
                if (!value) {
                    setEmailHelperText("Must not be empty")
                }else {
                    setEmailHelperText("")
                }
                
                break;
            case 'password':
                setPassword(value);
                if (!value) {
                    setPasswordHelperText("Must not be empty")
                }else {
                    setPasswordHelperText("")
                }
                break;
            default:
                break;
        }
      }

    
    return (
        <ThemeProvider theme={ theme }>
            <Container component="main" maxWidth="xs" >
                <Paper 
                    elevation={3}
                    sx={{ padding: 6, borderRadius: 8, marginTop: '40%' }}
                >
                    <Box
                        sx={{
                            marginTop: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box noValidate 
                            sx={{ mt: 1 }}
                        >
                            {/*  Email Field  */}
                            <TextField
                                type='email'
                                margin="normal"
                                required
                                fullWidth
                                defaultValue={email}
                                id="email"
                                label="Email"
                                name="email"
                                helperText={emailHelperText}
                                onChange={handleOnChange}
                                autoFocus
                            />

                            {/* Password Field */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                defaultValue={password}
                                label="Password"
                                type="password"
                                id="password"
                                helperText={passwordHelperText}
                                onChange={handleOnChange}
                            />

                            {/* Sign In Button */}
                            <Button type="submit" fullWidth variant="contained" size="large" disabled={!email || !password}
                                sx={{ 
                                    mt: 2, 
                                    mb: 2, 
                                    borderRadius: 8, 
                                    backgroundColor: maroon,
                                }}
                                onClick={handleSubmitCredentials}
                            >
                                Sign In
                            </Button>
                        
                            <Grid container direction="column" alignItems="center">
                                <Box component="img"
                                    sx={{ height: '50%', width: '50%', alignItems: "center" }}
                                    src="/UPLB-icon.png"
                                />
                                <Box variant="body2" sx={{color:maroon, fontSize: 12, marginY: 2}}>
                                    Don't have an account yet?
                                    <Link href="#" sx={{color:maroon}}>
                                        Contact your administrator.
                                    </Link>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
            <Overlaybottom />
            <Overlaytop />
            <SHACKERicon />
        </ThemeProvider>
    );
}