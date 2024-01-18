//animations 
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const HeroSection = () => {
  const navigate = useNavigate();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <animated.section
      style={fadeIn}
      className="bg-gradient-to-r from-blue-500 to-green-500 text-white h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInRight">
        Improve
      </h1>
      <p className="text-lg mb-8 animate__animated animate__fadeInLeft">
        Unlock Knowledge in Real Time: Engage, Learn, Conquer with Realtime
        QuizApp!
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 
        transition duration-300 transform hover:scale-105
        animate__animated animate__fadeInUp
        "
      >
        Get Started
      </button>
    </animated.section>
  );
};

export default HeroSection;
