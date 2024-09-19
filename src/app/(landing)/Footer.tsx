import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">
          NutriBraniacs
        </h2>
        <p className="text-sm">
          &copy; {currentYear} NutriBraniacs. All rights reserved.
        </p>
              </div>
    </footer>
  );
};

export default Footer;