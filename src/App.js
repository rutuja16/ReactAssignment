import React from 'react';
import './App.css';

import ClassComponent from './Assignment/ClassComp.jsx';
import FunctionComponent from './Assignment/FunComp.jsx'

function App() {
  return (
    <div className="App">
      <div >
            <h1 className='heading'>Styling Using Functional and Class Component </h1>
            <div className='Container'>
              <FunctionComponent/>
              <ClassComponent/>
            </div>
            
        </div>
    </div>
  );
}

export default App;
