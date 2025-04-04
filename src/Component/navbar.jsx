import React from 'react';


function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center place-content-center p-4'> {/* Added padding for better spacing */}
        <div>
          <img src="/Logo1.png" alt="Logo" className="h-8 md:h-10"/> {/* Added alt text and adjusted image size */}
        </div>
        <div>
          <ul className='flex gap-8'>
            <li className='text-white font-medium'>
              <a href=''>Home</a>
            </li>
            <li className='text-white font-medium'>
              <a href=''>Explore</a>
            </li>
            <li className='text-white font-medium'>
              <a href=''>Genre</a>
            </li>
            <li className='text-white font-medium'>
              <a href=''>News</a>
            </li>
            <li className='text-white font-medium'>
              <a href=''>Movie</a>
            </li>
            <li className='text-white font-medium'>
              <a href=''>Tv show</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;