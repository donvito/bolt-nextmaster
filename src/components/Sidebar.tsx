import React from 'react';
import { Link } from './Link';
import { categories } from '../data/categories';

export function Sidebar() {
  return (
    <aside className="w-64 pr-8">
      <h2 className="font-semibold mb-4">Choose a Category</h2>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.id}`}
                className="text-gray-700 hover:text-green-800 text-sm flex justify-between items-center group"
              >
                <span>{category.name}</span>
                <span className="text-gray-400 text-xs group-hover:text-green-700">
                  {category.count.toLocaleString()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}