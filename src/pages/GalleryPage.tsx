"use client"
import React, { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import Demo_work from "../components/sub_Components/Demo_work";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryPageProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  mobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
  navigateToPage?: (page: string) => void;
  currentPage?: string;
}


const Gallery: React.FC<GalleryPageProps>= (props) => {
    const {
    darkMode,
    toggleDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    navigateToPage,
    currentPage,
  } = useAppContext();

   const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdOHvRABUzIdoDKajmcsVLqWOP-UvAvvcNA&usqp=CAU",
      title: "Priya & Bipul - Wedding",
      featured: true,
    },
    {
      src: "https://i.pinimg.com/564x/2e/8c/20/2e8c2087de2f76813c525a563cc1b651.jpg",
      title: "Amit & Riya",
    },
    {
      src: "https://i.pinimg.com/736x/b2/40/68/b240681bca35011a350c84351c635a5a.jpg",
      title: "Rahul & Sneha",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97sysfwyHAERV_-ZbFFLzsoXeGxh8WiYvdZTaFUjNTv1B7CRGwGXTDDc&s=10",
      title: "Corporate Event",
    },
    {
      src: "https://i.pinimg.com/564x/2e/8c/20/2e8c2087de2f76813c525a563cc1b651.jpg",
      title: "Amit & Riya",
    },
    {
      src: "https://i.pinimg.com/736x/b2/40/68/b240681bca35011a350c84351c635a5a.jpg",
      title: "Rahul & Sneha",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97sysfwyHAERV_-ZbFFLzsoXeGxh8WiYvdZTaFUjNTv1B7CRGwGXTDDc&s=10",
      title: "Corporate Event",
    },
    {
      src: "https://i.pinimg.com/564x/2e/8c/20/2e8c2087de2f76813c525a563cc1b651.jpg",
      title: "Amit & Riya",
    },
    {
      src: "https://i.pinimg.com/736x/b2/40/68/b240681bca35011a350c84351c635a5a.jpg",
      title: "Rahul & Sneha",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97sysfwyHAERV_-ZbFFLzsoXeGxh8WiYvdZTaFUjNTv1B7CRGwGXTDDc&s=10",
      title: "Corporate Event",
    },
    {
      src: "https://i.pinimg.com/564x/2e/8c/20/2e8c2087de2f76813c525a563cc1b651.jpg",
      title: "Amit & Riya",
    },
    {
      src: "https://i.pinimg.com/736x/b2/40/68/b240681bca35011a350c84351c635a5a.jpg",
      title: "Rahul & Sneha",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97sysfwyHAERV_-ZbFFLzsoXeGxh8WiYvdZTaFUjNTv1B7CRGwGXTDDc&s=10",
      title: "Corporate Event",
    },
  ];

  const featured = images.find((img) => img.featured);
  const others = images.filter((img) => !img.featured);

  const [showFull, setShowFull] = useState(false);
const weddingStory = `
Priya and Bipul’s wedding in the serene village of Chopra was a heartwarming celebration that beautifully wove together tradition, love, and togetherness. Nestled amidst lush green fields and the rustic charm of village life, the air was filled with excitement as the day began with age-old rituals, soulful songs, and blessings from elders that brought not just families but the entire community together. Neighbors joined hands with relatives, transforming the event into a grand festival of love and unity.

Priya looked radiant in her bridal attire, her smile glowing brighter than the morning sun, while Bipul’s eyes reflected pure joy and gratitude as he awaited the sacred vows. Every ritual, from the symbolic ceremonies to the quiet moments of prayer, carried deep cultural significance, creating a rich tapestry of emotion, laughter, and heartfelt connections. Children ran around with carefree joy, elders shared stories of old traditions, and friends added a spark of fun and energy to every corner of the wedding.

As evening descended, the celebrations only grew more magical. The village came alive with music and dance, echoing through the fields, while feasts of traditional delicacies delighted everyone present. Lanterns floated into the starry sky, casting a soft golden glow that seemed to bless the union from above. The sound of drums, laughter, and joyous cheers created a memory that will linger forever.

What made Priya and Bipul’s wedding truly unforgettable was its simplicity and authenticity. There were no grand decorations or elaborate displays, but instead, a genuine celebration of love rooted in culture, family bonds, and timeless traditions. It was a wedding where every smile told a story, every ritual carried meaning, and every moment became a chapter in their lifelong journey together. This union wasn’t just about two individuals, but a reminder of the beauty of community, heritage, and the timeless power of love.
`;


  return (
    <section id="gallery" className="pt-16 bg-gray-50 dark:bg-gray-900">
           <Header
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          navigateToPage={navigateToPage}
          currentPage={currentPage}
        />
     
          {/* heero section */}
          <div
            style={{
              backgroundImage:
                "url('/images/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 py-16"
          >
            {/* Dark center overlay */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_40%,white_100%)]"></div> */}

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    <span className="text-white">Our Beautiful Memories</span>
  </h1>
  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
    Cherished Moments, Captured Forever
  </h2>
  <p className="text-xl text-gray-200 max-w-3xl mx-auto">
    Explore our gallery filled with weddings, celebrations, and special events.  
    Every picture tells a story of love, joy, and timeless memories.
  </p>
</div>

            </div>
          </div>

      <div className="container mx-auto px-6 pt-4 lg:px-12">
      
<div className="my-6 max-w-3xl mx-auto text-center">
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
    Reliving Memories, Frame by Frame
  </h3>
  <p className="text-gray-600 dark:text-gray-300 text-base">
    Each photo tells a story — of love, laughter, and timeless moments.
    From intimate weddings to grand celebrations, our gallery is a window
    into memories that will be cherished forever.
  </p>
</div>



        {/* Featured Section */}
        {featured && (
    <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-center">
      {/* Big Image Left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={featured.src}
          alt={featured.title}
          className="w-full/2 h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* About Right */}
      <div className="w-full md:w-1/2 rounded-2xl md:pl-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          {featured.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {/* Show truncated text on mobile */}
          <span className="md:hidden">
            {showFull ? weddingStory : weddingStory.slice(0, 150) + "..."}
          </span>

          {/* Full text always on larger screens */}
          <span className="hidden md:inline">{weddingStory}</span>
        </p>

        {/* "More" button for mobile */}
        <div className="mt-3 md:hidden">
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-blue-600 font-medium hover:underline"
          >
            {showFull ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
        )}

        {/* Other Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {others.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[3/4] w-full max-h-[300px]">
                {" "}
                {/* portrait ratio */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-1 flex justify-center">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Demo_work/>
      <Footer/>
    </section>
  );
};

export default Gallery;
