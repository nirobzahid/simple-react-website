import React from 'react';
import './Details.css';




const Details = (props) => {

  
  //console.log(props);
  const {id, name, email,phone,website,address} = props.users;
  return (
    <div>
    <div className='usersBox'>
         <div className='userImages'>
      
      <img src='././../../Components/Images/job size.jpg'></img>
         </div>
        <div className='userInformation'>
      
          <h4 className='name'>name: {name}</h4>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <p>website: {website}</p>
          <p>city: {address.city}</p>
          <p>salary: $<span className='taka'> 1000</span></p>
          <button className='btn'
          onClick={props.addFriend}
          >Income</button>
          <div>
          
          <h4 className='name'>name: {name}</h4>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <p>website: {website}</p>
          <p>city: {address.city}</p>
          <p>salary: $<span className='taka'> 1000 </span></p>
          <button className='btn'
          onClick={() => props.addFriend(props.product)}
          >Income</button>
          </div>
        </div>
        
    </div>
  
    </div>
  );
};

export default Details;