import React from 'react'
import { Redirect } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

function Home(props){
    let link = "";
    if(props.user){
        link = props.user.userType === "Flat Hunter" ? "/dashboardHunter" : "/dashboardOwner";
    }
    else{
        link = "/calculator";
    }
    return <Redirect to={link} />
}

export default withAuth(Home);