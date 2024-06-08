import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../auth/Logout'

const UserProfile = () => {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const getUserIdFromToken = (token) => {
            try {
                const decode = jwtDecode(token);
                return decode.id;
            } catch (error) {
                console.error('Error decoding token:' + error);
                return null;
            }
        };

        const fetchUser = async () => {
            const userId = getUserIdFromToken(token);

            const response = await axios.get(`http://127.0.0.1:7000/api/user/${userId}`, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            setUser(response.data);
        };

        const fetchOrders = async () => {
            const userId = getUserIdFromToken(token);
            const response = await axios.get(`http://127.0.0.1:7000/api/orders/${userId}`, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            setOrders(response.data);

        };
        fetchUser();
        fetchOrders();

    }, []);

    return (
        <div>
            <div className='border-4 border-slate-300 w-1/2 mx-auto my-10 '>
                <div className='text-center'><p><strong>username: </strong>{user.username}</p></div>
                <div className='text-center'><p><strong>email:  </strong>{user.email}</p></div>
                <Logout/>
                <div className=''>
                    <div className='text-xl  font-medium'>
                        <p className=' ml-4'> Order history :</p>
                    </div>
                    <div className='text-center  '>
                        {
                            orders.length > 0 ? orders.map((order, index) => (
                                <div key={index} className='bg-slate-100 w-1/2 mx-auto mb-2 p-1'>
                                    <strong>order : </strong>{index + 1}
                                    {order.items.map((item) => (
                                        <div key={item._id}>
                                            <Link to={`/product/${item.product._id}`}>
                                                <div className='bg-slate-200 mb-4 w-4/5 mx-auto flex'>
                                                    <div className='w-1/3 ml-2'>
                                                        <img src={item.product.imageUrl} className='h-28'></img>
                                                    </div>
                                                    <div className='w-2/3'>
                                                        <p>{item.product.name}</p>
                                                        <p><strong>price: </strong> {item.product.price}</p>
                                                        <p><strong>quantity: </strong>{item.quantity}</p>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )) : 'No Order Placed'
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
