import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import {Box} from  '@mui/material'
import IconButton from  '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





export default function PostCard({title,description,image,username,time,isUser,id}) {
 let Navigate = useNavigate()
  const deletepost=async()=>{
    try{
    const {data} = await axios.delete(`http://localhost:8080/post/deletepost/${id}`)
    if(data.success){
      alert('Post Deleted Successfully')
    } 
    Navigate('/myposts')
    
    }catch(error){
      console.log(error);
      
    }

  }
  
const handledit=()=>{
   Navigate(`/update/${id}`)
  }



  return (
    <Card sx={{ width:500,boxShadow:'10px 10px 20px 10px gray',mx:'auto',mt:4,borderRadius:2}}>
       <Box display={'flex'} justifyContent={'space-between'}>
      <CardHeader  avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
         title={username}
         subheader={time}
      />
     { isUser && 
      <Box sx={{mt:2}}>
      <IconButton sx={{mx:'8'}} onClick={handledit}>
          <EditIcon/>
        </IconButton>
        <IconButton onClick={deletepost}>
         <DeleteIcon/>
        </IconButton>
        </Box>    
        }   
      </Box>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography>
          Title:{title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
          Description : {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
