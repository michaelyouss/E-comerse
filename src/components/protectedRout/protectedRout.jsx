import React from 'react';
import { Navigate } from 'react-router-dom';
// import Login from '../Login/Login';
// import style from "./ProtectedRout.module.css"



export default function ProtectedRout(props) {

    if(localStorage.getItem('useToken') == null){
        return props.children
    }
    else
    { 
        return <Navigate to={'/Login'}/>
    }

}

