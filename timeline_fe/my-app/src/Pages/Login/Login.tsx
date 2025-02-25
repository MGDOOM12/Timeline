import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", userName, password);
    // Add your authentication logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form-container">
          <h1 className="login-title">Welcome to TimeLines</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <div className="login-footer">
            <a href="#forgot-password">Forgot password?</a>
            <p>Don't have an account? <a href="#signup">Sign up</a></p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/login_sample.jpg"
          alt="login screen"
          className="login-image"
        />
      </div>
    </div>
  );
}