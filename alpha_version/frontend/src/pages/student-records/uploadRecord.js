import SearchBar from '../../components/SearchBar';
import ShackerToolbar from '../../components/ShackerToolbar';


import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import UploadButton from '../../components/UploadButton';


import AddIcon from '@mui/icons-material/Add';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

/**
 * Component for View Student Records
 * 
 */

// Column names/values
// const columns = [
//   { id: 'firstName', label: 'First Name', minWidth: 170 },
//   { id: 'lastName', label: 'Last Name', minWidth: 170 },
//   { id: 'degree', label: 'Degree', minWidth: 170}
// ];

// function createData(firstName, lastName, degree) {
//     return { firstName, lastName, degree };
// }

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: '#f3f6f4',
//       color: theme.palette.common.black,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

// const rows = [  //mock rows
//     createData('Maria', 'Clara', 'BS Computer Science'),
//     createData('Jose', 'Rizal', 'BS Sociology'),
//     createData('Maria', 'Makiling', 'BS Forestry'),
//   ];
  

function UploadStudentRecord() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isFetched, setIsFetched] = React.useState();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div>
            {/* Toolbar Component */}
            <ShackerToolbar/>
    
            <Container sx={{ py: 3 }}>
                <Stack spacing={3}>

                    {/* Heading */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        {/* Page title */}
                        <Typography variant="h1" fontSize={52} fontWeight="bold">
                           Upload Student Records
                        </Typography>
                    </Box>
                    {/*List of all uploaded files*/}
                    <Box>
                        <UploadButton />
                    </Box>

                    
                </Stack>
            </Container>
        </div>                       
    )
}

export default UploadStudentRecord;