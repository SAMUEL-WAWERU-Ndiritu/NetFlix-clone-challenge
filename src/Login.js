import React from 'react'
import './Login.css' 
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './Reducer'

  
function Login() {
    const [{user},dispatch] = useStateValue();
  const signIn = () => {
      //sign in..
      auth.signInWithPopup(provider).then((result) =>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user,
          })
      }).catch((error) => alert(error.message))
  }
  return (
    <div className='login'>

      <div className='login_logo'>
          {/* face book logo img */}
          <img src="" alt="" />

          {/* facebook word image */}
          <img src="" alt=""/>

      </div>

      <Button type="submit" onClick={signIn}>Sign In</Button>


    </div>
  )
}

export default Login