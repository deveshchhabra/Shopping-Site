import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'; // or card-specific styles

const Card = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`} className='card block no-underline text-black hover:shadow-lg transition'>
      <img src={data.image} className='card-image' alt={data.title} />
      <div className='card-title'>{data.title}</div>
      <div className='card-price font-bold text-green-700'>${data.price}</div>
      <div className='card-rating text-sm text-yellow-600'>
        {"★".repeat(Math.floor(data.rating.rate)) + "☆".repeat(5 - Math.floor(data.rating.rate))}
        <span className='text-gray-500'> ({data.rating.count})</span>
      </div>
      <div className='mt-2'>
        <button className='btn  text-pink-600 m-2 rounded-lg'>Add +</button>
      </div>
    </Link>
  );
};

export default Card;
