import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import background from '../../images/hero.jpg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  style={{ backgroundImage: `linear-gradient(
      359.72deg,
      rgba(72, 43, 231, 0.73) 0.25%,
      rgba(0, 0, 0, 0.23) 99.77%
    ),url(${background})`, backgroundSize:'cover' }}>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            <div className="flex items-center">
             
              <div className="hidden md:block">
                <div className="ml-10 flex items-end space-x-4">
                  <a
                    href="#"
                    className=" menu-links text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Get App
                  </a>

                  <a
                    href="#"
                    className="menu-links text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className="menu-links text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="menu-links text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    F.A.Q
                  </a>

                  <a
                    href="#"
                    className="menu-links text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="menu-links text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium sign-up-nav-btn "
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
        </div>
       
        

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="menu-links text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Get App
                </a>

                <a
                  href="#"
                  className="menu-links text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="menu-links text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="menu-links text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  F.A.Q
                </a>

                <a
                  href="#"
                  className="menu-links text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="menu-links text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium sign-up-nav-btn"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div class=""> 
      <div class="container mx-auto ">  
        <h2 className="hero-head mt-8">Startup <br /> Framework.Suit <br />Up Your Startup</h2> 
        <p className="hero-p mt-8">We have created a new product that will help designers, <br /> developers and companies create websites for their startups <br /> quickly and easily.
        </p> 
      <div className="hero-btns">
      <button className="hero-btn-started mr-6">Get Started</button>
        <button className="hero-btn">Learn More</button>
      </div>
        </div> 
        </div>
     
  
    </div>
  );
}

export default Nav;
