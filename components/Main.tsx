"use client";
import Image from 'next/image'; // Import Image from Next.js
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory routing
import { useEffect } from 'react';
import Spinner from './Spinner';

const Main: React.FC = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Redirect the user if not authenticated
  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [isLoaded, user, router]);

  // If user data is still loading
  if (!isLoaded) {
    return <Spinner/>;
  }

  // Render the main content if the user is authenticated
  if (!user) {
    return null; // Prevent rendering while redirecting
  }

  return (
    <div>
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/gyimg.jpg"
          alt="bg image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      {/* Centered Container */}
      <div
        className="relative flex flex-col items-center mt-3 mx-auto bg-black bg-opacity-60 justify-start max-w-4xl"
        style={{ height: '480px' }}
      >
        <h1 className="font-bold text-4xl mt-16 text-[#FFF8DB]">
          Welcome to FitZone, {user.firstName}!
        </h1>
        <h2 className="font-bold text-xl mt-12 text-[#FFF8DB]">
          Transforming Lives, One Workout at a Time!
        </h2>
        <p className="font-semibold text-xl mt-10 text-center max-w-3xl leading-relaxed text-[#FFF8DB]">
          At FitZone, we believe in empowering you to achieve your fitness goals. Our state-of-the-art facilities, 
          expert trainers, and supportive community provide everything you need to push your limits and unlock your potential. 
          Whether you&apos;re here to build strength, improve endurance, or simply feel healthier, we&apos;re here to guide and motivate you every step of the way.
        </p>

         {/* Call Me Button */}
         <button
          className="mt-4 px-6 py-3 bg-[#FFF8DB] text-black font-bold rounded-lg shadow-lg hover:bg-[#E74C3C] hover:text-[#ffffff]  transition duration-300"
          
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Main;
