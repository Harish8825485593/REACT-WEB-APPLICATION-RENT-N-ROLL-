
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/login-signup/Login';
import Signup from './pages/login-signup/Signup';
import Home from './pages/home/Home';
import Admin from './pages/login-signup/Admin';
import Service from './pages/navpages/Services';
import About from './pages/navpages/About';
import Journey from './pages/Journy/Journey';
import Book from './pages/booking/Book';
import Payment from './pages/booking/Payment';
import Dashboard from './pages/admin/Dashboard';
import ViewCar1 from './pages/admin/car/ViewCar';
import EditCar1 from './pages/admin/car/EditCar';
import RemoveCar1 from './pages/admin/car/RemoveCar';
import AdminReview11 from './pages/admin/Reviews/AdminReview';
import CarAdd1 from './pages/admin/car/CarAdd';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup/home' element={<Home/>}/>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/jour' element={<Journey/>}/>
          <Route path='/pay' element={<Payment/>}/>
          <Route path='/caradd' element={<CarAdd1/>}/>
                        <Route path='/carview' element={<ViewCar1/>}/>
                        <Route path='/reviews' element={<AdminReview11/>}/>
                        <Route path='/removecar' element={<RemoveCar1/>}/>
                        <Route path='/editcar' element={<EditCar1/>}/>
   
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;


// import React from 'react';
// import Payment from '../src/pages/booking/Payment';

// function App() {
//   return (
//     <div className="App">
//       <Payment />
//     </div>
//   );
// }

// export default App;
