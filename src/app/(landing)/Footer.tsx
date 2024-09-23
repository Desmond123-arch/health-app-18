const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#94A294] p-4 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">WellKids</h2>
        <p className="text-sm">
          &copy; {currentYear} WellKids. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
