import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <ProductGrid />
        </div>
      </main>
      
      <footer className="border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-800">Home</a>
              <a href="#" className="hover:text-green-800">Location</a>
              <a href="#" className="hover:text-green-800">Returns</a>
              <a href="#" className="hover:text-green-800">Careers</a>
              <a href="#" className="hover:text-green-800">Mobile App</a>
              <a href="#" className="hover:text-green-800">Help</a>
              <a href="#" className="hover:text-green-800">Settings</a>
            </div>
            <p>By using this website, you agree to check out the Source Code</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;