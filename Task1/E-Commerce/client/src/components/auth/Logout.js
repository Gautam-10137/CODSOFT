import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
    const { setIsLoggedIn } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false); 
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className=" text-end mt-4">
            <button 
                className="bg-red-500  hover:bg-red-600 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
