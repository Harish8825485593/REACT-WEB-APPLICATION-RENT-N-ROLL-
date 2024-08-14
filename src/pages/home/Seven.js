import '../home/Home.css';
import harr from '../assert/pn (1).png';
import xuv from '../assert/pn (2).png';
import alc from '../assert/pn (3).png';
import kia from '../assert/pn (4).png';
import safa from '../assert/pn (5).png';
import ear from '../assert/pn (6).png';
import scar from '../assert/pn (7).png';
import bolu from '../assert/pn (8).png';
import { useNavigate } from 'react-router-dom';

const cars = [
    { name: 'TATA HARRIER', img: harr },
    { name: 'MAHINDRA XUV700', img: xuv },
    { name: 'HUNDAI ALCROZ', img: alc },
    { name: 'KIA CARENS', img: kia },
    { name: 'TATA SAFARRI', img: safa },
    { name: 'MARUTHI SUZUKI ERTIGA', img: ear },
    { name: 'MAHENDRA SCARPIO', img: scar },
    { name: 'MAHENDRA BOLERO', img: bolu }
];

function Seven() {
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('/book');
    };

    return (
        <div className='ok'>
            <h2 className='head'>7 Seater</h2>
            <div className='ol2'>
                {cars.map((car, index) => (
                    <div key={index} className="card12">
                        <h3>{car.name}</h3>
                        <img src={car.img} alt={car.name} />
                        <div className="details">
                            <p>&#10004; 24 Hours: ₹ 2000</p>
                            <p>&#10004; Extra Hour: ₹ 300</p>
                        </div>
                        <button onClick={handleBook} className="book-now">Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seven;
