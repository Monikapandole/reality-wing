import React from 'react';
import icon1 from '../assets/asset1.jpg';
import icon2 from "../assets/asset2.jpg";
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
        <div className="px-8 py-6 rounded-xl  backdrop-blur-sm text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            About <span className="text-[#D32F2F]">Us</span>
          </h1>
        </div>
      </section>
      <section className="py-24 px-6 bg-white">
        <div className="text-left flex flex-col lg:flex-row items-start gap-12">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Reality Wing: <span className="text-[#D32F2F]">Our Story</span>
            </h2>
            <p className="font-semibold text-lg mb-4">
              Born from the frustrations of homestay owners, Reality Wing is building a future where managing your homestay is easy and rewarding.
            </p>
            <p className="text-gray-700 mb-6">
              Tired of struggling with low profits and high stress in homestay management? So were we. That's why we created Reality Wing.
            </p>
            <ul className="space-y-4 text-left">
              <li>
                <strong>• Custom Solutions for Your Needs:</strong> No more one-size-fits-all. Choose the service level that suits your lifestyle.
              </li>
              <li>
                <strong>• Guest Satisfaction First:</strong> Your success is our reward. We prioritize guest happiness.
              </li>
              <li>
                <strong>• Technology and Automation:</strong> Our advanced tools take care of the hard work, letting you focus on creating memorable experiences.
              </li>
              <li>
                <strong>• Join a Supportive Community:</strong> Connect with passionate owners who share your values and support your journey to effortless vacation rentals.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={icon1}
              alt="Reality Wing Team"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

        </div>
      </section>

      <section className="py-24 px-6 text-left">
        {/* Reimagining Travel Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <img
            src={icon3}
            alt="Travel"
            className="max-h-[400px] w-auto rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Reimagining Travel, One <span className="text-orange-600">Stay at a Time</span>
            </h2>
            <p className="text-gray-700 mb-4">
              At HomeyHuts, we believe travel should be enriching and transformative.
              We want people to connect with new cultures, embrace unique experiences, and
              feel at home wherever they go.
            </p>
            <p className="text-gray-700">
              Born from shared frustrations of travelers and property owners, HomeyHuts
              is a technology-driven platform designed for change. Our team of passionate
              technologists is revolutionizing the way people travel in India and beyond.
            </p>
          </div>
        </div>

        {/* For Hosts Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              For <span className="text-orange-600">Hosts</span>
            </h2>
            <p className="text-gray-800 font-semibold mb-4">
              We understand the challenges of managing homestays and vacation rentals. HomeyHuts offers solutions tailored to your needs:
            </p>
            <ul className="text-gray-700 space-y-3">
              <li>
                <strong>Flexible Services:</strong> Choose from various levels of support, from marketing
                your homestay and managing guest communications to full-service property maintenance.
              </li>
              <li>
                <strong>Advanced Technology:</strong> Our platform uses data and AI to optimize pricing,
                streamline bookings, and provide actionable insights.
              </li>
            </ul>
          </div>
          <div className="h-full flex justify-center items-center">
            <img
              src={icon4}
              alt="Hosts"
              className="max-h-[400px] w-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* Value Propositions */}
      <section className="bg-[#fef4f1] py-16 px-4 md:px-20 text-center text-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          More Than Just a Platform – A Community
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Reality Wing is more than a booking platform. We are a community of passionate travelers and owners, united by a love for experiences and a desire to make a positive impact.
        </p>

        <div className="space-y-4 text-left max-w-4xl mx-auto text-lg">
          <div className="flex items-start gap-2">
            <span className="text-red-600 text-xl mt-1">✅</span>
            <p>
              <strong>Empowering Local Communities:</strong> We partner with local businesses and support sustainable practices to benefit the communities we operate in.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 text-xl mt-1">✅</span>
            <p>
              <strong>Promoting Cultural Exchange:</strong> We encourage travelers to connect with locals and experience the true essence of each destination.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 text-xl mt-1">✅</span>
            <p>
              <strong>Building a Responsible Travel Community:</strong> We promote responsible tourism practices, environmental awareness, and cultural sensitivity.
            </p>
          </div>
        </div>

        <p className="mt-10 text-lg">
          Whether you're an owner looking to unlock your property’s full potential or a traveler seeking unforgettable experiences with unparalleled security, <br /> Reality Wing welcomes you.
        </p>

        <p className="mt-10 font-semibold text-xl text-gray-900">
          Together, let's create a world where travel is more than just a journey. Let it be a transformative experience <br />
          that enriches our lives and connects us to the world around us.
        </p>

        <p className="mt-6 text-red-600 font-bold text-lg">The Reality Wing Team</p>
      </section>


      {/* Team Preview */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
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
