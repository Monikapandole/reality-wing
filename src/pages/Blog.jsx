import React from 'react';
import Footer from '../components/Footer';
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
function Blog() {
    return (
        <div className="bg-gray-50 pb- font-inter ">
            <div className="">

                <section
                    className="relative bg-cover bg-center py-24 flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${icon1})`,
                    }}
                >
                    <div className="px-8 prounded-xl  backdrop-blur-sm text-center">
                        <h1 className="text-5xl font-bold text-white">
                            Welcome to Our <span className="text-[#D32F2F]">Rental Blog</span>
                        </h1>
                    </div>
                </section>

                {/* Blog Post Listings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-8">
                    {[
                        {
                            topHeading: "Discover the History, Significance, and Spiritual Essence of Kainchi...",
                            img: icon1,
                            overlayTitle: "Spiritual Essence of Kainchi Dham",
                            desc: "Welcome, fellow travelers! Today, we’re guiding you to the serene and spiritually rich Kainchi Dham in the heart of Uttarakhand"
                        },
                        {
                            topHeading: "How Can I Travel Within Uttarakhand? A Complete Guide",
                            img: icon3,
                            overlayTitle: "Travel within Uttarakhand",
                            desc: "Welcome to Uttarakhand, a land of serene mountains, holy rivers, and vibrant culture..."
                        },
                        {
                            topHeading: "Best Places to Visit in Kumaon, Uttarakhand",
                            img: icon2,
                            overlayTitle: "Must-Visit places in Kumaon",
                            desc: "If you're planning a trip to Uttarakhand, Kumaon is a must-visit. Known for its majestic mountains..."
                        },
                        {
                            topHeading: "Ultimate Travel Guide to Nainital: How to Reach, Safety Tips, and...",
                            img: icon5,
                            overlayTitle: "Nainital",
                            desc: "Welcome to Nainital, a picturesque hill station in Kumaon known for its lakes, hills, and natural beauty."
                        },
                        {
                            topHeading: "Explore Bhimtal: Must-visit places in Bhimtal.",
                            img: icon6,
                            overlayTitle: "Bhimtal",
                            desc: "Explore the beauty of Bhimtal, a peaceful hill town famous for its scenic lake and outdoor activities."
                        },
                        {
                            topHeading: "Exploring the Wildlife and National Parks of Uttarakhand",
                            img: icon2,
                            overlayTitle: "Wildlife & National Parks",
                            desc: "Dive into the wild side of Uttarakhand with its lush forests, exotic animals, and nature reserves."
                        },
                        {
                            topHeading: "Top Adventure Activities You Must Do in Bhimtal and Naukuchiatal",
                            img: icon4,
                            overlayTitle: "Must do Adventure Activity",
                            desc: "Rafting, paragliding, and more — these activities will thrill you during your visit to Bhimtal & Naukuchiatal."
                        },
                        {
                            topHeading: "Discovering Hidden Gems: Offbeat Places to Visit in Uttarakhand",
                            img: icon5,
                            overlayTitle: "Discover Hidden Gems in Uttarakhand",
                            desc: "Get off the beaten path and discover Uttarakhand's hidden treasures that most tourists miss."
                        },
                        {
                            "topHeading": "A Spiritual Journey Through Haridwar and Rishikesh",
                            img: icon2,
                            "overlayTitle": "Spirituality in Haridwar & Rishikesh",
                            "desc": "Experience the divine energy of Haridwar and Rishikesh, the spiritual hubs of Uttarakhand, known for their sacred ghats and yoga retreats."
                        },
                        {
                            "topHeading": "Exploring the Mystical Valley of Flowers National Park",
                            img: icon3,
                            "overlayTitle": "Valley of Flowers",
                            "desc": "The Valley of Flowers National Park offers a surreal journey through vibrant meadows of flowers surrounded by snow-capped peaks."
                        },
                        {
                            "topHeading": "Nanda Devi: The Sacred Peaks and Treks of the Himalayas",
                            img: icon4,
                            "overlayTitle": "Nanda Devi Trek",
                            "desc": "Embark on a challenging yet rewarding trek to Nanda Devi, one of the highest peaks in India, revered by locals for its divine significance."
                        },
                        {
                            "topHeading": "Uncover the Secrets of Almora: A Blend of Nature and Culture",
                            img: icon1,
                            "overlayTitle": "Almora",
                            "desc": "Almora, with its rich cultural heritage, ancient temples, and stunning landscapes, is a hidden gem waiting to be explored in the Kumaon region."
                        }
                    ].map((post, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border boder-gray-200 text-left">
                            <div className="p-4 pb-0">
                                <h3 className="font-semibold text-lg leading-tight text-gray-900">{post.topHeading}</h3>
                            </div>
                            <div className="relative mt-2">
                                <img src={post.img} alt={post.overlayTitle} className="w-full h-48 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                                    <h2 className="text-white text-base font-semibold">{post.overlayTitle}</h2>
                                </div>
                            </div>
                            <div className="p-4 pt-2">
                                <p className="text-sm text-gray-600">{post.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <section className="py-12  mb-12">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Discover Our Stunning Homes</h2>
                    <p className="text-center text-gray-600 mb-6">Whether you're looking for a cozy retreat in the mountains or a relaxing beachfront getaway, our homes offer a perfect escape for all kinds of travelers. Explore our collection and find your ideal stay.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mountain Retreat</h3>
                            <p className="text-gray-600">A peaceful retreat surrounded by nature's beauty. Perfect for families and groups seeking tranquility.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Beachfront Villa</h3>
                            <p className="text-gray-600">A luxurious villa with breathtaking ocean views. Ideal for a romantic getaway or a relaxing vacation.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Urban Loft</h3>
                            <p className="text-gray-600">Perfect for those seeking comfort and convenience in the heart of the city. Experience the best of urban living.</p>
                        </div>
                    </div>
                </section>
                {/* Call to Action Section */}
                <section className="bg-gray-200 text-black py-12 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Perfect Rental?</h2>
                    <p className="mb-6">Whether you're looking for a cozy home or a luxurious villa, we have the perfect rental for you. Get started today!</p>
                    <a href="/contact" className="bg-white text-indigo-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-100">
                        Contact Us
                    </a>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Blog;
