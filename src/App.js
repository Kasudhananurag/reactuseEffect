import './App.css';
import PropTypes from "prop-types";
import Add from './components/Add';
import { useState, useEffect } from 'react';

function App() {

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    console.log("mounted");

    return () => { console.log("component unmounted") }; 
  },[])

  return (
    <>
      <div>
        <button onClick={ () => { setShowText(!showText) }} >Show/hide text</button>
        {showText === true && <h6>hi this is anurag</h6>}
      </div>
    </>
  );
}

export default App;
