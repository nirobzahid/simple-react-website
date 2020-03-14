import React, { useEffect, useState } from 'react';
import './Users.css';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';

function Users () {
  const [users, setUsers] = useState([]);
  
const [cart, setCart] = useState([]);

  const addFriend = (user) => {
    console.log('added',user);
    const newCart = [...cart, user];
    setCart(newCart);
  }

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
    <h2>User information</h2>
    <div className='container'>
      
      
      <div className='user'>
      
      
      {
      users.map(userName => <Details 
        addFriend = {addFriend}
        users={userName}></Details>)
      }
      </div>
      <div className='cart'>
        <Cart cart={cart}></Cart>
      </div>
      </div>
    </div>
  );
};

export default Users;