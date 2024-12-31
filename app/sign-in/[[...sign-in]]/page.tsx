import React from 'react';
import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'; // Import Image from next/image

const Page = () => {
  return (
    <div>
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/gyimg.jpg"
          alt="bg image"
          fill
          quality={100}
          priority
        />
      </div>

      {/* Sign-in component */}
      <div className="flex justify-center mt-4 mb-4">
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
