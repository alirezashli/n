import React, {useState,useEffect } from "react";
import {withRouter,useHistory} from "react-router-dom";
// import axios from 'axios';
import Login from './../views/pages/login/Login';

const AuthenticationCheck = (props) => {
    const history = useHistory();
    const [UserData,SetUserData]=useState(false);

    useEffect((props) => {
        let token=localStorage.getItem('token');
        if(!token){
            history.push('/login');
        } else {
            SetUserData(true)
        }
    },[]);

    if(!UserData){
        return (
            <Login/>
        );
    } else {
        return (
            props.children
        );
    }
}

export default withRouter(AuthenticationCheck);