import React,{useState} from 'react'
import QrReader from 'react-qr-reader'
import {Link,useHistory} from 'react-router-dom'

export function QrPage() {


    let history = useHistory()

    const handleScan = data => {
      if (data) {
        history.push('/store/'+data)
      }
    }
    const handleError = err => {
      console.error(err)
    }
  
    return(
        <div>
            <h1>Contactless</h1>
            <h3>Helping you have a safer store experience!!</h3>
            <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            className="qr"
            />
            <Link to='/store/10'>Hello</Link>
        </div>
    )
}