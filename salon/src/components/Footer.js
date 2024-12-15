const Footer = () => {
  return ( 
      <>
          <footer className="text-black body-font bg-[#94D7F2]">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <img src="icon.png" />
                  <span className="ml-3 text-xl">FORECAST IT</span>
                  </a>
                  <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 FORECAST IT —
                      <a href="" className="text-white ml-1">@enigma</a>
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-white">
                      <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a className="ml-3 text-white">
                      <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a className="ml-3 text-white">
                      <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="ml-3 text-white">
                      <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  </span>
              </div>
          </footer>
      </>
   );
}

export default Footer;