import React from 'react';
import { UilUser, UilLock } from '@iconscout/react-unicons';
import ReCAPTCHA from 'react-google-recaptcha';
import './authentication.css';

function Authentication() {
  return (
    <div className='authentication'>
      <div className="container">
        <div className="header">
          <div className="text">Welcome Karnatka Police</div>
        </div>
       
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Name" />
            <UilUser className="icon" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
            <UilLock className="icon" />
          </div>
          <div className="capcha" >
            <ReCAPTCHA sitekey="6Lfw2T0pAAAAAIaYv9PUcTqkUfewW7ZMwSvAhWb0" className='' />
          </div>
        </div>
        <div className="submit-container">
          <button className='submit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
