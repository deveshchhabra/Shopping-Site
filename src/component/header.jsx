import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../utilis/authSlice';
import { clearCart } from '../utilis/cartSlice'; // ✅ Import clearCart
import './header.css';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCart());         // ✅ Clear cart from Redux & localStorage
    dispatch(logout());            // ✅ Clear auth token from Redux & localStorage
    navigate('/login');            // ✅ Redirect to login
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-title text-2xl font-bold">
          <Link to="/">Home</Link>
        </div>
        <div className="header-links flex gap-4 items-center">
          <Link to="/cart">Cart ({cartCount})</Link>
          {token ? (
            <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
