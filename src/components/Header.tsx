import React from 'react';
import { Search, ShoppingCart, Clock, LogIn, Heart, Menu, Bell, ChevronDown } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* Top banner */}
      <div className="bg-green-800 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          Free shipping on orders over $75 | Get 10% off your first order
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-800 flex items-center gap-2">
            <Menu className="w-6 h-6" />
            NextMaster
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for art supplies, brands, and more..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <button className="absolute right-3 top-2 px-3 py-1 bg-green-800 text-white rounded-md text-sm hover:bg-green-900">
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center text-gray-700 hover:text-green-800 relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
              <span className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 text-sm">
                New products in stock!
              </span>
            </button>

            <button className="flex items-center text-gray-700 hover:text-green-800">
              <Heart className="w-5 h-5" />
            </button>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-800 gap-1">
                <LogIn className="w-5 h-5" />
                <span>Account</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              </div>
            </div>

            <button className="flex items-center text-gray-700 hover:text-green-800 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-green-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            <button className="flex items-center text-green-800 font-semibold hover:text-green-900">
              <Clock className="w-5 h-5 mr-1" />
              Orders
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-3">
            <Link href="/new" className="text-sm font-medium text-gray-700 hover:text-green-800">New Arrivals</Link>
            <Link href="/deals" className="text-sm font-medium text-gray-700 hover:text-green-800">Deals</Link>
            <Link href="/brands" className="text-sm font-medium text-gray-700 hover:text-green-800">Brands</Link>
            <Link href="/clearance" className="text-sm font-medium text-gray-700 hover:text-green-800">Clearance</Link>
            <Link href="/bulk" className="text-sm font-medium text-gray-700 hover:text-green-800">Bulk Orders</Link>
            <Link href="/gift-cards" className="text-sm font-medium text-gray-700 hover:text-green-800">Gift Cards</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}