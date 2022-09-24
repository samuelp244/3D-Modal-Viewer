import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import ModelScene from './Components/ModelScene';
// import UploadFile from './Components/UploadFile';



function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/scene" element={<ModelScene/>}></Route>
          {/* <Route path="/upload" element={<UploadFile/>}></Route> */}
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
