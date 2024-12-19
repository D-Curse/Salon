const Footer = () => {
  return ( 
      <>
          <footer className="text-black body-font bg-[#919090]">
              <div className="container px-4 py-4 mx-auto flex items-center sm:flex-row flex-col">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <img src="img/logo1.png" className="w-12 h-12 rounded-full" />
                  <span className="ml-3 text-2xl font-custom1">Gold Looks</span>
                  </a>
                  <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 GOODLOOKS —
                      <a href="" className="text-white ml-1">@goldlooks</a>
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