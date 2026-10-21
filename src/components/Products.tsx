function Products() {
  return (
    <section className="w-full h-225 grid grid-cols-1 grid-rows-1 items-center justify-items-center mb-20">
      <div className="w-full h-full grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-x-2.5 gap-y-10 ">
        <img
          src="/images/shoes1.jpg"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
        <img
          src="/images/shoes2.jpg"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
        <img
          src="/images/shoes3.webp"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
        <img
          src="/images/shoes4.jpg"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
        <img
          src="/images/shoes5.jpg"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
        <img
          src="/images/shoes6.jpg"
          alt="shoes"
          className="w-100 h-100 object-cover"
        />
      </div>
    </section>
  );
}

export default Products;
