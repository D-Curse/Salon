import Button from "./Button";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
          <a
            href="/"
            onClick={scrollToTop}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="img/logo1.png" className="w-12 h-12 rounded-full" />
            <span className="ml-3 text-2xl font-custom1">Gold Looks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-gray-900">
              ABOUT
            </a>
            <a href="#services" className="mr-5 hover:text-gray-900">
              SERVICES
            </a>
            <a href="#gallery" className="mr-5 hover:text-gray-900">
              GALLERY
            </a>
            <a href="#contact" className="mr-5 hover:text-gray-900">
              CONTACT
            </a>
          </nav>

         <a href="/menu">
            <Button
               label="MENU"
               className="py-2 text-sm w-24"
               onClick={scrollToTop}
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
