import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [id, setID] = useState();
  let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setPass(localStorage.getItem("pass"));

  }, []);

  const updateDate = () => {
    axios.put(`${url}/${id}`, {
      email,
      pass,
    }).then (res => {
      console.log(res.id);
      navigate("/ReadDB");
    }).catch(err=>{
      console.log(err);
    })
  }
  

  return (
    <div className='login-container'>
        <div className='form-container'>
            <p><strong>Update your account info</strong></p>
            <div className='input-container'>
                <label><strong>Email address:</strong></label>
                <input placeholder='Enter Email' width={"300px"} onChange={(e)=> {setEmail(e.target.value);}} type="email"></input>
            </div>
            <div className='input-container'>
                <label><strong>Password: </strong></label>
                <input placeholder='Enter Password' width={"300px"} onChange={(e)=> {setPass(e.target.value);}} type="password"></input>
            </div>
            <button onClick={updateDate}>Update</button>
        </div>
    </div>
  )
}

export default Update