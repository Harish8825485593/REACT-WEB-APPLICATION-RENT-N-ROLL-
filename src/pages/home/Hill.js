import '../home/Home.css';
import Jeep from '../assert/1 (1).png';
import thar from '../assert/1 (2).png';
import gur from '../assert/1 (3).png';
import jimm from '../assert/1 (4).png';

const hillClimbers = [
    { name: 'Force Motors Gurkha', img: Jeep },
    { name: 'MAHINDRA THAR', img: thar },
    { name: 'JEEP WRANGLER', img: gur },
    { name: 'MARUTI SUZUKI JIMNY', img: jimm },
];

function Hill() {
    return (
        <div>
            <div className='ok'>
                <h2 className='head'>Hill Climbers</h2>
                <div className='ol2'>
                    {hillClimbers.map((car, index) => (
                        <div key={index} className="card12">
                            <h3>{car.name}</h3>
                            <img src={car.img} alt={car.name} />
                            <div className="details">
                                <p>&#10004; 24 Hours: ₹ 2000</p>
                                <p>&#10004; Extra Hour: ₹ 300</p>
                            </div>
                            <button className="book-now">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hill;
