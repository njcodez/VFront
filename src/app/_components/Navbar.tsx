import React from 'react';
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-purple-500 text-white font-poppins">
      <div className="flex items-center">
        <div className="w-16 h-10 flex items-center justify-center mr-3">
          <Image src="/icon.png" alt="Logo"  width={100} height={100}/>
        </div>
        <h1 className="text-xl font-bold">VFront</h1>
      </div>
    </nav>
  );
};

export default Navbar;
