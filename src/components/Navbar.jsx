import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopX
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-2xl">
          <div className="flex w-full border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 outline-none"
            />
            <button className="bg-blue-600 px-4 text-white">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">

          <select className="border px-2 py-1 rounded">
            <option>Bihar</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>

          <Link to="/wishlist">
            
          </Link>
            <FaHeart/>
          <Link to="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;