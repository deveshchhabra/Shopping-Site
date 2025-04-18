

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 import { useDispatch } from 'react-redux';
import { addToCart } from '../utilis/cartSlice'; 
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fectData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setproduct(res?.data);
    }
    fectData();
  }, [id])
    const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  if (!product) return (
    <div className="flex flex-col items-center justify-center
       min-h-[100vh] sm:min-h-[30vh] md:min-h-[100vh] text-lg p-4 dark:bg-gray-900">
      <img
        src="https://i.gifer.com/ZZ5H.gif" // You can replace with any spinner or branded loading image
        alt="Loading..."
        className="w-24 h-24 mb-4"
      />
      <div className="text-gray-600">Loading product details...</div>
    </div>
  );
  return (
    <div className='max-w-6xl mx-autos p-6'>
      <div className='grid grid-cols-1 p-2 md:grid-cols-2 gap-8
      border rounded-2xl'>
        <div className='bg-gray-100  dark:bg-gray-900 sm:p-6 md:p-3 lg:p-6 flex   items-center justify-center'>
          <img src={product?.image}
            alt={product?.title}
            className='h-[18rem] md:h-[25rem] lg:h-[30rem] object-contain'
          />

        </div>
        <div className='p-1 flex flex-col justify-between'>
          <div>
            <h1 className='text-[0.8rem] md:text-xl lg:text-4xl font-semibold mb-4'>{product?.title}</h1>
            <p className="text-gray-600 mb-4 text-[0.6rem] md:text-[1rem] lg:text-[1rem]">{product?.description}</p>
            <div className="text-[0.8rem] md:text-xl lg:text-xl font-bold text-green-600 mb-4">

              ${product?.price}
            </div>
            <div className="text-sm text-yellow-600 mb-2">
              {"★".repeat(Math.floor(product.rating.rate)) +
                "☆".repeat(5 - Math.floor(product.rating.rate))}{" "}
              <span className="text-gray-500">({product.rating.count} ratings)</span>
            </div>
          </div>
          <button 
              onClick={handleAddToCart}

              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
>Add to Cart+</button>
          <div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails