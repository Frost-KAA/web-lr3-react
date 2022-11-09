import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState} from 'react';
import { setAuthToken } from "./components/setAuthToken"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const router = useRouter();

    const submit = (e) => {
      e.preventDefault()
      console.log(email)
      console.log(password)
        //reqres registered sample user
        const loginPayload = {
          email,
          password
        }
    
        axios.post("https://reqres.in/api/login", loginPayload)
          .then(response => {
            //get token from response
            const token = response.data.token;
    
            //set JWT token to local
            localStorage.setItem("token", token);
    
            //set token to axios common header
            setAuthToken(token);
            console.log(token)
    
            //redirect user to home page
            router.push('/');
    
          })
          .catch(err => {
            setError('Wrong email or password')
            console.log(err)
          });
      };

      return (
        <>
         <form onSubmit={submit} className="form">
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}
            />
            <br/>

            <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
            /> <br/>

            <button className="form-btn" type="submit">Sign in</button>
        </form>
        <div>
          <p className='form-error'>{error}</p>
        </div>
        </>
      );
}

export default Login;