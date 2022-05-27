import ShackerToolbar from '../components/ShackerToolbar';
import SearchBar from '../components/SearchBar'

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



/**
 * Component for Logs Page
 * Will receive from backend:
 *      (At least 20 logs from database ?)
 *      Name of student whose records have been edited recently
 *      Name of user that edited the student
 *      Action (add, edit, delete, etc)
 *      Date/Time the action has been done
 */

// Column Names/Values
 const columns = [
    { id: 'editorName', label: 'Email', minWidth: 170},
    { id: 'studentName', label: 'First Name', minWidth: 170 },
    { id: 'action', label: 'Last Name', minWidth: 170 },
    { id: 'timeOfEdit', label: 'Last Name', minWidth: 170 },
];

function createData(editorName, studentName, action, timeOfEdit) {
    return { editorName, studentName, action, timeOfEdit };
}

const rows = [
    createData('Edith', 'Studenth', 'Add', '2017-04-25'),

  ];
  

function Logs() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div>
            <ShackerToolbar />
            <Container sx={{ py: 3 }}>
                <Stack spacing={3}>

                    {/* Heading */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        {/* Page title */}
                        <Typography variant="h1" fontSize={52} fontWeight="bold">
                            Logs
                        </Typography>
                    </Box>

                    {/* Add New Record & Search Bar*/}
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={9.2
                            }>
                            {/* To push the SearchBar to the right side of the table */}
                            </Grid>
                            <Grid item sx={3}>
                                {/* Search Button */}
                                <SearchBar />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Student Record Table */}
                    <Box>
                        <Paper sx={{ width: '100%' }}>
                            <TableContainer sx={{ maxHeight: '80%' }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Editor</TableCell>
                                            <TableCell>Student</TableCell>
                                            <TableCell>Action</TableCell>
                                            <TableCell>Time of Edit</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                    </TableCell>
                                                );
                                                })
                                                }
                                            </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={(rows.length)}
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
    );
}

export default Logs;
