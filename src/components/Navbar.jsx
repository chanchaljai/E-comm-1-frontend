import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-2 px-6 sm:px-12 md:px-20">
        <div>MyBrand</div>
        <div className="flex items-center space-x-4">
          <a>
            <FaShoppingCart className="text-xl" />
          </a>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
