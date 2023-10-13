import { createContext, useState } from "react";



  export let logNav = createContext();

export default function UserContextProvider(props)
{

const [userToken, setUserToken] = useState(null)

const [userDataProfil, setUserEDataProfil] = useState(null)



    return<logNav.Provider value={{userToken, setUserToken, setUserEDataProfil, userDataProfil}}>
   {props.children}
    </logNav.Provider>
}