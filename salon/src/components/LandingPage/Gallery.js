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
    <div id="gallery" className="my-8 mx-[10%] flex flex-wrap">
      {data.map((img) => (
        <div 
          key={img.id}
          className='w-1/5 h-auto'
        >
          <img 
            src={img.src}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
