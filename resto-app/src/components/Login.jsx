import "./Login.css";
import { useState } from "react";
import { auth } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOTP = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {}
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );

      window.confirmationResult = confirmationResult;

      alert("OTP Sent Successfully!");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);

      alert(
        `Login Successful! Welcome ${result.user.phoneNumber}`
      );
    } catch (error) {
      console.log(error);
      alert("Invalid OTP");
    }
  };

  return (
  <section className="login-section">
    <div className="login-container">
      <h2>𝐇𝐀𝐑𝐈𝐓मां Login</h2>

      <input
        type="tel"
        placeholder="+919876543210"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOTP}>
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOTP}>
        Verify OTP
      </button>

      <div id="recaptcha-container"></div>
    </div>
  </section>
);
}

export default Login;