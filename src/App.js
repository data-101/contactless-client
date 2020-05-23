import React from 'react';
import QrReader from 'react-qr-reader'
import './App.css';


const qr= {
  background: 'white',
  border: '1em solid blue',
  maxWidth: '60em',
  margin: '0 auto'
}

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
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={qr}
        />
    </div>
  );
}

export default App;
