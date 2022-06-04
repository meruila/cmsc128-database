import BackButton from "./toolbar/BackButton";
import QuickAccessButtons from "./toolbar/QuickAccessButtons.js";
import AdminSidebar from "./toolbar/adminSidebar"
import RegularSidebar from "./toolbar/regularSidebar.js"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Toolbar from "@mui/material/Toolbar"

import { useState , useEffect} from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Loading from './LoadingToolbar'

/**
 * Custom SHACker Toolbar component
 * Imports the following components
 *      BackButton
 *      Sidebar
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
            // <Box sx={{ display: 'flex' }}>
            //   <CircularProgress />
            // </Box>
            <Loading />
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
                <Grid container alignItems="center" columns={32} sx={{ px: 5 }}>
                    <Grid item xs={1}>
                        <BackButton edge="start" sx={{ mr: 2 }} />
                    </Grid>
                    <Grid item xs={1}>
                        {isAdmin ? <AdminSidebar sx={{ flex: 1 }}/> : <RegularSidebar sx={{ flex: 1 }}/> }
                    </Grid>
                    <Grid item xs={26}></Grid>
                    <Grid item xs={3}>
                        <QuickAccessButtons justify="flex-wrap" />
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}

export default ShackerToolbar;
