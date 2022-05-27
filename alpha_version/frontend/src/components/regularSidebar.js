import React from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { List , Divider, ListItem, ListItemText, Button, Grid, ListItemIcon, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
/**
 * Component for Sidebar.
 * Viewable pages for all users: Homepage, Student Records, Logs, About Us, Summary
 * Viewable page for admin user only: Manage Users
 * @returns React component for Sidebar.
 */
function Sidebar() {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (e) => {
        setState(open)
    }


    
    const listOfLinks = () => (
        <Box
            sx={{width: '300px', margin: '10px'}}
        >
            <List sx={{margin: '0px'}}>
                            {/* Dummy regular email address */}
                            <ListItem>
                                <ListItemIcon>
                                    <CircleIcon />
                                </ListItemIcon>
                                <ListItemText>regular@up.edu.ph</ListItemText>
                                <IconButton onClick={toggleDrawer(false)}><ArrowBackIosNewIcon /></IconButton>
                            </ListItem>
                        
                <Box mb={3}>
                    <Divider />
                </Box>
                <ListItem button component={Link} to="/home">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItem>
                <ListItem button component={Link} to="/student-records">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Records" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button component={Link} to="/summary">
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Summary" />
                </ListItem>
            </List>
            {/* Footer */}
            <Box sx={{position:'absolute', bottom: 0, margin: 3, width:"1"}}>
                <Box sx={{position:'absolute', bottom: 50, width:"1"}}>
                    <ListItem button component={Link} to="/login">
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
                            }}>SHACKer 
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
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </Button>
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

export default Sidebar;
