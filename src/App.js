import logo from './logo.svg';
// import './App.css';
import './CSS/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/nav"
import Footer from "./components/footer"

import {
  Routes,
    Route,
  } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div >
    <ToastContainer position='top-center'/>
      <Nav/>
      <Routes>        
      <Route path="*"  element={<Home/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/footer" element={<Footer/>}></Route>
        
       </Routes>
    </div>
  );
}

export default App;
