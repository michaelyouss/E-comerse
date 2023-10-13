import { useState } from 'react';
import {createContext} from 'react';

 export let CounterContext =createContext();

export default function CounterContextProvider(props){
let [counter, setCounter] =useState(20);
let [userName, setUserName] =useState(0);

function CounterContex(){
    setCounter(Math.random)
}
    return <CounterContext .Provider value={{counter,userName,CounterContex}}  >
        
        {props.children}
        </CounterContext .Provider>
}

