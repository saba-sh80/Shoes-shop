function Navbar() {
  return (
    <section className="sticky top-0 right-0 left-0 z-50 flex items-center justify-evenly w-full h-25 bg-black">
      <div className="bg-white w-60 h-14 flex justify-center items-center rounded-md">
        <div>
          <h1 className="w-full text-right text-black p-5 text-[35px] font-bold rounded-md cursor-pointer">
            Shoes shop
          </h1>
        </div>
      </div>
      <div className="h-14 flex items-center justify-center">
        <ul className="grid grid-cols-6 grid-rows-1 gap-x-2">
          <li className="text-yellow-600 list-none">
            <a href="">Brand</a>
          </li>
          <li className="text-yellow-600 list-none">
            <a href="">Customers</a>
          </li>
          <li className="text-yellow-600 list-none">
            <a href="">Contact</a>
          </li>
          <li className="text-yellow-600 list-none">
            <a href="">Services</a>
          </li>
          <li className="text-yellow-600 list-none">
            <a href="">About</a>
          </li>
          <li className="text-yellow-600 list-none">
            <a href="">Home</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly gap-2">
        <div className="flex items-center justify-evenly bg-gray-50 rounded-md w-80 h-14">
          <input
            className="bg-white border rounded-md w-60 h-9 placeholder:pl-2.5"
            type="text"
            placeholder="Search..."
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="./../../../public/icons/search-icon.png"
            alt="serch icon"
          />
        </div>
        <div className="bg-gray-50 h-14 w-28 flex justify-evenly items-center rounded-md">
          <div>
            <img
              className="w-7 h-7 cursor-pointer"
              src="./../../../public/icons/shopping-cart.png"
              alt="shopping cart icon"
            />
          </div>
          <div className="bg-white h-14 w-16 flex items-center justify-center gap-2  rounded-md">
            <a className="text-gray-900 cursor-pointer text-[17px]">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
