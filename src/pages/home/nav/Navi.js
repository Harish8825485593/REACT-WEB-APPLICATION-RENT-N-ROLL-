import { useNavigate } from 'react-router-dom';
import './Navi.css';
function Navi()
{
    const navi=useNavigate('');
    return(
        <div>
            <div className="nav">
                <p>Rent'N Roll</p>
                <div className='ol'>
                    <a href="/home">Home</a>
                    <a href="/service">Policy</a>
                    <a href="/service">Services</a>
                    <a href="/about">About Us</a>
                    {/* <a href="/jour">History</a> */}
                    <div className='lugo'>
                    <button onClick={()=>{navi('/login')}}>Logout</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Navi;