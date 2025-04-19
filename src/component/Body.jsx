import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Body.css';

const Body = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res?.data);
    };
    fetchData();
  }, []);

  return (
    <div className='main-grid dark:bg-black '>
      {Data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Body;
