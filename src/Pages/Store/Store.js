import React,{useState} from 'react'
import {
    useParams
  } from "react-router-dom";


export function Store() {

    let {storeId} = useParams()
  
    return(
        <div>
            <h1>Store is:{storeId}</h1>
        </div>
    )
}