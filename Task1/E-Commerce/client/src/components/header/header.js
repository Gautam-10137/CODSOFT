import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
const Header = () => {
  const [username,setUsername]=useState('');
    const [userId,setUserId]=useState(null);
    const {isLoggedIn}=useAuth();
    useEffect(()=>{
       const token=localStorage.getItem('token');
       const getUserIdFromToken = (token) => {
        try {
          // Decode the token payload
          const decoded = jwtDecode(token);
          // Extract and return the userId
           setUsername(decoded.username);
           setUserId(decoded.id);
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };  
      if(token){getUserIdFromToken(token)};
    },[]);
  return (
    <header>
        <nav  className="flex sm:flex-col md:flex-col md:flex-shrink flex-wrap w-full bg-gray-800 justify-between h-fit  ">
            <div className="font-bold text-2xl border-2  border-red-200 rounded  bg-red-100 ml-2  mt-1 h-8">
              <Link to="/">CartEase</Link>
            </div>
            <div className=' w-1/3'> 
             <ul className="flex flex-wrap sm:flex-col justify-evenly  h-fit rounded-sm text-2xl   text-center">
             <li className=' text-white  rounded  h-7 hover:bg-slate-50 hover:text-black hover:shadow-xl  font-medium mt-1'><Link to='/about'>About</Link></li>
             <li className=' text-white  hover:bg-slate-50 hover:text-black hover:shadow-md  rounded h-7 mt-1 font-medium '><Link to='/contact'>Contact</Link></li>
             </ul>
             </div>
             <div className='flex sm:flex-col md:flex-col flex-wrap space-x-8 mx-2'>
             <div className='bg-white border-2 border-red-100  w-fit text-lg h-fit mt-1 shadow-sm hover:shadow-md rounded'>
                <Link to="/cart"><button>Cart</button></Link>
             </div>
            <div className=" text-lg h-fit mt-1 sm:flex-col md:flex-col flex-wrap  ">
            {isLoggedIn?<div className='flex space-x-4 mx-4'>
                    <div  className='text-white'>
                        Hii,{username}
                    </div> 
                    <div>
                    <Link to={`/profile`}><FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem',color:'blue' }}/></Link>
                    </div>

                </div>:<div className='flex space-x-8 mx-2 sm:flex-col md:flex-col flex-wrap'>
                    <button className='border-2 border-red-100 rounded  bg-white'>
                        <Link to='/login' >Login</Link>
                    </button>
                        <button className='border-2 border-red-100 rounded bg-white '>
                            <Link to='/register'><span id='sign'>Sign up</span></Link>
                        </button>      
                </div>}
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
