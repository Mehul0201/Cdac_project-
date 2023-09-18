import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Homepage/Footer/Footer';
import Login from './Components/Homepage/Login/Login';
import Welcome from './Components/Homepage/Welcome/Welcome';
import Register from './Components/Homepage/Register/Register';
import  Navbar  from './Components/Homepage/Navbar/Navbar';
import Forgot from './Components/Homepage/ForgotPassword/Forgot';
import Result from './Components/WorkingHome/HomePagelogin/Searchbase/Result';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Mumbai from './Components/WorkingHome/HomePagelogin/Searchbase/Button/Mumbai/Mumbai';
import Shimla from './Components/WorkingHome/HomePagelogin/Searchbase/Button/Shimla/Shimla';
import AboutUs from './Components/Footer/Aboutus/Aboutus';
import Goa from './Components/WorkingHome/Exploer/Goa/Goa';
import Bihar from './Components/WorkingHome/Exploer/Bihar/Bihar';
import Gujarat from './Components/WorkingHome/Exploer/Gujarat/Gujarat';
import Himachal from './Components/WorkingHome/Exploer/Himachal/Himachal';
import Kerala from './Components/WorkingHome/Exploer/kerala/Kerala';
import Kashmir from './Components/WorkingHome/Exploer/Kashmir/Kashmir';
import Assam from './Components/WorkingHome/Exploer/Assam/Assam';
import Arunachal from './Components/WorkingHome/Exploer/Arunachal/Arunachal';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Goa" element={<Goa />} />
          <Route path="/Bihar" element={<Bihar />} />
          <Route path="/Gujarat" element={<Gujarat />} />
          <Route path="/Himachal" element={<Himachal />} />
          <Route path="/Kerala" element={<Kerala />} />
          <Route path="/Kashmir" element={<Kashmir />} />
          <Route path="/Assam" element={<Assam />} />
          <Route path="/Arunachal" element={<Arunachal />} />
          <Route path="/result" element={<Result />} />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/Welcome/shimla" element={<Shimla />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;