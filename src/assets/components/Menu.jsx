function Menu() {
  return (
    <section className="grid grid-cols-4 justify-between items-center w-full h-25">
      <h1 className="w-full text-right text-yellow-600 p-5 text-[40px] font-bold rounded-md cursor-pointer">
        Shoes shop
      </h1>
      <ul className="grid grid-cols-6 grid-rows-1 justify-items-end gap-y-5 w-200">
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">Brand</a>
        </li>
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">Costomers</a>
        </li>
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">Contact</a>
        </li>
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">Services</a>
        </li>
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">About</a>
        </li>
        <li className="text-gray-100 list-none font-[25px]">
          <a href="">Home</a>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
