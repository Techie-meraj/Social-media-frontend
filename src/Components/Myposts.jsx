import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

const Myposts = () => {
  const [posts,setPosts]=useState([])

  const myallpost=async()=>{
    try {
      let id =localStorage.getItem('userId')
      console.log(id);
      
      const { data } = await axios.get(`http://localhost:8080/post/getposts/${id}`);
      console.log("API Response:", data);
      // const userId = data.allpost[0].user
      // localStorage.setItem('id',JSON.stringify({userId}))
      // console.log(userId);
      
      if (data?.success) {
        setPosts(data?.posts);
        
      }
      
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(()=>{
    myallpost()
  },[])

  return (<>
    {/* <div>Myposts</div> */}
    <div>
      {posts && posts.map((post, index) => (
        <PostCard key={index} id={post._id} isUser={localStorage.getItem('userId')===post.user} title={post.title} description={post.description} image={post.image} username={post.user.username || "Unknown User"} time={post.createdAt} />
      ))}
    </div>
  </>)
}

export default Myposts