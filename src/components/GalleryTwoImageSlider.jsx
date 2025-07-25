import React from "react";

const GalleryTwoImageSlider = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const total = images.length;
  const canGoPrev = index > 0;
  const canGoNext = index + 2 < total;

  const handlePrev = () => {
    if (canGoPrev) setIndex(index - 2);
  };
  const handleNext = () => {
    if (canGoNext) setIndex(index + 2);
  };

  return (
    <div>
      {/* Thumbnails Row (centered) */}
      <div className="flex gap-2 mb-4 overflow-x-auto justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className={`h-16 w-24 object-cover rounded border-2 ${idx === index || idx === index + 1 ? 'border-[#E53935]' : 'border-gray-200'}`}
            style={{ cursor: 'pointer', opacity: idx === index || idx === index + 1 ? 1 : 0.6 }}
            onClick={() => setIndex(idx % 2 === 0 ? idx : idx - 1)}
          />
        ))}
      </div>
      {/* Main Images Row */}
      <div className="flex gap-4 items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          style={{ background: canGoPrev ? '#E53935' : '#eee', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, cursor: canGoPrev ? 'pointer' : 'not-allowed' }}
        >
          &#8592;
        </button>
        <div className="flex gap-4 w-full justify-center">
          <img
            src={images[index]}
            alt={`main-${index}`}
            className="h-80 w-1/2 object-cover rounded-xl border-2 border-[#E53935]"
            style={{ background: '#f8f8f8' }}
          />
          {images[index + 1] && (
            <img
              src={images[index + 1]}
              alt={`main-${index + 1}`}
              className="h-80 w-1/2 object-cover rounded-xl border-2 border-[#E53935]"
              style={{ background: '#f8f8f8' }}
            />
          )}
        </div>
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          style={{ background: canGoNext ? '#FB8C00' : '#eee', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 8, cursor: canGoNext ? 'pointer' : 'not-allowed' }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default GalleryTwoImageSlider; 