export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  price?: number;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Sculpture Techniques',
    category: 'Art Books and Educational Materials',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '2',
    title: 'Art History Books',
    category: 'Art Books and Educational Materials',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '3',
    title: 'Pastels and Chalks',
    category: 'Art Books and Educational Materials',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '4',
    title: 'Illustration Basics',
    category: 'Art Books and Educational Materials',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '5',
    title: 'DIY Art Projects',
    category: 'Art Books and Educational Materials',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '6',
    title: 'Canvas Rolls',
    category: 'Canvas and Surfaces',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '7',
    title: 'Stretched Canvas',
    category: 'Canvas and Surfaces',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '8',
    title: 'Drawing Paper',
    category: 'Canvas and Surfaces',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '9',
    title: 'Pottery Clay',
    category: 'Ceramics and Pottery',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '10',
    title: 'Glazing Kit',
    category: 'Ceramics and Pottery',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '11',
    title: 'Digital Drawing Tablet',
    category: 'Digital Art Supplies',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '12',
    title: 'Stylus Pen',
    category: 'Digital Art Supplies',
    image: 'https://images.unsplash.com/photo-1625873673832-b4e842bd8b08?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '13',
    title: 'Graphite Pencil Set',
    category: 'Drawing and Sketching',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '14',
    title: 'Charcoal Sticks',
    category: 'Drawing and Sketching',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '15',
    title: 'Calligraphy Set',
    category: 'Ink and Calligraphy',
    image: 'https://images.unsplash.com/photo-1589203832113-5d0e8e0a6c6d?auto=format&fit=crop&w=300&h=300'
  }
];