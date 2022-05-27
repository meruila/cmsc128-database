import React, { useEffect , useState} from "react";
import { Navigate } from "react-router-dom";


function Admin({children}) {
    const [adminStatus, setAdminStatus] = useState();

    useEffect(() => {
        fetch(
            "http://localhost:3001/isAdmin",
            {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(response => response.json())
            .then(body => {
                setAdminStatus(body.isAdmin);

                if(!body.isAdmin){
                    alert("You are not an admin.");
                }
            })
            .catch(err => console.log(err));                
    },[]); 

    if (adminStatus === undefined) {
        return <div> Please wait, page is still loading... </div>;
    }

    if(!adminStatus){
        return <Navigate to="/home" replace />
    }

    return children

}




export default Admin;