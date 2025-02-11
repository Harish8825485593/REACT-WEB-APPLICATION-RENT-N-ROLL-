import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import './Side.css'; // Import the CSS file for the sidebar

const Side = () => {
  
const navi=useNavigate('');
  return (
    <div className="sidebar">
      <h2>Rent'N Roll</h2>
      <div className='hue'>
      <button  onClick={()=>{navi('/caradd')}}>Add Cars</button>
      <button  onClick={()=>{navi('/carview')}}>View Cars</button>
      <button  onClick={()=>{navi('/editcar')}}>Edit Car</button>
      <button  onClick={()=>{navi('/removecar')}}>Remove Car</button>
      <button  onClick={()=>{navi('/reviews')}}>Reviews</button>
      </div>
    </div>
  );
};

export default Side;