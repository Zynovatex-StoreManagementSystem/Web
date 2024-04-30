import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ItemCards from "./ItemCards"; // Import the ItemCard component

function SwipeCards() {
    // Define the state variables
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Sample data for the cards
    const cards = [
        {
            id: 1,
            name: 'Carole Steward',
            image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
            position: 'Chief Executive Officer',
            description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
            progress: 88,
            rating: 4.95,
        },
        {
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },
      {
        id: 1,
        name: 'Carole Steward',
        image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        position: 'Chief Executive Officer',
        description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
        progress: 88,
        rating: 4.95,
    },
    {
      id: 1,
      name: 'Carole Steward',
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
      position: 'Chief Executive Officer',
      description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
      progress: 88,
      rating: 4.95,
  },
  {
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },{
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },{
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },

        // Add more card objects as needed
        // ...
    ];

    // Event handlers for mouse events
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseLeave = () => setIsDown(false);
    const handleMouseUp = () => setIsDown(false);

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 1;
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className=' flex items-center gap-4 max-w-5xl'>
          {cards.map((card) => (
                    <div key={card.id} className="flex-none w-64 snap-center">
                        {/* Render an ItemCard component for each card */}
                        <ItemCards
                            name={card.name}
                            image={card.image}
                            position={card.position}
                            description={card.description}
                            progress={card.progress}
                            rating={card.rating}
                        />
                    </div>
                ))}
        </div>
    );
}

export default SwipeCards;





// import React, { useState } from 'react';
// import { HiOutlineShoppingCart } from 'react-icons/hi';

// function SwipeCards() {
//     const [isDown, setIsDown] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);
    
//     const cards = [
//         {
//             id: 1,
//             image: `https://source.unsplash.com/random/300x200?Cocktail`,
//             title: 'Cocktail',
//             description: 'Tropical mix of flavors, perfect for parties.',
//             price: 8.99,
//             link: 'https://lqrs.com',
//         },
//         {
//             id: 2,
//             image: `https://source.unsplash.com/random/300x200?Smoothie`,
//             title: 'Smoothie',
//             description: 'Refreshing blend of fruits and yogurt.',
//             price: 5.49,
//             link: 'https://lqrs.com',
//         },
//         // Add more cards as needed
//         // ...
//     ];

//     const handleMouseDown = (e) => {
//         setIsDown(true);
//         setStartX(e.pageX - e.currentTarget.offsetLeft);
//         setScrollLeft(e.currentTarget.scrollLeft);
//     };

//     const handleMouseLeave = () => setIsDown(false);

//     const handleMouseUp = () => setIsDown(false);

//     const handleMouseMove = (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - e.currentTarget.offsetLeft;
//         const walk = (x - startX) * 1;
//         e.currentTarget.scrollLeft = scrollLeft - walk;
//     };

//     return (
//         <div
//             className="overflow-x-scroll scrollbar-hide mb-4 relative px-1 h-60"
//             onMouseDown={handleMouseDown}
//             onMouseLeave={handleMouseLeave}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//             style={{ overflowY: 'hidden' }}
//         >
//             <div className="flex snap-x snap-mandatory gap-4" style={{ width: 'max-content' }}>
//                 {cards.map((card) => (
//                     <div key={card.id} className="flex-none w-64 snap-center">
//                         <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
//                             <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
//                             <div className="p-4">
//                                 <h3 className="text-lg leading-6 font-bold text-gray-900">{card.title}</h3>
//                                 <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
//                                 <div className="flex justify-between items-center mt-4">
//                                     <span className="text-2xl font-extrabold text-gray-900">${card.price.toFixed(2)}</span>
//                                     <a href={card.link} className="text-white bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
//                                         <HiOutlineShoppingCart className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SwipeCards;
