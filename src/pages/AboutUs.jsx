import React from 'react';
import icon1 from '../assets/asset1.jpg';
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import Footer from '../components/Footer';
import aboutUsImage from "../assets/aboutUs-bg.webp";

function AboutUs() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 flex justify-center items-center"
        style={{
          backgroundImage: `url(${aboutUsImage})`,
        }}
      >
        <div className="px-8 py-6 rounded-xl backdrop-blur-sm text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-[#D32F2F]">Reality Wing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Your trusted partner for real estate solutions in Indore. Rent, buy, or sell – we make it smooth, transparent, and stress-free with 0% brokerage.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-600 italic">
            Mission: Connecting the right tenants with the right homes – with honesty, speed, and reliability.
          </p>
        </div>
      </section>

      {/* About Us Details Section */}
      {/* About Us Intro Section */}
      <section className="py-24 px-6 bg-white">
        <div className="text-left flex flex-col lg:flex-row items-start gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Who We Are – <span className="text-[#D32F2F]">Reality Wing</span>
            </h2>
            <p className="font-semibold text-lg mb-4">
              At Reality Wing, we're committed to redefining real estate in Indore. Whether you're renting, buying, or selling – we handle it all without the usual hassle.
            </p>
            <p className="text-gray-700 mb-4">
              Say goodbye to brokerage fees! Our model is built on trust and simplicity – offering property owners verified tenants with 0% brokerage.
            </p>
            <p className="text-gray-700">
              Our team focuses on personalized support, smart technology, and fast results – ensuring that every home finds the right match.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={icon1}
              alt="Reality Wing Team"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Reality Wing?</h2>
          <p className="text-gray-700 text-lg mb-12">
            Here’s what sets us apart in the Indore real estate space.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[#D32F2F]">Zero Brokerage</h4>
              <p className="text-gray-600">No hidden charges – our platform is truly cost-effective for property owners.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[#D32F2F]">Verified Tenants</h4>
              <p className="text-gray-600">We ensure tenant credibility through background checks and verification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[#D32F2F]">Quick Support</h4>
              <p className="text-gray-600">Our dedicated support ensures your queries and needs are handled promptly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl font-semibold mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="transition-all hover:scale-105">
            <img src={icon2} alt="John" className="rounded-full w-32 h-32 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">CEO & Co-Founder</p>
          </div>
          <div className="transition-all hover:scale-105">
            <img src={icon3} alt="Sara" className="rounded-full w-32 h-32 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Sara Lee</h3>
            <p className="text-gray-500">Head of Operations</p>
          </div>
          <div className="transition-all hover:scale-105">
            <img src={icon4} alt="Mike" className="rounded-full w-32 h-32 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Mike Smith</h3>
            <p className="text-gray-500">Lead Engineer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
