import SearchBar from '../../components/SearchBar';
import ShackerToolbar from '../../components/ShackerToolbar';

import React, { useState , useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import DeleteIcon from '@mui/icons-material/Delete';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Grid from "@mui/material/Grid"
import IconButton from '@mui/material/IconButton';
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Tooltip } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../../contexts/UserContext';

import Cookies from 'universal-cookie';

/**
 * Component for Manage Users Page
 * Page will display the following: (1) first name, (2) last name, (3) email
 * Features: (1) Can delete users, (2) Can Promote user
 */

//UP COLOR SCHEME
const maroon = "#8A1538";
const green = "#0D542F";



// Column names/values
const columns = [
    { id: 'email', label: 'Email', minWidth: 170},
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
];

function createData(firstName, lastName, email) {
    return { firstName, lastName, email };
}

const rows = [ // mock rows
    // createData('Hewwo', 'UwU', 'Last Name'),
    // createData('Hello', 'Goodbye', 'Hiii'),
    // createData( userArray[0].user.email, userArray[0].user.name.fname, userArray[0].user.name.lname )
];
  
function ManageUsers() {
    const { user, setUser } = useContext(UserContext);

    const [userArray, setUserArray] = useState([]);

    const [gotFetched, setgotFetched] = useState();
    

    // // Column names/values
    // const columns = [
    //     { id: 'email', label: 'Email', minWidth: 170},
    //     { id: 'firstName', label: 'First Name', minWidth: 170 },
    //     { id: 'lastName', label: 'Last Name', minWidth: 170 },
    // ];

    // function createData(firstName, lastName, email) {
    //     return { firstName, lastName, email };
    // }

    // const rows = [ // mock rows
    //     // createData('Hewwo', 'UwU', 'Last Name'),
    //     // createData('Hello', 'Goodbye', 'Hiii'),
    //     createData( userArray[0].user.email, userArray[0].user.name.fname, userArray[0].user.name.lname )
    // ];
    
    /**
     * Used to fetch ALL USERS data from database 
     * to be displayed in the table
     */
    useEffect(() => {
        fetch(
            "http://localhost:3001/getAllUsers",
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
                // console.log(body.users[0].user.name.fname)
                setUserArray(body.users);
                setgotFetched(true);
            }
            else{
                console.log(body.note);
            }
            })
            .catch(err => console.log(err)); 
    }, [])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Page change in pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // const promoteButton = (
    //     <Tooltip title="Promote">
    //         <IconButton>
    //             <AdminPanelSettingsIcon sx={{color: green}}/>
    //         </IconButton>
    //     </Tooltip>
    //   );

    const promoteUser = (e, index) => {
        e.preventDefault();

        console.log(userArray[index].user.email);

        const toPromote = {
            email: userArray[index].user.email
        }
        console.log(toPromote)

        fetch(
            "http://localhost:3001/promoteUser",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toPromote)
            })
            .then(response => response.json())
            .then(body => {
            if (body.success) {
                console.log("success");
                
                const cookies = new Cookies();
                cookies.remove('authToken', { path: '/admin' });
                cookies.remove('authToken', { path: '/' });
                

                setUser(null);
                localStorage.removeItem('user');
                localStorage.removeItem('isAuthenticated');
                localStorage.clear();
                window.localStorage.clear()
                window.location.reload(true)
            }
            else{
                console.log(body.note);
            }
            })
            .catch(err => console.log(err)); 
    }

    // const deleteButton = ( 
    //     <Tooltip title="Delete">
    //         <IconButton onClick={deleteUser}>
    //             <DeleteIcon sx={{color: maroon}}/>
    //         </IconButton>
    //     </Tooltip>
    // );

    const deleteUser = (e, index) => {
        e.preventDefault();

        console.log(userArray[index].user.email);

        const toDelete = {
            email: userArray[index].user.email
        }

        console.log(toDelete)

        fetch(
            "http://localhost:3001/deleteUser",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toDelete)
            })
            .then(response => response.json())
            .then(body => {
            if (body.success) {
                console.log("success");
                console.log(body);
                window.location.reload()
            }
            else{
                console.log(body.note);
            }
            })
            .catch(err => console.log(err)); 
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
            {/* Toolbar Component */}
            <ShackerToolbar/>
    
            <Container sx={{ py: 3 }}>
                <Stack spacing={3}>

                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        {/* Page title */}
                        <Typography variant="h1" fontSize={52} fontWeight="bold">
                            Manage Users
                        </Typography>
                    </Box>

                    {/* Add New Record & Search Bar*/}
                    <Box>
                        <Grid container spacing={2}>

                            {/*Add New User */}
                            <Grid item xs={9}>
                                <Link to="/admin/users/add" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained"
                                        startIcon={<AddIcon />}
                                        color="success"
                                        sx={{ px: 2 }}>
                                        Add new user
                                    </Button>
                                </Link>
                            </Grid>

                            {/* Search Button */}
                            <Grid item sx={3}>
                                <SearchBar />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Users Table */}
                    <Box>
                        <Paper sx={{ width: '100%' }}>
                            <TableContainer sx={{ maxHeight: '80%' }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Firstname</TableCell>
                                            <TableCell>Lastname</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
        
                                    <TableBody>
                                        {userArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {item.user.name.fname}                         
                                                </TableCell>
                                                <TableCell>
                                                    {item.user.name.lname} 
                                                </TableCell>
                                                <TableCell>
                                                    {item.user.email} 
                                                </TableCell>
                                                <TableCell>
                                                    {localStorage.getItem('user') === item.user.email ? null: 
                                                    <Tooltip title="Promote">
                                                        <IconButton onClick={(event) => promoteUser(event, index)}>
                                                            <AdminPanelSettingsIcon sx={{color: green}}/>
                                                        </IconButton>
                                                    </Tooltip>}
                                                    {localStorage.getItem('user') === item.user.email ? null: 
                                                    <Tooltip title="Delete">
                                                        <IconButton onClick={(event) => deleteUser(event, index)}>
                                                            <DeleteIcon sx={{color: maroon}}/>
                                                        </IconButton>
                                                    </Tooltip>}
                                                </TableCell>
                                            </ TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={(userArray.length)}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Box>
                </Stack>
            </Container>
        </div>                       
    )
}

export default ManageUsers;