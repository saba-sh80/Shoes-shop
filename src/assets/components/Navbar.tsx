import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 w-full bg-black px-4">
      {/* container of navbar*/}
      <div className="flex items-center justify-between h-20 w-full lg:h-24 px-4 md:px-0 relative">
        {/* logo of the shoes shop*/}
        <div className="bg-white w-24 sm:w-32 lg:w-44 h-9 sm:h-12 lg:h-14 flex justify-center items-center rounded-md shrink-0">
          <div>
            <h3 className="w-full text-right text-black p-2 sm:p-5 text-[13px] sm:text-[16px] lg:text-[25px] font-bold rounded-md cursor-pointer">
              Shoes shop
            </h3>
          </div>
        </div>

        {/* links of menu - in md and  more */}
        <div className="h-14 md:flex hidden md:items-center md:justify-center">
          <ul className="grid grid-cols-5 grid-rows-1 gap-x-0.5 lg:gap-x-2">
            <li className="text-yellow-600 list-none">
              <a className="text-[13px] lg:text-[16px]" href="#">
                Home
              </a>
            </li>
            <li className="text-yellow-600 list-none">
              <a className="text-[13px] lg:text-[16px]" href="#">
                Contact
              </a>
            </li>
            <li className="text-yellow-600 list-none">
              <a className="text-[13px] lg:text-[16px]" href="#">
                Services
              </a>
            </li>
            <li className="text-yellow-600 list-none">
              <a className="text-[13px] lg:text-[16px]" href="#">
                About
              </a>
            </li>
            <li className="text-yellow-600 list-none">
              <a className="text-[13px] lg:text-[16px]" href="#">
                Customer
              </a>
            </li>
          </ul>
        </div>

        {/* serach, shopping cart and login - in md and more */}
        <div className="hidden md:flex items-center justify-evenly gap-2">
          {/* search bar*/}
          <div className="flex items-center justify-evenly bg-gray-50 rounded-md w-44 lg:w-50 h-12 lg:h-14">
            <input
              className="bg-white border rounded-md w-32 lg:w-36 h-9 placeholder:pl-2.5 placeholder:text-[13px] text-black px-2 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <img
              className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer shrink-0"
              src="/icons/search-icon.png"
              alt="search icon"
            />
          </div>

          {/* shopping cart and login */}
          <div className="bg-gray-50 h-12 lg:h-14 w-16 lg:w-20 flex justify-evenly items-center rounded-md">
            <div>
              <img
                className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer shrink-0"
                src="/icons/shopping-cart.png"
                alt="shopping cart icon"
              />
            </div>
            <div className="bg-gray-50 lg:h-14 w-7 lg:w-10 flex items-center justify-center gap-2 rounded-md">
              <a className="text-gray-900 cursor-pointer text-[13px] lg:text-[15px]">
                Login
              </a>
            </div>
          </div>
        </div>

        {/* button hamburger menu - just in mobile and tablet */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-50 md:hidden flex justify-center items-center h-7 sm:h-10 w-7 sm:w-10 rounded-md cursor-pointer select-none shrink-0"
        >
          <img
            className="w-5 h-5"
            src="/icons/hamburger-menu.png"
            alt="hamburger menu"
          />
        </div>

        {/* floating dropdown menu - just in mobile and tablet*/}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 w-64 bg-black border border-gray-800 p-4 rounded-b-md shadow-xl z-50 space-y-4">
            {/* search bar mobile */}
            <div className="flex items-center justify-between bg-gray-50 rounded-md w-full h-12 px-2.5">
              <input
                className="bg-white border rounded-md w-full mr-2 h-9 placeholder:pl-2 text-black px-2 text-xs focus:outline-none"
                type="text"
                placeholder="Search..."
              />
              <img
                className="w-5 h-5 cursor-pointer shrink-0"
                src="/icons/search-icon.png"
                alt="search icon"
              />
            </div>

            {/*mobile links*/}
            <ul className="flex flex-col text-center pt-1">
              <li className="text-yellow-600 list-none py-1.5 border-b border-gray-800">
                <a href="#">Brand</a>
              </li>
              <li className="text-yellow-600 list-none py-1.5 border-b border-gray-800">
                <a href="#">Customers</a>
              </li>
              <li className="text-yellow-600 list-none py-1.5 border-b border-gray-800">
                <a href="#">Contact</a>
              </li>
              <li className="text-yellow-600 list-none py-1.5 border-b border-gray-800">
                <a href="#">Services</a>
              </li>
              <li className="text-yellow-600 list-none py-1.5 border-b border-gray-800">
                <a href="#">About</a>
              </li>
              <li className="text-yellow-600 list-none py-1">
                <a href="#">Home</a>
              </li>
            </ul>

            {/* shopping cart and login in mobile */}
            <div className="flex flex-col items-center justify-center bg-black gap-y-3">
              <div className="flex items-center justify-center gap-x-2 w-16 h-8 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md">
                <img
                  className="w-5 h-5 cursor-pointer shrink-0"
                  src="/icons/shopping-cart.png"
                  alt="shopping cart icon"
                />
                <span className="text-xs font-medium text-gray-800">Cart</span>
              </div>
              <div className="w-16 h-8 flex justify-center items-center bg-gray-50 cursor-pointer rounded-md">
                <button className="text-gray-800 bg-gray-50 cursor-pointer text-xs font-semibold px-2.5 py-1 rounded-md">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
