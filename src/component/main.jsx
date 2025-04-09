import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './main.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.data.image} className='card-image' alt={props.data.title} />
      <div className='card-title'>{props.data.title}</div>
      <div className='card-price'>{props.data.price}</div>

      <div className='card-rating'>Rating:
        {"★".repeat(Math.floor(props.data.rating.rate)) + "☆".repeat(5 - Math.floor(props.data.rating.rate))}
        ({props.data.rating.rate})
      </div>
      <button className='btn bg-green-100 m-2'>Add+</button>

    </div>
  )
}

const main = () => {
  const [Data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res?.data);
    }
    fetchData();
  }, [])
  return (
    <div className='main-grid'>
      {Data.map((data) => (
        <Card key={data.id} data={data} />
      ))}

    </div>
  )
}

export default main