import React from 'react'
import './header.css'
import {Avatar} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useStateValue } from './StateProvider'
function Header() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="header ">
        <div className="header_left"></div>
         <img src="" alt="" />
         <div className="header_input">
        <SearchIcon/>
     <input type="text" placeholder="Search Facebook"/>
     
     </div> 
 

     <div className="header_middle">
        <div className="header_option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option header_option_active">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StoreIcon  fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        
     
     </div>




     
    <div className="header_right">
       <div className="header_info">
         <Avatar src={user.photoURL}/>
         <h4>{user.displayName}</h4>
       </div>
       <IconButton>
       <AddIcon/>
       </IconButton>

        <IconButton>
       <ForumIcon/>
       </IconButton>

        <IconButton>
       <NotificationIcon/>
       </IconButton>

         <IconButton>
       <ExpandMoreIcon/>
       </IconButton>
    
    
    
    
    
    
    </div>
    
    </div>
  )
}

export default Header