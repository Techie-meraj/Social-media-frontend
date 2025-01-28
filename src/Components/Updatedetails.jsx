import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom'


const Updatedetails = () => {
  const {id} =useParams();
  let Navigate =useNavigate()
  // const [post,setpost] = useState({})
  const [inputs,setinputs] = useState({})
  const getPostdetails =async()=>{
    try {
      const {data} = await axios.get(`http://localhost:8080/post/getpost/${id}`) 
      if(data.success){
        setinputs({
          title:data.post.title,
          description:data.post.description,
          image:data.post.image
        })
      }else{
        console.log("API returned success as false");
      }
    }catch (error) {
      console.error("Error fetching posts details:",error)
    }
  }
    
 useEffect(()=>{
  getPostdetails()
 },[id])

    const handlechange =(e)=>{
    const { name,value } =e.target
      setinputs({...inputs,[name]:value})
    }

    const handlesubmit =async(e)=>{
      e.preventDefault()
   try{
      const userId = localStorage.getItem('userId')
      let {data}=await axios.put(`http://localhost:8080/post/updatepost/${id}`,{
      title:inputs.title,
      description:inputs.description,
      image:inputs.image,
      user:userId
     })
     console.log('API RESPONSE',data);
     
     if(data.success){
      alert('Post Updated Successfully')
      Navigate('/')
     }
  
     
  }catch(error){
   console.log(error);
  }
  
  }

  return (<>
    <div className='border-2 w-3/4 mx-auto rounded-lg mt-10'>
    <div className='text-center text-4xl border-b-2 py-7'>Update Post</div>
  <form className='w-2/5 mx-auto flex flex-col gap-5' onSubmit={handlesubmit}>
<label className="input input-bordered flex items-center gap-2">
 <MdEmail/>
  <input type="text" className="grow" placeholder="Title" name='title' value={inputs.title} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<FaUserTie/>
  <input type="text" className="grow" placeholder="description" name='description' value={inputs.description} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<MdOutlinePassword />
 <input type="text" className="grow" placeholder="Image-URL" name='image' value={inputs.image} onChange={handlechange}  />
</label>
<button type='submit' className='btn btn-outline btn-success'>Update Post</button>
</form>
</div>
  </>)
}

export default Updatedetails