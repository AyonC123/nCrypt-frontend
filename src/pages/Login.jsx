import {useState} from 'react';
import { Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <>
      <h1 className="text-center text-lg">Login</h1>
      <form>
        <div className="input-group">
          <label for="name">Username / Email</label>
          <input required type="text" name="name" id="name" placeholder="Username / Email" value={username} onChange={(e) => setUsername(e.value)} />
        </div>
        <div className="input-group">
          <label for="name">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.value)} required />
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2 className='text-center text-lg'>Don't have an account? <Link to='/signup'>Signup</Link></h2>
    </>
    </>
  );
}

export default Login;
