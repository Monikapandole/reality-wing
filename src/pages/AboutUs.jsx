import React from 'react';
import icon1 from '../assets/asset1.jpg';
import icon2 from "../assets/asset2.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20 px-6"
        style={{
          backgroundImage: `url(${icon1})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center bg-black/40 p-10 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Find Your Next Home with Ease</h1>
          <p className="mt-4 text-lg md:text-xl">We're on a mission to make home rentals simple, fast, and transparent.</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          We are a modern rental platform that helps people find homes without the hassle. Whether you're a tenant looking for the perfect home or a landlord wanting reliable renters, we make the process smooth and commission-free.
        </p>
      </section>

      {/* Value Propositions */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src={icon2} alt="No Broker" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Middlemen</h3>
              <p>Connect directly with property owners and tenants. No hidden charges, no brokerage.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src={icon3} alt="Verified Listings" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p>All properties go through rigorous verification to ensure safety and quality.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src={icon2} alt="Support" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>We're here for you — whether you're searching, renting, or need help moving in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src={icon2} alt="John" className="rounded-full w-28 h-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={icon3} alt="Sara" className="rounded-full w-28 h-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Sara Lee</h3>
            <p className="text-gray-500">Head of Operations</p>
          </div>
          <div>
            <img src={icon4} alt="Mike" className="rounded-full w-28 h-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Mike Smith</h3>
            <p className="text-gray-500">Lead Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
