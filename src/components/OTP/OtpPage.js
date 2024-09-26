import React, { useState } from 'react';
import '../../screens/style.css';

const OTPPage = ({ isOpen, setIsOpen, onSubmit, resendOtp }) => {
  const [otp, setOtp] = useState({ code1: '', code2: '', code3: '', code4: '' });

  const handleChange = (event, fieldName, nextFieldName, prevFieldName) => {
    const { value } = event.target;

    if (value.length <= 1) {
      setOtp((prevOtp) => ({ ...prevOtp, [fieldName]: value }));

      if (value.length === 1 && nextFieldName) {
        document.getElementById(nextFieldName).focus();
      } else if (value.length === 0 && prevFieldName) {
        document.getElementById(prevFieldName).focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const completeOTP = `${otp.code1}${otp.code2}${otp.code3}${otp.code4}`;
    if (isOtpComplete()) {
      onSubmit(completeOTP); // Call the parent's onSubmit prop
      setIsOpen(false); // Close the OTP modal
      setOtp({ code1: '', code2: '', code3: '', code4: '' });
    }
  };

  const isOtpComplete = () => {
    return otp.code1 && otp.code2 && otp.code3 && otp.code4;
  };

  return (
    <div className={isOpen ? "Veri active" : "Veri"}>
      <div className="inqure">
        <span className="icon-close2 popcls" onClick={() => setIsOpen(!isOpen)}></span>
        <form onSubmit={handleSubmit}>
          <h4 className="text-center">Verify OTP</h4>
          <p className="text-center">Enter the 4-digit code sent to your mobile number.</p>
          <div className="code">
            <input
              type="text"
              id="code1"
              maxLength="1"
              value={otp.code1}
              onChange={(e) => handleChange(e, 'code1', 'code2', null)}
            />
            <input
              type="text"
              id="code2"
              maxLength="1"
              value={otp.code2}
              onChange={(e) => handleChange(e, 'code2', 'code3', 'code1')}
            />
            <input
              type="text"
              id="code3"
              maxLength="1"
              value={otp.code3}
              onChange={(e) => handleChange(e, 'code3', 'code4', 'code2')}
            />
            <input
              type="text"
              id="code4"
              maxLength="1"
              value={otp.code4}
              onChange={(e) => handleChange(e, 'code4', null, 'code3')}
            />
          </div>
          <p className="text-center">
            <button type="submit" className="button" disabled={!isOtpComplete()}>Verify OTP</button>
          </p>
          <p className="text-center result" onClick={resendOtp}>
            Didn't get OTP? <u className="resend">Resend Now</u>
          </p>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;