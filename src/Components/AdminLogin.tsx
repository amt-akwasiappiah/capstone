import { useState,useEffect,useRef } from "react";
import { PWD_REGEX,LOGIN_URL,ACCESS_TOKEN } from "../Constants/Constants";
import axios from 'axios'
import './Styling/AdminLogin.css'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  
    const userRef = useRef<HTMLInputElement | null>(null);
    // const errRef = useRef<HTMLParagraphElement | null>(null);
  const navigate = useNavigate();

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
  

  // useEffect(() => {
  //   if (PWD_REGEX.test(password)) {
  //     setErrorMsg('Invalid UserName or Password')
  //   }
  // }, [password])

  useEffect(() => {

     setErrorMsg('')
   
  },[password,userName])
  

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

     if (userName.length > 0 && PWD_REGEX.test(password)) {
				setErrorMsg('');
			} else {
				setErrorMsg('Invalid UserName or Password');
			}

    if (errorMsg) {
      return
    }

    try {
      const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({
					userName: userName,
					password: password,
        })
      )
      console.log(response?.data);

      //Store the token in global API Context, and use when sending
      // const accessToken = response?.data?.accessToken;

      setSuccess(true)
      setPassword('')
      setUserName('')
      
    } catch (err: any) {
      console.log(err);
      if (!err?.response) {
          setErrorMsg('No Server Response')
      }else if(err.response?.status===400){
          setErrorMsg('Invalid Username or Password')
      } else if(err.response?.status === 401){
        setErrorMsg('Unauthorized')
      } else {
        setErrorMsg('Login Failed')
      }
    }
    if (ACCESS_TOKEN === 'ADMIN') {
			navigate('/adminboard');
    } else if (ACCESS_TOKEN === 'LECTURER') {
        navigate('/lecturerboard');
    } else {
      navigate('/studentboard');
    }
        
  }

  return (
		<>
			{success ? (
				<section>
					<h1>Login Successful</h1>
					<br />
					<p>
						<a href='#'>Go to dashboard</a>
					</p>
				</section>
			) : (
				<section className='maincontainer'>
            { { errorMsg } && <p>{errorMsg}</p>}
					<form
						onSubmit={handleSubmit}
						className='login_container'>
							<label htmlFor='username'>Username</label>
							<input
								type='text'
								id='username'
								ref={userRef}
								onChange={(e) => setUserName(e.target.value)}
                value={ userName }
                required
							/>
							<label htmlFor='password'>password</label>
							<input
								type='password'
								id='password'
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
						<button>Sign In</button>
					</form>
				</section>
			)}
		</>
	);
}

export default AdminLogin
