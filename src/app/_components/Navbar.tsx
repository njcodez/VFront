import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-purple-500 text-white font-poppins">
      <div className="flex items-center">
        <div className="w-16 h-10 flex items-center justify-center mr-3">
          <img src="icon.png" alt="Logo"  />
        </div>
        <h1 className="text-xl font-bold">VFront</h1>
      </div>
    </nav>
  );
};

export default Navbar;
