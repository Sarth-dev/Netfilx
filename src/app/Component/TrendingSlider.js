'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TrendingModal from './TrendingModal'; // Adjust path as needed

const trendingShows = [
  {
    id: 1,
    title: 'Squid Game',
    image: './images/shows/squidd.webp',
    description : "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    
  },
  {
    id: 2,
    title: 'The Great Indian Kapil Show',
    image: './images/shows/kapilsharma.webp',
    description:"Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast.",
  },
  {
    id: 3,
    title: 'Raid 2',
    image: './images/shows/raid2.webp',
    description:"Transferred to a small town in Rajasthan, an honest income tax officer pursues a beloved politician whose public good deeds conceal rampant corruption.",
  },
  {
    id: 4,
    title: 'Jaat',
    image: './images/shows/jaat.webp',
    description: "A mysterious stranger journeys to a remote town controlled by a callous crime lord, with one violent mission — restoring justice to its people.",
  },
  {
    id: 5,
    title: 'Pushpa 2',
    image: './images/shows/pushpa.webp',
    description : "Raised by a criminal father, Paari leaves behind his adoptive family to build a quiet life with his love, Rukmini. But his violent past won't let him go.",
  },
  {
    id: 6,
    title: 'HIT',
    image: './images/shows/hit.webp',
    description: "The Homicide Intervention Team (HIT) sends ruthless police officer Arjun Sarkaar to find a group of killers and stop their grisly murder spree.",
  },
  {
    id: 7,
    title: 'Rana Naidu',
    image: './images/shows/rananaidu.webp',
    description:"Rana Naidu is the go-to problem solver for the rich and famous. But when his father is released from jail, the one mess he can't handle may be his own.",
  },
  {
    id: 8,
    title: 'Chhava',
    image: './images/shows/chhava.webp',
    description:"After the death of his father, warrior-king Sambhaji Maharaj battles Mughal forces led by Aurangzeb to keep the Maratha Empire alive.",
  },
  {
    id: 9,
    title: 'The Royals',
    image: './images/shows/royals.webp',
    description :"When charming Prince Aviraaj meets Sophia, a self-made girl boss, the worlds of royalty and startups collide in a whirlwind of romance and ambition.",
  },
  {
    id: 10,
    title: 'Sikandar',
    image: './images/shows/sikandar.webp',
    description : "A tragic accident pushes the powerful Sikandar to protect the less fortunate by standing up to corruption and greed — using any means necessary.",
  },
];

export default function TrendingSlider() {
  const [showModal, setShowModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleClick = (show) => {
    setSelectedShow(show);
    setShowModal(true);
  };

  return (
    <>
      <TrendingModal show={showModal} onClose={() => setShowModal(false)} showData={selectedShow} />

      <div className="bg-black text-white px-12 py-10">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="relative"
        >
          {trendingShows.map((show, index) => (
            <SwiperSlide key={show.id}>
              <div
                className="relative group transition-transform duration-300 hover:scale-105 w-[160px] h-[240px] md:w-[180px] md:h-[270px] cursor-pointer"
                onClick={() => handleClick(show)}
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <span className="absolute -left-3 top-40 text-8xl font-extrabold text-white/90 drop-shadow-xl z-10">
                  {index + 1}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
