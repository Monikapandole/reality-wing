import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { getBlogList } from '../Api/services/blogService';
import icon1 from "../assets/asset1.jpg";


function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogList();
                setBlogs(data?.data || []);
            } catch (err) {
                setError('Failed to load blogs.');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="bg-gray-50 pb-  ">
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
                {loading ? (
                    <div className="py-16 text-center text-lg">Loading...</div>
                ) : error ? (
                    <div className="py-16 text-center text-red-500">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-8">
                        {blogs.map((post, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border boder-gray-200 text-left">
                                <div className="p-4 pb-0">
                                    <h3 className="font-semibold text-lg leading-tight text-gray-900">{post.topHeading || post.title}</h3>
                                </div>
                                <div className="relative mt-2">
                                    <img src={post.featured_image || icon1} alt={post.overlayTitle || post.title} className="w-full h-48 object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                                        <h2 className="text-white text-base font-semibold">{post.overlayTitle || post.title}</h2>
                                    </div>
                                </div>
                                <div className="p-4 pt-2">
                                    <p className="text-sm text-gray-600">{post.content || post.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
