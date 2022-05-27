import QuickAccessButtons from "./toolbar/QuickAccessButtons.js";
import AdminSidebar from "./toolbar/AdminSidebar"
import RegularSidebar from "./toolbar/RegularSidebar.js"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Shackerlogo from "../assets/ShackerLogo"

import { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

/**
 * Custom  HOMEPAGE SHACker Toolbar component
 * Imports the following components
 *      Sidebar
 *      Logo
 *      QuickAccessButton
 */

function ShackerToolbar() {
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        fetch(
            "http://localhost:3001/isAdmin",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(response => response.json())
            .then(body => {
                setIsAdmin(body.isAdmin);

            })
            .catch(err => console.log(err));                
    },[]); 

    if (isAdmin === undefined) {
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
        );
    }

    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="inherit" elevation={1}
                sx={{
                    paddingTop: "15px",
                    paddingBottom: "15px"
                }}
            >
                <Grid container alignItems="center" columns={16} sx={{ px: 5 }}>
                    <Grid item xs={1}>
                        {isAdmin ? <AdminSidebar sx={{ flex: 1 }}/> : <RegularSidebar sx={{ flex: 1 }}/> }
                    </Grid>
                    <Grid item xs={1}>
                        <Shackerlogo />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={2}>
                        <QuickAccessButtons justify="flex-end" />
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}

export default ShackerToolbar;
