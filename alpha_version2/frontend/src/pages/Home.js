import React, { useContext, useEffect, useState }from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box"

import HomeShackerToolbar from '../components/HomeShackerToolbar'
import LoadingPage from '../components/LoadingPage'


/**
 * Component for Shacker Homepage.
 * Page should display verified student, to be followed...
 *  
 */

function Homepage() {

    const [totalRecords, setTotalRecords] = useState();
    const [verifiedRecords, setVerifiedRecords] = useState();

    const [gotFetched, setgotFetched] = useState();

    useEffect(() => {
        fetch(
            "http://localhost:3001/homeRecords",
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
                  console.log(body);
                  setTotalRecords(body.allCount);
                  setVerifiedRecords(body.verifiedCount);
                  setgotFetched(true);
              }
              else {
                console.log(body);
              }
        })
    }, [])

    const recentChanges = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5">
                    ultrices neque ornare 
                </Typography>
                <Typography sx={{ fontSize: 14 }} >
                    ultrices neque ornare aenean euismod elementum nisi quis eleifend quam
                </Typography>
            </CardContent>

            <CardActions>
                <div/>
                <Button size="small" sx={{ marginLeft: "auto" }}>View all</Button>
            </CardActions>
        </React.Fragment>
    );

    const recordsOverview = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h3">
                    {totalRecords}
                </Typography>
                <Typography sx={{ fontSize: 14 }} >
                    total records
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const verifiedOverview = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h3">
                    {verifiedRecords}
                </Typography>
                <Typography sx={{ fontSize: 14 }} >
                    verified records
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    
    // Renders a loading icon 
    // while waiting for data to get fetched
    if (gotFetched === undefined) {
        return (
            <LoadingPage />
        );
    }
    
    return (
        <div>
            <HomeShackerToolbar/>

            <Container maxWidth="xl">
                <Typography variant="h4" marginTop="40px" marginBottom="20px">
                    Recent Changes
                </Typography>
            </Container>
            <Container maxWidth="xl">
                <Card variant="outlined">{recentChanges}</Card>
            </Container>

            <Container maxWidth="xl">
                <Typography variant="h4" marginTop="40px" marginBottom="20px">
                    Overview
                </Typography>
            </Container>
            
            <Container maxWidth="xl">
                <Grid container spacing={10} justifyContent="center">
                    <Grid item>
                        <Card variant="outlined" sx={{ minWidth: 700 }}>{recordsOverview}</Card>
                    </Grid>
                    <Grid item>
                        <Card variant="outlined" sx={{ minWidth: 700 }}>{verifiedOverview}</Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Homepage;
