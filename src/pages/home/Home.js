import React from 'react';
import '../home/Home.css';
import Seven from './Seven';
import Four from './Four';
import Hill from './Hill';
import Footer from './Footer';
import Navi from './nav/Navi';

function Home() {
   
      
    return (
        <div>
                <Navi/>
            <div className="main-content">
                <div className='you'>
                    <h1 className='wel'>Welcome to Rent 'N Roll!</h1>
                    <p>We're thrilled to have you here. At Rent 'N Roll, we offer a wide variety of vehicles to suit your needs, whether you're looking for a comfortable 4-seater for a city drive, a spacious 7-seater for family trips, or a rugged hill climber for your adventurous journeys.</p>
                    {/* <h3>Why Choose Us?</h3>
                    <p>Wide Selection of Vehicles: From the reliable Tata Harrier to the luxurious Mahindra XUV700, we've got a car for every occasion.</p>
                    <p>Affordable Pricing: Enjoy competitive rental rates with transparent pricing. No hidden fees!</p>
                    <p>Flexible Rental Periods: Rent a car for 24 hours or extend your journey with our flexible hourly rates.</p> */}
                </div>
                <Four />
                <Seven />
                <Hill />
                <Footer /> 
            </div>
        </div>
    );
}

export default Home;
