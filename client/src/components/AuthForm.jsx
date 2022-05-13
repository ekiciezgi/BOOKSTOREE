import './AuthForm.css';
import { useState } from 'react'
import profile from "../assets/a.png";
import email from "../assets/email.jpg";
import video from "../videos/video(2).mp4"

import pass from "../assets/pic.jpg";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const notify = () => toast("You're logined, let's get started!");


  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (data) {
      localStorage.setItem('token', data.user)

      window.location.href = '/addbook'
    } else {
      alert('Please check your username and password')
    }
  }


  return (
    <div className='hero-containr'>
      <video src={video} autoPlay loop muted />
      <ToastContainer position="bottom-right" />

      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />

            </div>
          </div>
          <h1>Login Page</h1>
          <form onSubmit={loginUser}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <br />
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />

            <input type="submit" onClick={notify} value="Login" />
          </form>
          <p className="link">
            <Link to='/signup'>
              Forgot password ?  Or <a href="#">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>

  )

}

export default AuthForm;