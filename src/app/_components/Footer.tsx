import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-black text-white font-poppins text-center mt-auto">
      <div className="flex justify-center items-center h-full">
        <p className="flex-shrink-0">
          © 2024 Crafted with ❤️ by {' '}
          <a href="https://cestos.web.app" className="underline italic">
            CestosTech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
