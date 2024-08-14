import '../home/Home.css';
import hc1 from '../assert/FOUR SEATER/1-removebg-preview.png';
import hc2 from '../assert/FOUR SEATER/2-removebg-preview.png';
import hc3 from '../assert/FOUR SEATER/3-removebg-preview.png';
import hc4 from '../assert/FOUR SEATER/4-removebg-preview.png';
import hc5 from '../assert/FOUR SEATER/5-removebg-preview.png';
import hc6 from '../assert/FOUR SEATER/6-removebg-preview.png';
import hc7 from '../assert/FOUR SEATER/7-removebg-preview.png';
import hc8 from '../assert/FOUR SEATER/8-removebg-preview.png';
import hc9 from '../assert/FOUR SEATER/9-removebg-preview.png';
import hc10 from '../assert/FOUR SEATER/10-removebg-preview.png';
import hc11 from '../assert/FOUR SEATER/11-removebg-preview.png';
import hc12 from '../assert/FOUR SEATER/12.png';
import { useNavigate } from 'react-router-dom';

const cars = [
    { name: 'HONDA CITY', img: hc1 },
    { name: 'SHIFT DESIRE', img: hc2 },
    { name: 'HUNDAI I-20', img: hc3 },
    { name: 'HUNDAI VERNA', img: hc4 },
    { name: 'HONDA AMAZE', img: hc5 },
    { name: 'HUNDAI CRETA', img: hc6 },
    { name: 'SUZUKI FR0NX', img: hc7 },
    { name: 'WOLSWAGEN POLO', img: hc8 },
    { name: 'KIA SELTOS', img: hc9 },
    { name: 'KIA SONET', img: hc10 },
    { name: 'TOYOTA TAISOR', img: hc11 },
    { name: 'SCODA RAPID', img: hc12 }
];

function Four() {
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('/book');
    };

    return (
        <div>
            <div className='ok'>
                <h2 className='head'>4 Seater</h2>
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
        </div>
    );
}

export default Four;
