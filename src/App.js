import React from 'react';
import QrReader from 'react-qr-reader'
import './App.css';




function App() {

  const handleScan = data => {
    if (data) {
  
    }
  }
  const handleError = err => {
    console.error(err)
  }


  return (
    <div className="App">
        <h1>Contactless</h1>
        <h3>Helping you have a safer store experience!!</h3>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          className="qr"
        />
    </div>
  );
}

export default App;
