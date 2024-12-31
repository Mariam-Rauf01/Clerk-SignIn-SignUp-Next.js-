import React from 'react';

const Footer: React.FC = () => {
  console.log('Footer rendered'); // For debugging purposes
  return (
    <footer className="flex justify-center items-center bg-[#000000] text-[#FFF8DB] fixed bottom-0 w-full">
      <h1 className="p-4 text-2xl">FitZone &copy; 2024</h1>
    </footer>
  );
};

export default Footer;
