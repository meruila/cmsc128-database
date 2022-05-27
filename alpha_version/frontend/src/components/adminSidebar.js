import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import { Drawer, IconButton , List , Divider, ListItem, ListItemText, Grid, ListItemIcon, Typography, Tooltip } from "@mui/material";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';

import Cookies from "universal-cookie";
import { UserContext } from "../../contexts/UserContext";

/**
 * Component for ADMIN Sidebar.
 * Viewable pages for all users: Homepage, Student Records, Logs, About Us, Summary
 * Viewable page for admin user only: Manage Users
 * @returns React component for Sidebar.
 * 
 * Needs to get email for sidebar printing
 */

function AdminSidebar() {

    const { user, setUser } = useContext(UserContext);

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (e) => {
        setState(open)
    }

    const signOut = () => (e) => {
        e.preventDefault();

        // Delete cookie with authToken
        const cookies = new Cookies();
        cookies.remove("authToken");

        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        window.location.reload(); 
    }


    const listOfLinks = () => (
        <Box
            sx={{width: '300px', margin: '10px'}}
        >
            <List sx={{margin: '0px'}}>
                {/* Dummy admin email address */}
                <ListItem>
                    <ListItemIcon>
                        <Tooltip title="Edit Profile">
                            <IconButton component={Link} to="/edit-profile" >
                                <CircleIcon  />
                            </IconButton>
                        </Tooltip>
                    </ListItemIcon>
                    <Tooltip title="Edit Profile">
                        <Link to="/edit-profile">
                            <ListItemText>{localStorage.getItem('user')}</ListItemText>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Collapse Sidebar">
                        <IconButton onClick={toggleDrawer(false)}><ArrowBackIosNewIcon /></IconButton>
                    </Tooltip>
                </ListItem>
                        
                <Box mb={3}>
                    <Divider />
                </Box>
                <ListItem button component={Link} to="/home">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/student-records">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Records" />
                </ListItem>
                <ListItem button component={Link} to="/summary">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Summary" />
                </ListItem>
                <ListItem button component={Link} to="/logs">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logs" />
                </ListItem>
                <ListItem button component={Link} to="/admin/users">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Users" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                </ListItem>
            </List>
            {/* Footer */}
            <Box sx={{position:'absolute', bottom: 0, margin: 3, width:"1"}}>
                <Box sx={{position:'absolute', bottom: 50, width:"1"}}>
                    <ListItem button component={Link} to="/login" onClick={signOut()}>
                        <ListItemIcon>
                            <CircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign out" />
                    </ListItem>
                </Box>
                <Grid container columnSpacing={1} >
                    <Grid item>
                        <Typography variant="h6" sx={{ 
                        color: '#0D542F',
                        fontWeight: 'bold',
                        fontSize: 20
                        }}>SHACker 
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6" sx={{ 
                        color: 'lightgrey',
                        fontSize: 20
                        }}>© 2022 
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )


    return (
        <div>
            <Box m={3} >
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {listOfLinks()}
            </Drawer>
        </div>
    );
}

export default AdminSidebar;
