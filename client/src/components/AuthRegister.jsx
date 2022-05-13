import './AuthForm.css';
import { Link } from 'react-router-dom';
import profile from "../assets/a.png";
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import video from "../videos/video(2).mp4"
function AuthRegister() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const notify = () => toast("You're registered, let's get started!");
	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert('Success')
			toast.success("İş deneyimi eklendi");
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
					<h1>Register</h1>
					<form onSubmit={registerUser}>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Name"
						/>
						<br />
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="Email"
						/>
						<br />
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Password"
						/>
						<br />
						<input type="submit" onClick={notify} value="Register" />
						<p className="link">
							<Link to='/login'><a href="#">Login</a></Link>

						</p>

					</form>
				</div>
			</div>
		</div>
	)

}

export default AuthRegister;