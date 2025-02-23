import { useState } from "react";
import "./Login.css"
export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(userName, password);
  return (
    <div className="flex-container">
      <div className="flex-item">
        <h2> Login </h2>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <h2> Password </h2>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
