// src/components/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Home: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <animated.div style={fadeIn} className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">Realtime Quiz App</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/user" className="text-deconration-none">
              <animated.section
                style={fadeIn}
                className="user-section bg-blue-500 
                text-white p-4 rounded animate__animated animate__fadeInUp"
              >
                <h2 className="text-xl font-bold mb-4">User Section</h2>
                {/* Add content for user section */}
              </animated.section>
            </Link>
            <Link to="/admin" className="text-decoration-none">
              <animated.section
                style={fadeIn}
                className="admin-section bg-green-500 
                text-white p-4 rounded animate__animated animate__fadeInUp"
              >
                <h2 className="text-xl font-bold mb-4">Admin Section</h2>
                {/* Add content for admin section */}
              </animated.section>
            </Link>
          </div>
        </animated.div>
        <div className="background-animation"></div>
      </div>
    </>
  );
};
