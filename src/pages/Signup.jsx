import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [error, setError] = useState(false);
  const signup = async (e) => {
    e.preventDefault();
    console.log("signing up...");
    const resp = await axios.post(
      "https://syntax-hackathon.darsh-sikkasikk.repl.co/auth/signup",
      { username, email, password }
    );
    setError(resp.error);
    setErrmsg(resp.message);
  };
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Signup</h1>
      <form onSubmit={signup}>
        <div className="input-group">
          <label htmlFor="name">Username</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.value)}
            required
          />
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2 className="text-center text-lg">
        Already have an account? <Link to="/login">Login</Link>
      </h2>
      <div style={{ color: error ? "red" : "green" }}>{errmsg}</div>
    </>
  );
}

export default Signup;
