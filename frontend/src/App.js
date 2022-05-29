import React from 'react';
//import './App.css';

import {UserInformation} from './Components/UserInfo'




function App() {
  return (
    <div className="App">
    < UserInformation
      formName="Welcome To The Height Teller App"
      formDescription="Please Fill The Information Below."
    />
  </div>
  );
}

export default App;
