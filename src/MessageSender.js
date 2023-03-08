import React, {useState} from 'react'
import {Avatar} from '@material-ui/core';
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import db from ' ./firebase'
import firebase from 'firebase'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
function MessageSender() {
  const [{user},dispatch] = useStateValue()
    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl]= useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setImageUrl("");
        setInput("");

        db.collection('post').add({
          message:input,
          timestamp:firebase.firestore.FieldValue.
          serverTimestamp(),
          profilePic:user.photoURL,
          username:user.displayName,
          image:imageUrl
        })
    }
  return (
    <div className="messageSender">
    <div className="messageSender_top">
      <Avatar src={user.photoURL}/>
      <form>
      <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)} className="messageSender_input" placeholder={`What is on your mind ,${user.displayName}`}/>
      <input type="text"  value= {imageUrl}  onChange= {(e)=>{setImageUrl(e.target.value)}} placeholder='image URL(Optional)'/>

      <button onClick={handleSubmit} type="submit">Hidden Submit</button>
      
      </form>
    
    </div>



    <div className="messageSender_bottom">
       <div className="messageSender_option">
         <VideoCameraFrontIcon style={{color:'red'}}/>
         <h3>Live Video</h3>
       </div>
       <div className="messageSender_option">
         <PhotoLibraryIcon  style={{color:'green'}}/>
         <h3>Photo/Video</h3>
       </div>
       <div className="messageSender_option">
         <InsertEmoticonIcon style={{color:'orange'}}/>
         <h3>Feeling Activity</h3>
       </div>
    
    </div>
    
    
    </div>
  )
}

export default MessageSender