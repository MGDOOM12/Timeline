import { useState } from "react";
import "./Login.css";
export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(userName, password);
  return (
    <div className="flex-container">
      <div id="login-side" className="flex-item1">
        <h1> Welcome to TimeLines</h1>
        <div className="input-placement">
          <h2> Username </h2>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="input-placement">
          <h2> Password </h2>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex-item2">
        <img
          src="/login_sample.jpg"
          alt="login_screen_img"
          id="login-screen-img"
        />
      </div>
    </div>
  );
}
