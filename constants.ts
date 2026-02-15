
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All', nameAr: 'الكل', icon: '🌿' },
  { id: 'veg', name: 'Vegetables', nameAr: 'خضروات', icon: '🥬' },
  { id: 'fruits', name: 'Fruits', nameAr: 'فواكه', icon: '🍎' },
  { id: 'meat', name: 'Meat', nameAr: 'لحوم', icon: '🥩' },
  { id: 'dairy', name: 'Dairy', nameAr: 'ألبان', icon: '🧀' },
  { id: 'bakery', name: 'Bakery', nameAr: 'مخبوزات', icon: '🥖' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Fresh Green Bean',
    nameAr: 'فاصوليا خضراء',
    description: 'Fresh organic green beans harvested daily from local farms. Rich in fiber and vitamins.',
    price: 25.00,
    unit: 'Kg',
    category: 'veg',
    image: 'https://images.unsplash.com/photo-1567101072382-14227ad42299?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviews: 185,
    discount: 35
  },
  {
    id: '2',
    name: 'Beef Boneless',
    nameAr: 'لحم بقري بدون عظم',
    description: 'Premium cut boneless beef, grass-fed and antibiotic-free. Perfect for stews or grilling.',
    price: 99.00,
    unit: 'Kg',
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviews: 240
  },
  {
    id: '3',
    name: 'Fresh Watermelon',
    nameAr: 'بطيخ طازج',
    description: 'Sweet and juicy seedless watermelon, naturally ripened under the sun.',
    price: 12.00,
    unit: 'Piece',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1587049633562-ad3025137525?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviews: 95
  },
  {
    id: '4',
    name: 'Chicken Breast',
    nameAr: 'صدور دجاج',
    description: 'Lean and tender chicken breasts, skinless and boneless. High in protein.',
    price: 45.00,
    unit: 'Kg',
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviews: 150
  }
];
