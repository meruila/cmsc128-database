import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button , Alert , AlertTitle } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';


// Icons for Dialog Table Body
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckIcon from '@mui/icons-material/CheckCircleOutlined';
import { formatMuiErrorMessage } from "@mui/utils";

const parseTest = require('../parser.js')

function readFileAsText(file){

  return new Promise(function(resolve,reject){
      let fr = new FileReader();

      fr.onload = (evt) =>{
          var extension = file.name.split(".").pop();
          const bstr = evt.target.result;
          if (extension === "xlsx"){ //For reading .
              const wb = XLSX.read(bstr, { type: "binary" });
              const wsname = wb.SheetNames[0];
              const ws = wb.Sheets[wsname];
              const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
              // console.log(data);
              resolve({"filename": file.name, "data": data});
          }else if (extension === "csv"){
              //console.log(file);
              //resolve(fr.result)
              resolve({"filename": file.name, "data": fr.result});
          }else{
            resolve({"filename": file.name, "success": "false", "msg":"Invalid file extension."});
          }
      
      };

      fr.onerror = function(){
          reject(fr);
      };

      fr.readAsBinaryString(file);
  });
}

export default function UploadButton() {
    // Used for Upload Dialog Box; handleClickOpen() handleClose()
    const [open, setOpen] = React.useState(false);
    const width = "md";
    const navigate = useNavigate();
      
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      navigate('/student-records')
    };

    const [fileList, setFileList] = useState([]);

    const [filesNumber, setFilesNumber] = useState();
    const [rejectedNumber, setRejectedNumber] = useState();

    //const [fetchBody, setFetchBody] = useState({});
    //------------------------
    

    const onChange = (ev) => {
    // console.log(e.target);
    // const files = e.target.files;
    // console.log(files)
    let files = ev.currentTarget.files;
    let readers = [];

                // Abort if there were no files selected
    if(!files.length) return;

    setFilesNumber(files.length)

                // Store promises in array
    for(let i = 0;i < files.length;i++){
      readers.push(readFileAsText(files[i]));
    }
                
                // Trigger Promises
    Promise.all(readers)
    .then((values) => {
                    // Values will be an array that contains an item
                    // with the text of every selected file
                    // ["File1 Content", "File2 Content" ... "FileN Content"]
      var parseList = [];
      var rejectList = [];
      for (var i=0; i<values.length; i++){
        if (values[i].hasOwnProperty('success')){
          rejectList.push(values[i]);
        }else{
          parseList.push(values[i]);
        }
      }
      if (parseList.length !== 0){
        const valList = parseTest.parseFiles(parseList);
        for (var i = 0; i < valList.errList.length; i++){
          const tempErr = valList.errList[i].msg;
          let tempMsg = tempErr.err;
          if (tempErr.row != undefined){
            tempMsg += (" near row " + tempErr.row);
          }else if(tempErr.sem !== null){
            tempMsg += (" at sem " + tempErr.sem + " A.Y. " + tempErr.year);
          }
          rejectList.push({
            filename : valList.errList[i].filename,
            msg: tempMsg,
          });

        }

        if (valList.formattedList.length !== 0){

          const sendToBackend = {formattedList: valList.formattedList};

          fetch(
              "http://localhost:3001/addStudentRecord",
              {
              method: "POST",
              credentials: "include",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(sendToBackend)
              })
              .then(response => response.json())
              .then(body => {
              if (body.success) {

                  //Note: Edit this to add the savedList from the backend response

                  let fileL = [];
                  const savedList = body.savedList;
                  const rejectedList = body.rejectedList;

                  // returnFromDB = {accepted:[], rejected:[]}
                  // let fileL = rejectList + rejected;
                  // let fileT = accepted
                  for (let j = 0; j < savedList.length; j++) {
                    fileL.push({
                      filename: savedList[j],
                      msg: "Successfully saved"
                    })
                  }

                  for (let k = 0; k < rejectedList.length; k++) {
                    fileL.push({
                      filename: rejectedList[k].filename,
                      msg: rejectedList[k].err
                    })
                  }

                  for (let i = 0; i < rejectList.length; i++) {
                    fileL.push({
                      filename: rejectList[i].filename,
                      msg: rejectList[i].msg
                    })
                  }


                  setFileList(fileL);
                  setRejectedNumber((rejectList.length) + rejectedList.length );


                  
                  handleClickOpen()
                  //window.location.reload(true)
              }
              else{
                  alert(body.note);
              }
              })

        }else{
          //alert("There are no valid files to send.");
          let fileL = [];
          for (let i = 0; i < rejectList.length; i++) {
            fileL.push({
              filename: rejectList[i].filename,
              msg: rejectList[i].msg
            })
          }


          setFileList(fileL);
          setRejectedNumber(rejectList.length );          
          handleClickOpen()

        }

      }
      
    })
    .catch(function(err){
      console.log(err)
    });

  };
  return (
    <div>
      <Input type="file" id="files" accept=".xlsx, .xls, .csv" onChange={onChange} inputProps={{ multiple: true }} />
    
      <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={width}
            fullWidth={width}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            <Alert severity="success">
                <AlertTitle><strong>{"Upload List"}</strong></AlertTitle>
            </Alert>
            </DialogTitle>
            <DialogContent>
              <TableContainer sx={{ maxHeight: '80%' }}>
              <Table stickyHeader aria-label="sticky table">
                 <TableHead>
                      <TableRow>
                          <TableCell><strong>File Name</strong></TableCell>
                          <TableCell><strong>Status</strong></TableCell>
                      </TableRow>
                  </TableHead>
                   <TableBody>
                      {fileList.map((item, index) => (
                          <TableRow key={index}>
                              <TableCell>
                                  {item.filename}                         
                              </TableCell>
                              <TableCell>
                                  {item.msg} 
                              </TableCell>
                          </ TableRow>
                      ))}
                  </TableBody>
              </Table>
              </TableContainer>
                           
              {/* <DialogContentText id="alert-dialog-description">
                {}
              </DialogContentText> */}
              <br />
              <Alert severity="success">
                <strong>{(filesNumber - rejectedNumber)}</strong> out of <strong>{(filesNumber)}</strong> files were accepted.
              </Alert>
              
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} autoFocus>
                Okay
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}