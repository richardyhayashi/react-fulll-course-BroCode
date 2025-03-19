import React from 'react';
import profilePic from '../assets/profile.png';

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt="profile picture" />
      <h2 className='card-title'>Richard</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus quam repudiandae praesentium. Veritatis error reiciendis libero perspiciatis cumque blanditiis, totam ut dignissimos corporis enim omnis, provident, a illum similique.</p>
   </div>
  );
};

export default Card;