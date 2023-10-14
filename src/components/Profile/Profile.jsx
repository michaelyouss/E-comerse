/** @format */
import { useContext, useEffect} from "react";
import style from "./Profile.module.css";
import jwtDecode from "jwt-decode";
import { logNav } from "../../Context/userContext";





// import { logNav } from "../../Context/userContext";


export default function Profile() {

let {userDataProfil} = useContext(logNav)




  useEffect(()=>{
    let encodedToken = (localStorage.getItem('userToken'))

    let decodeToken =jwtDecode(encodedToken)
  },[])


  return (

<div className='pt-5 min-vh-100'>
      <h2 className='pt-5'> Hello : {userDataProfil?.name}</h2>
      <h2 className='pt-5'> email : {userDataProfil?.email}</h2>
    
    
    </div>

  );
}
