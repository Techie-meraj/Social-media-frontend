import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
 
  const getAllpost = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/post/allpost');
      console.log("API Response:", data);
      // const userId = data.allpost[0].user
      // localStorage.setItem('id',JSON.stringify({userId}))
      // console.log(userId);
      
      if (data.success) {
        console.log("Setting Posts State:", data.allpost); // Debug
        setPosts(data.allpost);
        console.log(posts);
        
      }
      
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getAllpost();
  }, []);

  // Debugging: Check the posts state after rendering
  console.log("Posts State:", posts);

  return (
    <div className='min-h-screen m-0 p-0'>
      {posts && posts.map((post, index) => (
        <PostCard key={index} id={post._id} isUser={localStorage.getItem('userId')===post.user} title={post.title} description={post.description} image={post.image} username={post.user?.username || "Unknown"} time={post.createdAt} />
      ))}
    </div>
  );
};

export default Posts;
