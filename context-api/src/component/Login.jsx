import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const  [username,setUsername]=useState('');
    const [password,setPassword] =useState('');
    const {setUser} = useContext(UserContext);
        
    const Submit = (e) => {
        e.preventDefault();
        setUser ({username,password})
    };


return (
    <>
             <p>hey</p>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='userName' />
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
            <button onClick={Submit}>Submit</button>
    </>
  )
}
export default Login;