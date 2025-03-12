import React from "react";
import Testimonials from "../components/testimonial";
import ScrollingCarousel from "../components/colleges";
import StatsSection from "../components/stats";
import Footer from "../components/footer";
import Announcements from "../components/annoncement";
import Navbar from "../components/Navbar"


import Tabs from "../components/tab";
import VirtualLabs from "../components/VirtualLabs";
import ImageCarousel from "../components/ImageCarasouel";

const Home = () => {
  const images = [
    { src: "/3.jpg", alt: "Slider" },
    { src: "/6.jpg", alt: "Slider" },
    { src: "/7.jpg", alt: "Slider" },
  ];

  return (
    <>
    
      <Navbar />
      <div className="mt-20 sm:mt-29 flex justify-center m-5">
        <ImageCarousel
          images={images}
          autoPlay={true}
          interval={3000}
          className="w-full"
        />
      </div>
      <Tabs />
      <div id="virtuallabs" className="pt-6 sm:pt-15">
        <VirtualLabs />
      </div>

      {/* Video & Announcements Section */}
      <div className="flex flex-col md:flex-row justify-between p-8 gap-6">
        <div className="w-full md:w-2/3">
          <div
            className="relative w-full h-0"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/FT2e3UvKteM?si=uw2lpW7HSTXKff_y&modestbranding=1&rel=0&showinfo=0&controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
        <Announcements />
      </div>
      <ScrollingCarousel />
      <Testimonials />
      <StatsSection />
      <Footer />
    </>
  );
};

export default Home;
