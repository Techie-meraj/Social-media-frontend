import React, { useEffect } from 'react'
import { ImCompass2 } from "react-icons/im";
import { IoCart } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/MyContext';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from '../Context/Store';

const Navbar = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state=>state.isLogin)
  console.log(isLogin);
  
  let Navigate = useNavigate()
//  const {isLoggedIn,setisLoggedIn}=useAuth()


 const handlelogout=()=>{
   Navigate('/')
   dispatch(authActions.logout())
   alert('User logged-out Successfully')
  // setisLoggedIn(false);
  // localStorage.removeItem('islogin')
   localStorage.setItem('islogin',JSON.stringify(false))
   localStorage.removeItem('userId')

}



  return (<>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <Link to={'/'} tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
       <ImCompass2/>
      </Link>
    </div>
   <Link to={'/'} className="btn btn-ghost text-xl"><ImCompass2/></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
  {/* { isLoggedIn && <ul
        tabIndex={0}
        className="menu menu-horizontal space-x-4">
      <li><Link to={'/posts'}>Posts</Link></li>
      <li><Link to={'/myposts'}>My Posts</Link></li>
      </ul>
      } */}
       { isLogin && <ul
        tabIndex={0}
        className="menu menu-horizontal space-x-4">
      <li><Link to={'/posts'}>Posts</Link></li>
      <li><Link to={'/myposts'}>My Posts</Link></li>
      <li><Link to={'/createpost'}>Create-Post</Link></li>
      </ul>
      }
  </div>
  <div className="navbar-end">
    <button className="btn mx-2 text-2xl"><IoCart/></button>
    {/* {(!isLoggedIn) ? (<>
   <Link to={'/login'}><button className="btn mx-2">Login</button></Link>
   <Link to={'/register'}><button className="btn mx-2">Register</button></Link>
   </>) : (
   <button className="btn mx-2" onClick={handlelogout}>Logout</button>
    )} */}
    {(!isLogin) && (<>
   <Link to={'/login'}><button className="btn mx-2">Login</button></Link>
   <Link to={'/register'}><button className="btn mx-2">Register</button></Link>
   </>) 
   }
   {isLogin && <button className="btn mx-2" onClick={handlelogout}>Logout</button>
}

  </div>
</div>


  </>)
}

export default Navbar