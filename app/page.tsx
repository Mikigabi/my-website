import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-blue-300 to-yellow-200 text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        &quot;Building the Future, One Line at a Time&quot;
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white/90">
        Hi, I&apos;m a passionate developer eager to create innovative solutions.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all"
      >
        View My Work
      </a>
    </div>
  );
};

export default LandingPage;
