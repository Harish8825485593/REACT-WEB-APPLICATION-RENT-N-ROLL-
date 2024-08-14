import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('MasterCard');

  return (
    <div className="payment-container1">
      <h3>PAYMENT METHOD</h3>
      <div className="payment-methods1">
        <label>
          <input 
            type="radio" 
            name="payment-method" 
            value="MasterCard" 
            checked={paymentMethod === 'MasterCard'} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" alt="MasterCard" />
        </label>
        <label>
          <input 
            type="radio" 
            name="payment-method" 
            value="UPI" 
            checked={paymentMethod === 'UPI'} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          <span>UPI QR Code</span>
        </label>
      </div>

      {paymentMethod === 'MasterCard' && (
        <div className="payment-details">
          <h3>Payment Details</h3>
          <form>
            <label>
              Card Holder Full Name
              <input type="text" name="cardholder" placeholder="CARD NAME" />
            </label>
            <label>
              Credit Card Number
              <input type="text" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX" />
            </label>
            <div className="expiry-cvv">
              <div className="expiry">
                <label>
                  Expiry Date
                  <select>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </label>
                <label>
                  Year
                  <select>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                </label>
              </div>
              <label className="cvv">
                CW2
                <input type="text" name="cvv" placeholder="..." />
              </label>
            </div>
            <button type="submit">BOOK A RIDE</button>
          </form>
        </div>
      )}

      {paymentMethod === 'UPI' && (
        <div className="upi-details">
          <h3>Scan UPI QR Code</h3>
          <img src="upi-qr-code.png" alt="UPI QR Code" className="upi-qr-code" />
        </div>
      )}
    </div>
  );
}

export default Payment;
