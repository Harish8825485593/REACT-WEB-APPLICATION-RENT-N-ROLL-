import '../booking/Book.css';
import log from '../assert/rent nroll logo.png'
import { useNavigate } from 'react-router-dom';
function Book() {

    const navi=useNavigate();
    const handleSubmit=()=>{
        navi('/pay');
    }

    return (
        <div className='kq'>

        <div className='op'>
            <div className='im'>
            <img src={log} alt='loading'/>
            </div>
            <div className='opp'>
                <div className="signu">
                    <form onSubmit={handleSubmit}>
                        <div className='hf'>Booking</div>
                        <div className='date'>
                            <div className='fo'>
                                Pickup Date
                                <input type='date' id='pickdate' className='da2' />
                            </div>
                            <div className='fo'>
                                Drop Date
                                <input type='date' id='dropdate' className='da2' />
                            </div>
                        </div>
                        <input className='nput' type="text" placeholder="Username" required="" />
                        <input className='nput' type="email" placeholder="Email" required="" />
                        <div className='sig'>
                        <select className="nput1">
                            <option>Select your City</option>
                            <option>Coimbatore</option>
                            <option>Chennai</option>
                            <option>Trichy</option>
                            <option>Thanjaovr</option>
                            <option>Thiruvarur</option>
                        </select>
                        <select className="nput1">
                            <option>Special Occasion?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </div>
                        <input className='nput' type="text" placeholder="Address" required="" />
                        <input className='nput' type="text" placeholder="+91 Phone Number" required="" />
                        <button className='utton' type='submit'>Book My Car</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Book;
