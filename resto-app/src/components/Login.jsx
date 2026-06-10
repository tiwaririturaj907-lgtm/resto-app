import "./Login.css";
import { useState } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created Successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2>HARITमां Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<div style={{ margin: "10px 0" }}>
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={() =>
      setShowPassword(!showPassword)
    }
  />

  <label htmlFor="showPassword">
    Show Password
  </label>
</div>
        <button onClick={handleLogin}>
          Login
        </button>

        <button onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </section>
  );
}

export default Login;