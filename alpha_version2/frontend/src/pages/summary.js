import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
import ShackerToolbar from "../components/ShackerToolbar";

import LoadingPage from '../components/LoadingPage'

// function createData(fullName, degreeProgram, gwa, verificationStatus) {
//   return {
//     fullName,
//     degreeProgram,
//     gwa,
//     verificationStatus,
//   };
// }

// const rows = [
//   createData('dela Cruz, Juan M.', 'BS Computer Science', 3.25, ['User 1', 'User 2']),
//   createData('Lopez, Estella O.', 'BS Applied Physics', 2.10, ['User 1']),
//   createData('Santos, Allen F.', 'BS Applied Mathematics', 1.50, ['User 2']),
//   createData('Quizon, Johnrey G.', 'BS Agricultural Biotechnology', 2.20, ['User 1', 'User 2']),
//   createData('Rodriguez, Mariano S.', 'BA Sociology', 1.24, ['User1']),
//   createData('Gerona, Marissa DC.', "BS Chemistry", 1.77, ['User 2']),
//   createData('Tomas, Janine P.', 'BS Statistics', 2.43, ['User 2']),
//   createData('Encarnacion, Patricia M.', 'BA Communication Arts', 1.92, ['User 2']),
//   createData('Asuncion, Susan T.', 'BS Applied Physics', 3.04, ['User1']),
//   createData('Talindeg, Rudy D.', 'BS Biology', 1.45, ['User1']),
//   createData('Maandig, Katrina N.', 'BA Sociology', 1.89, ['User 1', 'User 2']),
//   createData('Padilla, Kristoffer E.', "BS Biology", 1.09, ['User 2']),
//   createData('Casallo, Edna B.', 'BA Philosophy', 1.84, ['User1']),
// ];

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "studentNo",
    numeric: false,
    disablePadding: false,
    label: "Student Number",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Full Name",
  },
  {
    id: "course",
    numeric: false,
    disablePadding: false,
    label: "Degree Program",
  },
  {
    id: "GWA",
    numeric: true,
    disablePadding: false,
    label: "General Weighted Average (GWA)",
  },
  {
    id: "verifiedBy",
    numeric: false,
    disablePadding: false,
    label: "Verified By",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: 'bold' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

/**
 * Component for Summary Page.
 * Shows a table of records including the students' name, degree program, GWA, and an array of users who verified the record
 * @returns React component for Summary Page.
 */
function SummaryPage() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('course');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [userArray, setUserArray] = useState([
    // {
    //   studentNo: '2018-12345',
    //   name: 'Dela Cruz, Juan',
    //   degreeProgram: 'BSCS',
    //   GWA: '1.25',
    //   verificationStatus: ['Admin 1', 'Admin 2']
    // },
    // {
    //   studentNo: '2021-12345',
    //   name: 'Dela Cruz, Juan',
    //   degreeProgram: 'BSCS',
    //   GWA: '1.25',
    //   verificationStatus: ['Admin 1', 'Admin 2']
    // },
    // {
    //   studentNo: '2021-32345',
    //   name: 'Dela Cruz, Juan',
    //   degreeProgram: 'BSCS',
    //   GWA: '1.25',
    //   verificationStatus: ['Admin 1', 'Admin 2']
    // },
  ]);
  const [gotFetched, setgotFetched] = useState();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userArray.length) : 0;

  /**
   * Used to fetch SUMMARY data from database 
   * to be displayed in the table
   */
  useEffect(() => {
    fetch(
      "http://localhost:3001/viewSummary",
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
        console.log({body})

          console.log(body.studentRecordsSummary);
          setUserArray(body.studentRecordsSummary);
          setgotFetched(true);

      }
      else{
          console.log(body);
      }
      })
      .catch(err => console.log(err)); 
}, [])

    // Renders a loading icon 
    // while waiting for data to get fetched
    if (gotFetched === undefined) {
      return (
          <LoadingPage />
      );
    }
  return (
    <div>
      <ShackerToolbar />
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{
          px: 18,
          pt: 5,
          fontWeight: "bold",
          fontSize: 52,
          mb: 6,
          mt: 3,
        }}
      >
        Summary
      </Typography>
      <Box
        sx={{
          width: "100%",
          px: 18,
          mb: 6,
        }}
      >
        <Paper
          sx={{
            width: "100%",
            mb: 2,
            px: 2,
          }}
        >
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={userArray.length}
              />
              <TableBody>
                {
                  userArray.length === 0 ? (
                  <TableRow tabIndex={-1}>
                    <TableCell align="center" colSpan={5}>No data.</TableCell>
                  </TableRow>
                  ) : null
                }
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                  userArray.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(userArray, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.studentNo}
                        component={Link}
                        to={`/student-records/${row.studentNo}`} //LINK
                        style={{ textDecoration: "none" }}
                      >
                        <TableCell align="left">{row.studentNo}</TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name.last}, {row.name.first}
                        </TableCell>
                        <TableCell align="left">{row.course}</TableCell>
                        <TableCell align="right">{row.GWA}</TableCell>
                        <TableCell align="left">
                          {row.verifiedBy && row.verifiedBy.map((data, i) => (
                            <Chip key={i} label={data} variant="outlined" />
                          ))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userArray.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </div>
  );
}

export default SummaryPage;