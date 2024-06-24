import React from 'react';
import Form from "./_components/Form";
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import MainSection from './_components/MainSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <main className="flex-grow flex justify-center items-center"> */}
        <MainSection />
      {/* </main> */}
    </div>
  );
};

export default Home;
