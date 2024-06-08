import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    });
    const {setIsLoggedIn}=useAuth();

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        
        setFormData({
            ...formData,
         [name]:value
        })
       
    }

    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        
         const response=await fetch('http://127.0.0.1:7000/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(formData)
         });
         const data=await response.json();
         const token=data.token;
         localStorage.setItem('token',token);
         setIsLoggedIn(true);
        //  dispatch(fetchProducts());
         navigate('/');
    }

  return (
    <div>
      <div className="font-bold shadow hover:shadow-md hover:bg-red-200 text-2xl border-2 text-center w-28  border-red-200 rounded bg-red-100 mx-auto mb-10 mt-6 h-8">
              <Link to="/">CartEase</Link>
            </div>
    <div className='w-1/3 mx-auto border-2 shadow'>
    <form className='mx-2' onSubmit={handleFormSubmit}>         
      
        <div>
      <label className='block text-gray-500 text-lg font-medium'>username: </label>
      <input
        type='text'
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className=' w-full border-2 border-red-100  rounded-md p-2 mt-1  '
        required
      >
      </input>
      </div>
      
      <div>
      <label className='block text-gray-500 text-lg font-medium' >email: </label>
      <input
        type='email'
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className='w-full border-2 border-red-100   rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      <div>
      <label className='block text-gray-500 text-lg font-medium' >password: </label>
      <input
        type='password'
        name="password"
        autoComplete='current-password'
        value={formData.password}
        onChange={handleInputChange}
        className='w-full border-2 border-red-100   rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      <div className='my-5 text-center'>
        <button className='bg-slate-100 border-2 border-red-100 hover:bg-slate-200 focus:bg-slate-300 w-28 text-xl font-medium' type="submit">Login</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Login
