export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Special' | 'Breakfast' | 'Launch' | 'Dinner' | 'Sneaks';
  badge?: string;
}

export interface ExclusiveDish {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  category?: string;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    behance?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  company?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  summary: string;
  readTime?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  persons: string;
  date: string;
  time: string;
  notes: string;
}
