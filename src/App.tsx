import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExclusiveItems } from './components/ExclusiveItems';
import { OurHistory } from './components/OurHistory';
import { VideoBanner } from './components/VideoBanner';
import { FoodMenu } from './components/FoodMenu';
import { Chefs } from './components/Chefs';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { VideoModal, DetailModal } from './components/Modals';
import { ExclusiveDish, MenuItem, BlogPost, Chef, ReservationData } from './types';
import { IMAGES } from './images';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ExclusiveDish | MenuItem | BlogPost | Chef | null>(null);
  const [modalType, setModalType] = useState<'dish' | 'menu' | 'blog' | 'chef' | null>(null);

  const scrollToReservation = () => {
    const elem = document.getElementById('reservation');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDish = (dish: ExclusiveDish) => {
    setSelectedItem(dish);
    setModalType('dish');
  };

  const handleSelectMenuItem = (item: MenuItem) => {
    setSelectedItem(item);
    setModalType('menu');
  };

  const handleSelectChef = (chef: Chef) => {
    setSelectedItem(chef);
    setModalType('chef');
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedItem(post);
    setModalType('blog');
  };

  const handleReservationSuccess = (data: ReservationData) => {
    console.log('Reservation confirmed:', data);
  };

  return (
    <div className="min-h-screen bg-white text-[#555555] selection:bg-[#ff6426] selection:text-white font-sans">
      {/* Home Area with Atmospheric Background Image */}
      <div id="home" className="relative overflow-hidden bg-[#fdfbf8]">
        {/* Background Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={IMAGES.backgrounds.home}
            alt="Savora restaurant dining atmosphere background"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 opacity-80"
            referrerPolicy="no-referrer"
          />
          {/* Lighter, balanced gradient overlay so the dining ambiance is clearly visible while text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf8]/85 via-[#fdfbf8]/45 to-transparent" />
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* 1. Header & Navigation */}
        <Navbar onBookTableClick={scrollToReservation} />

        {/* 2. Hero Section */}
        <Hero
          onReservationClick={scrollToReservation}
          onWatchStoryClick={() => setIsVideoModalOpen(true)}
        />
      </div>

      {/* 3. Popular Dishes: Our Exclusive Items */}
      <ExclusiveItems onSelectDish={handleSelectDish} />

      {/* 4. Our History */}
      <OurHistory onReadMoreHistory={() => setIsVideoModalOpen(true)} />

      {/* 5. Video Banner: Expect The Best */}
      <VideoBanner onPlayClick={() => setIsVideoModalOpen(true)} />

      {/* 6. Popular Menu: Delicious Food Menu */}
      <FoodMenu onSelectItem={handleSelectMenuItem} />

      {/* 7. Team Member: Our Experience Chefs */}
      <Chefs onSelectChef={handleSelectChef} />

      {/* 8. Reservation: Book A Table */}
      <ReservationSection onReservationSuccess={handleReservationSuccess} />

      {/* 9. Testimonials: Customers Feedback */}
      <TestimonialsSection />

      {/* 10. Recent News: Latest From Blog */}
      <BlogSection onSelectPost={handleSelectPost} />

      {/* 11. Footer & Sub-footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <DetailModal
        item={selectedItem}
        type={modalType}
        onClose={() => {
          setSelectedItem(null);
          setModalType(null);
        }}
        onBookTable={scrollToReservation}
      />
    </div>
  );
}
