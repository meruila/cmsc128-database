//import SearchBar from '../../components/SearchBar';
// import SearchBar from "material-ui-search-bar";
import ShackerToolbar from '../../components/ShackerToolbar';


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CircularProgress from '@mui/material/CircularProgress';

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

import PropTypes from "prop-types";
import makeStyles  from "@mui/system/styled";
import TableSortLabel from "@mui/material/TableSortLabel";

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';


import DeleteDialog from '../../components/dialogs/DeleteDialog'
import LoadingPage from '../../components/LoadingPage';

/**
 * Component for View Student Records
 * 
 * Shows the Student Number, Last Name, First Name, and Degree Program of all the students from the Student Records DB.
 * The Search bar filters the contents with regards to the search item.
 * 
 */

// Column names/values
// const columns = [
//     { id: 'studentnumber', label: 'Student Number', minWidth: 170},
//     { id: 'lastname', label: 'First Name', minWidth: 170 },
//     { id: 'firstname', label: 'Last Name', minWidth: 170 },
//     { id: 'degree', label: 'Degree', minWidth: 170}
// ];

function createData(studentnumber, firstname, lastname, degree) {
    return { studentnumber, firstname, lastname, degree };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#f3f6f4',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
        id: "studentNo",
        numeric: false,
        label: "Student Number"
      },
    {
      id: "name",
      numeric: false,
      label: "Last name"
    },
    { id: "name", numeric: false, label: "First Name" },
    { id: "course", numeric: false, label: "Degree" }
  ];
  
  function EnhancedTableHead(props) {
    const {
      classes,
    //   onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              // align="center"
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {/* {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc" ? " (DESC)" : " (ASC)"}
                  </span>
                ) : null} */}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));
  

function StudentRecord() {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [gotFetched, setgotFetched] = useState();

    const [rows, setRows] = useState([]);

    const navigate = useNavigate();
  
    const [searched, setSearched] = useState("");
    
  

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    //--------------------------------------
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [studentArray, setStudentArray] = useState([]);


    useEffect(() => {
        fetch(
            "http://localhost:3001/getStudentRecords",
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
                  setStudentArray(body.records);
                  setRows(body.records);
                  setgotFetched(true);
                  console.log(body.records);
              }
              else {
                console.log(body);
              }
        })

    }, [])

    const navigateToUser = (e, studentNo) => {
      e.preventDefault();

      console.log(studentNo)

      const navigateTo = "/student-records/" + studentNo

      console.log(navigateTo)

      navigate(navigateTo)

      

      // fetch(
      //     "http://localhost:3001/viewStudentRecord",
      //     {
      //     method: "POST",
      //     credentials: "include",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(toSearch)
      //     })
      //     .then(response => response.json())
      //     .then(body => {
      //     if (body.success) {
      //         console.log("success");
      //         console.log(body);

      //         fetch(
      //           "http://localhost:3001/checkForWarnings",
      //           {
      //           method: "POST",
      //           credentials: "include",
      //           headers: {
      //               "Content-Type": "application/json"
      //           },
      //           body: JSON.stringify({studentObject: body.studentObject})
      //           })
      //           .then(response => response.json())
      //           .then(body => {
      //           if (body.success) {
      //               console.log("success");
      //               console.log(body);
      
                    
      
      //           }
      //           else{
      //               console.log(body.note);
      //           }
      //           })
      //           .catch(err => console.log(err)); 

      //     }
      //     else{
      //         console.log(body.note);
      //     }
      //     })
      //     .catch(err => console.log(err)); 
  }

    const requestSearch = (searchedVal) => {
      setSearched(searchedVal.target.value)

      const lowerCased = searchedVal.target.value.toLowerCase();
      console.log("lowercased: " + lowerCased)
      const filteredRows = studentArray.filter((row) => {
        return row.course.toLowerCase().includes(lowerCased);
      });
      setRows(filteredRows);

      console.log(rows);
    };

    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };

    // Renders a loading icon 
    // while waiting for data to get fetched
    if (gotFetched === undefined) {
      return (
          <LoadingPage />
      );
  }
  

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
                            Student Records
                        </Typography>
                    </Box>

                    {/* Add New Record & Search Bar*/}
                    <Box>
                        <Grid container spacing={2}>
                            {/*Add New Record */}
                            <Grid item xs={2}>
                                <Link to="/student-records/new" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained"
                                        startIcon={<AddIcon />}
                                        color="success"
                                        sx={{ px: 2 }}>
                                        add record
                                    </Button>
                                </Link>
                                
                            </Grid>
                            <Grid item xs={2}>
                            <Link to="/student-records/upload" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained"
                                        startIcon={<AddIcon />}
                                        color="success"
                                        sx={{ px: 2 }}>
                                        Upload
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={5}>
                              {/* <Button variant="contained"
                                startIcon={<DeleteIcon />}
                                color="error"
                                onClick={handleClickOpen}
                                sx={{ px: 2 }}>
                                Delete All
                              </Button> */}
                              <DeleteDialog />
                            </Grid>
                            {/* Search Button */}
                            <Grid item sx={3}> 
                            <Paper component="form" sx={{ width: '250px'}}>
                              <InputBase
                                  sx={{ ml: 2, flex: 3 }}
                                  placeholder="Search..."
                                  value={searched}
                                  onChange={(event) => requestSearch(event)}
                                  onCancelSearch={() => cancelSearch()}
                              />  
                              <IconButton>
                                  <SearchIcon />
                              </IconButton>
                          </Paper>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Student Record Table */}
                    <Box>
                        <Paper sx={{ width: '100%' }}>
                            <TableContainer sx={{ maxHeight: '80%' }}>
                                <Table stickyHeader aria-label="sticky table">
                                <EnhancedTableHead
                                    classes={classes}
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                    <TableBody>
                                        {stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                            id={index}
                                            onClick={(event) => navigateToUser(event, row.studentNo)}
                                            >
                                            <TableCell align="left">{row.studentNo}</TableCell>
                                            <TableCell align="left">
                                                {row.name.last}
                                            </TableCell>
                                            <TableCell align="left">{row.name.first}</TableCell>
                                            <TableCell align="left">{row.course}</TableCell>
                                            </TableRow>
                                        );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
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

export default StudentRecord;