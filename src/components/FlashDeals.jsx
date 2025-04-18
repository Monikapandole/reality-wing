import React from 'react';
import asset1 from '../assets/asset1.jpg'
import asset2 from '../assets/asset2.jpg'
import asset3 from '../assets/asset3.jpg'

const flashDeals = [
  {
    id: 1,
    image: asset1,
    featured: true,
    price: '14,500',
    beds: 2,
    baths: 2,
    area: 800,
    title: '2BHK Flate Available',
    location: 'Bhawarkua, Indore',
    postedAt: 'MAR 18',
  },
  {
    id: 2,
    image: asset2,
    featured: true,
    price: '8,000',
    beds: 1,
    baths: 1,
    area: 580,
    title: 'Robert Churai ke aage Lotus Hospital Ke...',
    location: 'Eastern Ring Road, Indore',
    postedAt: '4 DAYS AGO',
  },
  {
    id: 3,
    image: asset3,
    featured: true,
    price: '3,800',
    beds: 1,
    baths: 1,
    area: 165,
    title: 'Rooms at Khajrana SQuare with bed',
    location: 'Eastern Ring Road, Indore',
    postedAt: '3 DAYS AGO',
  },
];


function FlashDeals() {
  return (
    <div className="py-10 px-4 bg-white px-4 md:px-10 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Flash Deals</h2>
        <div className='flex gap-4 '>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Ends in</span>
          <div className="bg-black text-white px-2 py-1 rounded-full text-sm">11</div>:
          <div className="bg-black text-white px-2 py-1 rounded-full text-sm">50</div>:
          <div className="bg-black text-white px-2 py-1 rounded-full text-sm">44</div>
        </div>
        <a href="#" className="text-black underline text-sm">See All Products</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {flashDeals.map((item) => (
    <div key={item.id} className="border rounded overflow-hidden shadow-sm relative bg-white">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

      {/* Heart Icon */}
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        ❤️
      </button>

      {/* Featured Badge */}
      {item.featured && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
          FEATURED
        </span>
      )}

      <div className="p-4 text-left">
        {/* Price */}
        <div className="text-lg font-bold text-gray-900 mb-1">₹ {item.price}</div>

        {/* Beds, Baths, Area */}
        <div className="text-sm text-gray-600 mb-1">
          {item.beds} Bds - {item.baths} Ba - {item.area} ft²
        </div>

        {/* Title/Description */}
        <div className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</div>

        {/* Location */}
        <div className="text-xs text-gray-500">{item.location}</div>

        {/* Posted Time */}
        <div className="text-xs text-gray-400 mt-1">{item.postedAt}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default FlashDeals;
