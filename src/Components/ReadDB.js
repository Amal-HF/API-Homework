import React, {useEffect, useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function ReadDB() {
    const [obj, setObj] = useState([]);
    let url = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"
  
  useEffect(() => {
     axios.get(url).then((res)=>{
    //   console.log(res.data);
      setObj(res.data);
    })
  }, []);

  // Delete 
  const deleletDate = (id) => {
    console.log(`id: ${id} deleted`);
    axios.delete(`${url}/${id}`).then(res=>{
        console.log(res);
        setObj(obj.filter(del=>{
           return del.id !=id
      }))
    })
  };


  return (
    <div className='main-container'>
      <div className='grid-container'>
        {obj.map((item, index) => {
          return (
          <div className='card-container' key={index}>
            <p><strong>ID: </strong>{item.id}</p>
            <p><strong>Email: </strong>{item.email}</p>
            <p><strong>Password: </strong>{item.pass}</p>
            <button onClick={()=> {deleletDate(item.id)}}>Delete</button>
            <Link to="/Update"> 
                <button onClick={()=> localStorage.setItem("id", item.id)}>Update</button>
            </Link>
          </div>
        )})}
      </div>
    </div>
  )

}


export default ReadDB