import React, { useState , useEffect } from 'react'
import { Link } from "react-router-dom";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"
import Fade from "@mui/material/Fade"

import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/HighlightOff';
import WarningIcon from '@mui/icons-material/ErrorOutline';
import AddIcon from '@mui/icons-material/Add';

import TermGrades from '../../components/student-record/TermGrades'
import StudentGradesContext from '../../contexts/StudentGradesContext'
import ShackerToolbar from '../../components/ShackerToolbar';

import studentRecords from '../../data/studentRecords';
import { useNavigate , useParams } from "react-router-dom";

import LoadingPage from '../../components/LoadingPage'


/**
 * Component for Edit Student Record
 * 
 */

const labelStyle = {
  fontWeight: 'bold',
  color: '#595959',
};

const EditStudentRecordPage = () => {
  const navigate = useNavigate();
  const [fetched, setFetched] = useState();
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState({
    status: '',  // good, warning, error
    note: '',
  });

  const [warnings, setWarnings] = useState([]);
  
  // Student Info
  const [stNumber, setStNumber] = useState('');
  const [stFirstName, setStFirstName] = useState('');
  const [stLastName, setStLastName] = useState('');
  const [stMiddleInitial, setStMiddleInitial] = useState('');
  const [stDegreeProgram, setStDegreeProgram] = useState('');
  // Totals
  const [stTotalUnitsTaken, setStTotalUnitsTaken] = useState('');
  const [stTotalUnitsRequired, setStTotalUnitsRequired] = useState('');
  const [stGwa, setStGwa] = useState('');

  const [stErrors, setStErrors] = useState({
    num: '',
    fName: '',
    lName: '',
    degreeProgram: '',
    totalUnitsTaken: '',
    totalUnitsRequired: '',
    gwa: '',
  })

  // Student Grades
  const sampleGrades = studentRecords[0].records;
  const [stGrades, setStGrades] = useState([]);
  const [recordErrors, setRecordErrors] = useState([]);

  const studentNumber = useParams(); // Used to be able to get the student Object from the database

  // Handles the changes in student details (sn, name, deg. program) textfields
  const onStudentInfoChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'stNumber':
        setStNumber(value);
        break;
      case 'stFirstName':
        setStFirstName(value);
        break;
      case 'stLastName':
        setStLastName(value);
        break;
      case 'stMiddleInitial':
        setStMiddleInitial(value);
        break;
      case 'stDegreeProgram':
        setStDegreeProgram(value.trim().toUpperCase());
        break;
      case 'stTotalUnitsTaken':
        setStTotalUnitsTaken(value);
        break;
      case 'stTotalUnitsRequired':
        setStTotalUnitsRequired(value);
        break;
      case 'stGwa':
        setStGwa(value);
        break;
    }
  }

  // Hanldes the adding of term when the button is clicked
  const handleAddTermClick = () => {
    // Add new term to student's record
    setStGrades((prev) => [...prev, {
      sem: '',
      year: '',
      status: '',
      units: '',
      subjects: []
    }]);

    setRecordErrors((prev) => [...prev, {
      sem: '',
      year: '',
      status: '',
      units: '',
      subjects: []
    }]);
  };

  // Handles the updating of the new student record when save button is clicked
  const handleUpdateClick = () => {
    setSaving(true);

    const stNumConstruct = new RegExp(
      "^[0-9]{4}-[0-9]{5}$"
    );
    
    // Validate Inputs
    const studentInfoValidationErrors = {
      num: '',
      fName: '',
      lName: '',
      degreeProgram: '',
      totalUnitsTaken: '',
      totalUnitsRequired: '',
      gwa: '',
    };

    if (stNumber.length === 0) {
      studentInfoValidationErrors['num'] = 'Student number is required.';
    }
    if (!stNumConstruct.test(stNumber)) {
      studentInfoValidationErrors['num'] = 'Student number must have the following format: XXXX-YYYYY';
    }
    
    if (stFirstName.length === 0) {
      studentInfoValidationErrors['fName'] = 'First name is required.';
    }
    if (stLastName.length === 0) {
      studentInfoValidationErrors['lName'] = 'Last name is required';
    }

    if (stDegreeProgram.length === 0) {
      studentInfoValidationErrors['degreeProgram'] = 'Degree program is required.';
    }

    if (stTotalUnitsTaken.length === 0) {
      studentInfoValidationErrors['totalUnitsTaken'] = 'Total units taken is required.';
    }
    
    if (Number(stTotalUnitsTaken) < 0 || isNaN(stTotalUnitsTaken)) {
      studentInfoValidationErrors['totalUnitsTaken'] = 'Total units taken must be a positive number.';
    }
    
    if (stTotalUnitsRequired.length === 0) {
      studentInfoValidationErrors['totalUnitsRequired'] = 'Total units req is required.';
    }
    
    if (Number(stTotalUnitsRequired) < 0 || isNaN(stTotalUnitsRequired)) {
      studentInfoValidationErrors['totalUnitsRequired'] = 'Total units req must be a positive number.';
    }
    
    if (stGwa.length === 0) {
      studentInfoValidationErrors['gwa'] = 'GWA is required.';
    }
    
    if (Number(stGwa) < 0 || isNaN(stGwa)) {
      studentInfoValidationErrors['gwa'] = 'GWA must be a positive number.';
    }

    setStErrors(studentInfoValidationErrors);

    // Validation for each semester
    const stGradesCopy = JSON.parse(JSON.stringify(stGrades));
    const recordsValidationErrors = stGradesCopy.map(term => {
      // sem
      if (term.sem.length === 0) {
        term.sem = 'Please select semester.'
      } else {
        term.sem = ''
      }
      // ay
      const acadYearConstruct = new RegExp(
        "^[0-9]{4}-[0-9]{4}$"
      );
      if (term.year.length === 0) {
        term.year = 'A.Y. is required.'
      }
      if (!acadYearConstruct.test(term.year)) {
        term.year = 'A.Y. must be in the format XXXX-XXXX.'
      } else {
        term.year = '';
      }
      // status
      if (term.status.length === 0) {
        term.status = 'Please select enrollment status.'
      } else {
        term.status = '';
      }
      // units
      if (term.units.length === 0) {
        term.units = 'Number of units required.'
      }
      if (Number(term.units) < 0 || isNaN(term.units)) {
        term.units = 'Units must be a non-negative number.'
      } else {
        term.units = ''
      }

      term.subjects = term.subjects.map(sub => {
        // courseNo
        if (sub[0].length === 0) {
          sub[0] = 'Required.';
        } else {
          sub[0] = ''
        }
        // grade
        if (sub[1].length === 0) {
          sub[1] = 'Required.'
        } else {
          sub[1] = ''
        }
        // unit
        if (sub[2].length === 0) {
          sub[2] = 'Required.'
        } else {
          sub[2] = ''
        }
        // weight
        if (sub[3].length === 0) {
          sub[3] = 'Required.'
        }
        if (Number(sub[3]) < 0 || isNaN(sub[3])) {
          sub[3] = 'Non-negative number required.';
        } else {
          sub[3] = ''
        }
        // cumulative
        if (sub[4].length === 0) {
          sub[4] = 'Required.'
        }
        if (Number(sub[4]) < 0 || isNaN(sub[4])) {
          sub[4] = 'Non-negative number required.'
        } else {
          sub[4] = ''
        }

        return sub;
      })

      return term;
    })

    setRecordErrors(recordsValidationErrors)

    for (const [key, value] of Object.entries(studentInfoValidationErrors)) {
      if (value.length) {
        setSaving(false);
        return;
      }
    }
    
    const stRecord = {
      name: {
        first: stFirstName,
        last: stLastName,
        middle: stMiddleInitial,
      },
      course: stDegreeProgram,
      studentNo: stNumber,
      records: stGrades,
      totalUnitsTaken: stTotalUnitsTaken,
      totalUnitsRequired: stTotalUnitsRequired,
      GWA: stGwa,
    }

    // Submit Record to API
    // Default options are marked with *
    fetch("http://localhost:3001/updateStudentRecord", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ updatedStudentObject : stRecord }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        setSaving(false);
        console.log(data);

        // Redirect to student records page if saving succeeded
        if (data.success) {
          setResult({
            status: 'success',
            note: data.note,
          });
          setTimeout(() => {
            navigate("/student-records");
          }, 3000);
        } else {
          setResult({
            status: 'error',
            note: data.note
          });
        }
      })
      .catch((error) => {
        setResult({
          status: 'error',
          note: 'An error has occured.',
        });
        setSaving(false);
        console.error(error);
      });
  };

  const handleCheckInputsClick = () => {
    setSaving(true);

    const stNumConstruct = new RegExp(
      "^[0-9]{4}-[0-9]{5}$"
    );
    
    // Validate Inputs
    const studentInfoValidationErrors = {
      num: '',
      fName: '',
      lName: '',
      degreeProgram: '',
      totalUnitsTaken: '',
      totalUnitsRequired: '',
      gwa: '',
    };

    if (stNumber.length === 0) {
      studentInfoValidationErrors['num'] = 'Student number is required.';
    }
    if (!stNumConstruct.test(stNumber)) {
      studentInfoValidationErrors['num'] = 'Student number must have the following format: XXXX-YYYYY';
    }
    
    if (stFirstName.length === 0) {
      studentInfoValidationErrors['fName'] = 'First name is required.';
    }
    if (stLastName.length === 0) {
      studentInfoValidationErrors['lName'] = 'Last name is required';
    }

    if (stDegreeProgram.length === 0) {
      studentInfoValidationErrors['degreeProgram'] = 'Degree program is required.';
    }

    if (stTotalUnitsTaken.length === 0) {
      studentInfoValidationErrors['totalUnitsTaken'] = 'Total units taken is required.';
    }
    
    if (Number(stTotalUnitsTaken) < 0 || isNaN(stTotalUnitsTaken)) {
      studentInfoValidationErrors['totalUnitsTaken'] = 'Total units taken must be a positive number.';
    }
    
    if (stTotalUnitsRequired.length === 0) {
      studentInfoValidationErrors['totalUnitsRequired'] = 'Total units req is required.';
    }
    
    if (Number(stTotalUnitsRequired) < 0 || isNaN(stTotalUnitsRequired)) {
      studentInfoValidationErrors['totalUnitsRequired'] = 'Total units req must be a positive number.';
    }
    
    if (stGwa.length === 0) {
      studentInfoValidationErrors['gwa'] = 'GWA is required.';
    }
    
    if (Number(stGwa) < 0 || isNaN(stGwa)) {
      studentInfoValidationErrors['gwa'] = 'GWA must be a positive number.';
    }

    setStErrors(studentInfoValidationErrors);

    // Validation for each semester
    const stGradesCopy = JSON.parse(JSON.stringify(stGrades));
    const recordsValidationErrors = stGradesCopy.map(term => {
      // sem
      if (term.sem.length === 0) {
        term.sem = 'Please select semester.'
      } else {
        term.sem = ''
      }
      // ay
      const acadYearConstruct = new RegExp(
        "^[0-9]{4}-[0-9]{4}$"
      );
      if (term.year.length === 0) {
        term.year = 'A.Y. is required.'
      }
      if (!acadYearConstruct.test(term.year)) {
        term.year = 'A.Y. must be in the format XXXX-XXXX.'
      } else {
        term.year = '';
      }
      // status
      if (term.status.length === 0) {
        term.status = 'Please select enrollment status.'
      } else {
        term.status = '';
      }
      // units
      if (term.units.length === 0) {
        term.units = 'Number of units required.'
      }
      if (Number(term.units) < 0 || isNaN(term.units)) {
        term.units = 'Units must be a non-negative number.'
      } else {
        term.units = ''
      }

      term.subjects = term.subjects.map(sub => {
        // courseNo
        if (sub[0].length === 0) {
          sub[0] = 'Required.';
        } else {
          sub[0] = ''
        }
        // grade
        if (sub[1].length === 0) {
          sub[1] = 'Required.'
        } else {
          sub[1] = ''
        }
        // unit
        if (sub[2].length === 0) {
          sub[2] = 'Required.'
        } else {
          sub[2] = ''
        }
        // weight
        if (sub[3].length === 0) {
          sub[3] = 'Required.'
        }
        if (Number(sub[3]) < 0 || isNaN(sub[3])) {
          sub[3] = 'Non-negative number required.';
        } else {
          sub[3] = ''
        }
        // cumulative
        if (sub[4].length === 0) {
          sub[4] = 'Required.'
        }
        if (Number(sub[4]) < 0 || isNaN(sub[4])) {
          sub[4] = 'Non-negative number required.'
        } else {
          sub[4] = ''
        }

        return sub;
      })

      return term;
    })

    setRecordErrors(recordsValidationErrors)

    for (const [key, value] of Object.entries(studentInfoValidationErrors)) {
      if (value.length) {
        setSaving(false);
        return;
      }
    }
    
    const stRecord = {
      name: {
        first: stFirstName,
        last: stLastName,
        middle: stMiddleInitial,
      },
      course: stDegreeProgram,
      studentNo: stNumber,
      records: stGrades,
      totalUnitsTaken: stTotalUnitsTaken,
      totalUnitsRequired: stTotalUnitsRequired,
      GWA: stGwa,
    }


    fetch("http://localhost:3001/checkForWarnings",
                {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({studentObject: stRecord})
                })
                .then(response => response.json())
                .then(body => {
                if (body.success) {
                    console.log("success");
                    console.log(body);
                    setWarnings(body.warnings);
      
                }
                else{
                    console.log(body.note);
                }
                })
                .catch(err => console.log(err)); 

    let warningString = ""

    for (var i = 0; i < warnings.length; i++) {
      warningString = warnings[i].err + " : " + warnings[i].course + '\n'

      alert(warningString);
    }

    
    setResult({
      status: 'warning',
      note: 'Warning!'
    });
  }

  const handleSignClick = () => {
    fetch("http://localhost:3001/sign", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ studentNo : stNumber }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        setSaving(false);
        console.log(data);

        // Redirect to student records page if signing succeeded
        if (data.success) {
          setResult({
            status: 'success',
            note: data.note,
          });
          setTimeout(() => {
            navigate("/student-records");
          }, 3000);
        } else {
          setResult({
            status: 'error',
            note: data.note
          });
        }
      })
      .catch((error) => {
        setResult({
          status: 'error',
          note: 'An error has occured.',
        });
        setSaving(false);
        console.error(error);
      });
  }

  const handleDeleteClick = () => {
    fetch("http://localhost:3001/deleteStudentRecord", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ studentNo : stNumber }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        setSaving(false);
        console.log(data);

        // Redirect to student records page if signing succeeded
        if (data.success) {
          setResult({
            status: 'success',
            note: data.note,
          });
          setTimeout(() => {
            navigate("/student-records");
          }, 3000);
        } else {
          setResult({
            status: 'error',
            note: data.note
          });
        }
      })
      .catch((error) => {
        setResult({
          status: 'error',
          note: 'An error has occured.',
        });
        setSaving(false);
        console.error(error);
      });
  }

  const handleUnsignClick = () => {
    fetch("http://localhost:3001/unsign", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ studentNo : stNumber }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        setSaving(false);
        console.log(data);

        // Redirect to student records page if signing succeeded
        if (data.success) {
          setResult({
            status: 'success',
            note: data.note,
          });
          setTimeout(() => {
            navigate("/student-records");
          }, 3000);
        } else {
          setResult({
            status: 'error',
            note: data.note
          });
        }
      })
      .catch((error) => {
        setResult({
          status: 'error',
          note: 'An error has occured.',
        });
        setSaving(false);
        console.error(error);
      });
  }

  useEffect(() => {

    const searchForStudent = {studentNo : studentNumber.id};
    fetch(
        "http://localhost:3001/viewStudentRecord",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(searchForStudent)
        })
        .then(response => response.json())
        .then(body => {
          if (body.success) {
              const stObject = body.studentObject
              console.log(stObject)
              setStNumber(stObject.studentNo);
              setStFirstName(stObject.name.first)
              setStLastName(stObject.name.last)
              setStDegreeProgram(stObject.course)
              setStTotalUnitsTaken(stObject.totalUnitsTaken)
              setStTotalUnitsRequired(stObject.totalUnitsRequired)
              setStGwa(stObject.GWA)


              for (let i = 0; i < stObject.records.length; i++) {
                setStGrades((prev) => [...prev, {
                  sem: stObject.records[i].sem,
                  year: stObject.records[i].year,
                  status: stObject.records[i].status,
                  units: stObject.records[i].units,
                  subjects: stObject.records[i].subjects
                }]);

                setRecordErrors((prev) => [...prev, {
                  sem: '',
                  year: '',
                  status: '',
                  units: '',
                  subjects: []
                }]);
              }

              
          }
          else {
            console.log(body);
          }
          setFetched(true);

    })

}, [])


    // Renders a loading icon 
    // while waiting for data to get fetched
    if (fetched === undefined) {
      return (
          <LoadingPage />

      );
    }

  return (
    <>
      <ShackerToolbar />
      <Container sx={{ py: 3 }}>
        {/* Heading */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Page title */}
          <Typography variant="h1" fontSize={52} fontWeight="bold">
            Edit Record
          </Typography>

          {/* Status Indicator */}
          { saving && <CircularProgress color="info" /> }
          { !saving && result.status === 'good' && (
            <Fade in timeout={100}>
              <CheckIcon fontSize="large" color="success" />
            </Fade>
          ) }
          { !saving && result.status === 'error' && (
            <Fade in timeout={100}>
              <ErrorIcon fontSize="large" color="error" />
            </Fade>
          ) }
          { !saving && result.status === 'warning' && (
            <Fade in timeout={100}>
              <WarningIcon fontSize="large" color="warning" />
            </Fade>
          ) }
        </Box>

        {/* Student Details Section */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={3}>
            <Stack>
              <Typography variant="subtitle2" sx={labelStyle}>STUDENT NUMBER</Typography>
              <TextField
                variant="outlined"
                name="stNumber"
                label="XXXX-YYYYY"
                fullWidth
                defaultValue={stNumber}
                onBlur={onStudentInfoChange}
                error={stErrors['num'].length !== 0}
                helperText={stErrors['num']}
              />
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack>
                <Typography variant="subtitle2" sx={labelStyle}>STUDENT NAME</Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    variant="outlined"
                    name="stLastName" 
                    label="LAST NAME"
                    defaultValue={stLastName}
                    onBlur={onStudentInfoChange}
                    error={stErrors['lName'].length !== 0}
                    helperText={stErrors['lName']}
                  />
                  <TextField
                    variant="outlined"
                    name="stFirstName" 
                    label="FIRST NAME"
                    defaultValue={stFirstName}
                    onBlur={onStudentInfoChange}
                    error={stErrors['fName'].length !== 0}
                    helperText={stErrors['fName']}
                  />
                  <TextField
                    variant="outlined"
                    name="stMiddleInitial" 
                    label="M.I."
                    defaultValue={stMiddleInitial}
                    onBlur={onStudentInfoChange}
                  />
                </Stack>
              </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Typography variant="subtitle2" sx={labelStyle}>DEGREE PROGRAM</Typography>
              <TextField
                variant="outlined"
                name="stDegreeProgram"
                fullWidth
                value={stDegreeProgram}
                onChange={onStudentInfoChange}
                error={stErrors['degreeProgram'].length !== 0}
                helperText={stErrors['degreeProgram']}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Grades Section */}
        <Typography variant="subtitle2" sx={{...labelStyle, mt: 3 }}>
          GRADES
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>

          { stGrades.length === 0 && (
            <Alert severity="info" sx={{ mb: 2 }}>
              Add a term to start!
            </Alert>
          ) }

          <StudentGradesContext.Provider value={{ grades: stGrades, setGrades: setStGrades, setRecordErrors }}>
            {stGrades.map((term, tIdx) => (
              <TermGrades
                key={tIdx}
                id={tIdx}
                sem={term.sem}
                year={term.year}
                status={term.status}
                units={term.units}
                subjects={term.subjects}
                errors={recordErrors[tIdx]}
              />
            ))}
          </StudentGradesContext.Provider>

          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<AddIcon />}
            sx={{ px: 2 }}
            onClick={handleAddTermClick}
          >
            Add a Term
          </Button>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item>
              <Stack sx={{ width: 220 }}>
                <Typography variant="subtitle2" sx={{...labelStyle, fontSize: 12 }}>TOTAL UNITS TAKEN</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  name="stTotalUnitsTaken"
                  defaultValue={stTotalUnitsTaken}
                  onBlur={onStudentInfoChange}
                  error={stErrors['totalUnitsTaken'].length !== 0}
                  helperText={stErrors['totalUnitsTaken']}
                  />
              </Stack>
            </Grid>

            <Grid item>
              <Stack sx={{ width: 220 }}>
                <Typography variant="subtitle2" sx={{...labelStyle, fontSize: 12 }}>TOTAL UNITS REQUIRED</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  name="stTotalUnitsRequired"
                  defaultValue={stTotalUnitsRequired}
                  onBlur={onStudentInfoChange}
                  error={stErrors['totalUnitsRequired'].length !== 0}
                  helperText={stErrors['totalUnitsRequired']}
                />
              </Stack>
            </Grid>
            
            <Grid item>
              <Stack sx={{ width: 220 }}>
                <Typography variant="subtitle2" sx={{...labelStyle, fontSize: 12 }}>GENERAL WEIGHTED AVERAGE (GWA):</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  name="stGwa"
                  defaultValue={stGwa}
                  onBlur={onStudentInfoChange}
                  error={stErrors['gwa'].length !== 0}
                  helperText={stErrors['gwa']}
                />
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        { result.status && (
          <Fade in timeout={100}>
            <Alert severity={result.status} sx={{ mt: 1 }}>{result.note}</Alert>
          </Fade>
        ) }

        {/* Action Buttons Section */}
        <Box sx={{ mt: 4 }}>
          <Link to="/student-records" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{
                mr: 2,
                backgroundColor: '#E9E9E9',
                color: '#434343',
                '&:hover': {  
                  backgroundColor: '#B3B3B3',
                  color: '#434343',
                }
              }}>
                Cancel
              </Button>
          </Link>
          <Button
            variant="contained"
            color="info"
            onClick={handleCheckInputsClick}
            sx={{
              mr: 2
            }}
          >
            Check inputs
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={handleUpdateClick}
            sx={{
              mr: 2
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={handleSignClick}
            sx={{
              mr: 2
            }}
          >
            Sign
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={handleUnsignClick}
            sx={{
              mr: 2
            }}
          >
            Unsign
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteClick}
            sx={{
              mr: 2
            }}
          >
            Delete
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default EditStudentRecordPage;