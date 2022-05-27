import React from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const onChange = (ev) => {
    // console.log(e.target);
    // const files = e.target.files;
    // console.log(files)
    let files = ev.currentTarget.files;
    let readers = [];

                // Abort if there were no files selected
    if(!files.length) return;

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
        console.log(valList)

        if (valList.formattedList.length !== 0){

          const sendToBackend = {formattedList: valList.formattedList};

        //console.log(sendToBackend);

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
                  console.log(body);
                  alert(body.note);
                  if (body.savedList.length !== 0){

                    
                    navigate("/student-records");

                  }else{
                    alert(body.note);

                  }

                  //window.location.reload(true)
              }
              else{
                  console.log(body);
                  alert(body.note);
              }
              })

        }else{
          alert("Your files have not been uploaded :(");
          alert("Error: ", )
        }

        


      }
      //console.log(rejectList);

    })
    .catch(function(err){
      console.log(err)
    });


  };
  return (
    <div>
      <input type="file" accept=".xlsx, .xls, .csv" onChange={onChange} multiple />
    </div>
  );
}