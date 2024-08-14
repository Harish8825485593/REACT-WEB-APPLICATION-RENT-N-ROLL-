import React, { useState } from 'react';
import axios from 'axios';
import './login-sign.css';
import tik from '../assert/tick-1024.webp';
import log from '../assert/rent nroll logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [phonenum, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [lisense, setLisense] = useState('');
    const [password, setPassword] = useState('');
    const [passworda, setPassworda] = useState('');
    const [message, setMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === passworda) {
            const datas = {
                name: username,
                email: email,
                pass: password,
                phone: phonenum,
                lisense: lisense
            };

            setPopupVisible(true);
            try {
                const response = await axios.post('http://localhost:9001/rental/signup', datas);
                const user = response.data;
                setMessage(`User ${user.name} created successfully!`);
            } catch (error) {
                console.error('Error during sign-up:', error);
                setMessage('Sign-up failed. Please try again.');
            }
        } else {
            alert("Passwords do not match.");
        }
    };

    const handleBackToLogin = () => {
        setPopupVisible(false);
        navi('/home');
    };

    return (
        <div className='oppp'>
            <div className='kl'>
                <div className='im'>
                    <img src={log} alt='loading' />
                </div>
                <div>
                    <div className='op1'>
                        <div className="signup">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="chk" aria-hidden="true">Sign Up</label>
                                <input 
                                    type="text" 
                                    placeholder="Username" 
                                    id="name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder="+91 Mobile Number" 
                                    id="phno"
                                    value={phonenum}
                                    onChange={(e) => setPhone(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    id="mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder="License Id" 
                                    id="license"
                                    value={lisense}
                                    onChange={(e) => setLisense(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="password" 
                                    placeholder="Enter New Password" 
                                    id="pass"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="password" 
                                    placeholder="Re-Enter Password" 
                                    id="pass-con"
                                    value={passworda}
                                    onChange={(e) => setPassworda(e.target.value)} 
                                    required 
                                />
                                <button type="submit">Create Account</button>
                            </form>
                            {message && <p>{message}</p>}
                        </div>
                    </div>
                    {popupVisible && (
                        <div className='pop'>
                            <img src={tik} alt='loading' />
                            <h4>Account Created Successfully</h4>
                            <button onClick={handleBackToLogin}>Go</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Signup;
