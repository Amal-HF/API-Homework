import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();
    let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"

    const postDate = (e) =>{
        e.preventDefault();
        axios.post(url, {
            email,
            pass
        }).then(res => {
            console.log(res.data);
            localStorage.setItem("email", res.data.email)
            localStorage.setItem("pass", res.data.pass)
            localStorage.setItem("id", res.data.id)
            navigate("/Read");
        })
    }

  return (
    <div className='login-container'>
        
        <form onSubmit={postDate} className={"form-container"}> 
            <p><strong>Sign in to your account</strong></p>
            <div className='input-container'>
                <label><strong>Email address:</strong></label>
                <input placeholder='Enter Email' width={"300px"} onChange={e=> {setEmail(e.target.value)}} type="email" required></input>
            </div>
            <div className='input-container'>
                <label><strong>Password: </strong></label>
                <input placeholder='Enter Password' width={"300px"} onChange={e=> {setPass(e.target.value)}} type="password" required></input>
            </div>
            <button type='submit'>sign in</button>
        </form>
    </div>
  )
}

export default Create