import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'; // or card-specific styles

const Card = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`} className='dark:bg-black card  items-center  block no-underline text-black hover:shadow-lg transition'>
      <div className='dark:bg-black'>
      <img src={data.image} className='dark:bg-black card-image ' alt={data.title} />
      <div className='card-title'>{data.title}</div>
      <div className='card-price font-bold text-green-700 dark:bg-black dark:text-white'>${data.price}</div>
      <div className='card-rating text-sm text-yellow-600'>
        {"★".repeat(Math.floor(data.rating.rate)) + "☆".repeat(5 - Math.floor(data.rating.rate))}
        <span className='text-gray-500'> ({data.rating.count})</span>
      </div>
      <div className='mt-2'>
        <button className='btn  text-pink-600 m-2 rounded-lg'>Add +</button>
      </div>
      </div>
    </Link>
  );
};

export default Card;
