import React from 'react';

const Gallery = () => {
  const data = [
    { id: 1, src: '/img/gallery/img1.jpg' },
    { id: 2, src: '/img/gallery/img2.jpg' },
    { id: 3, src: '/img/gallery/img3.jpg' },
    { id: 4, src: '/img/gallery/img4.jpg' },
    { id: 5, src: '/img/gallery/img5.jpg' },
    { id: 6, src: '/img/gallery/img6.jpg' },
    { id: 7, src: '/img/gallery/img7.jpg' },
    { id: 8, src: '/img/gallery/img8.jpg' },
    { id: 9, src: '/img/gallery/img9.jpg' },
    { id: 10, src: '/img/gallery/img10.jpg' },
    { id: 11, src: '/img/gallery/img11.jpg' },
    { id: 12, src: '/img/gallery/img12.jpg' },
    { id: 13, src: '/img/gallery/img13.jpg' },
    { id: 14, src: '/img/gallery/img14.jpg' },
    { id: 15, src: '/img/gallery/img15.jpg' }
  ];

  return (
    <div id="gallery" className="p-4">
      {/* Flexbox Container with Vertical Listing */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
        {/* List images vertically on small screens and horizontally on larger screens */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap w-full mb-4 sm:mb-0">
          {data.slice(0, 8).map((item) => (
            <div key={item.id} className="w-full sm:w-1/4 p-2">
              <img
                src={item.src}
                alt={`img-${item.id}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* List images horizontally for the second part */}
        <div className="flex sm:flex-row flex-col sm:w-full mb-4 sm:mb-0">
          {data.slice(8).map((item) => (
            <div key={item.id} className="w-full sm:w-1/4 p-2">
              <img
                src={item.src}
                alt={`img-${item.id}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
