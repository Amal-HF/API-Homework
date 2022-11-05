import React, {useEffect, useState}from 'react'
import axios from 'axios'


function Read() {
  const [obj, setObj] = useState([]);
  let url = "https://picsum.photos/v2/list"

  
  useEffect(() => {
     axios.get(url).then((res)=>{
      console.log(res.data);
      setObj(res.data);
    })
  }, []);

  // // Delete 
  // const del = (id) => {
  //   console.log(id);
  //   axios.delete(`${url}/${id}`).then(res=>{
  //     console.log(res);
  //     setObj(obj.filter(del=>{
  //       return del.id !=id
  //     }))
  //   })
  // };
  

  return (
    <div className='main-container'>
      <div className='grid-container'>
        {obj.map((item, index) => {
          return (
          <div className='card-container' key={index}>
            <p><strong>ID: </strong>{item.id}</p>
            <img src={item.download_url} width={"300px"} height={"300px"}></img>;
            {/* <button onClick={()=> {del(item.id)}}>Delete</button> */}
            {/* <button>Update</button> */}
          </div>
        )})}
      </div>
    </div>
  )

}

export default Read