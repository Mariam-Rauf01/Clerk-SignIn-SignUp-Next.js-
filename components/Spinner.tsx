import React from 'react';
import Image from 'next/image';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-48">
      <Image
        src="/Flowing gradient.gif" // Ensure the file is in the `public` folder
        alt="Loading spinner"
        width={100} // Adjust as needed
        height={100} // Adjust as needed
        priority
      />
    </div>
  );
};

export default Spinner;
