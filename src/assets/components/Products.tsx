function Products() {
  return (
    <section className="w-full h-225 grid grid-cols-1 grid-rows-1 items-center justify-items-center mb-20">
      <div className="w-full h-full grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-x-2.5 gap-y-10 ">
        <img
          src="/shoes1.jpg"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
        <img
          src="/shoes2.jpg"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
        <img
          src="/shoes3.webp"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
        <img
          src="/shoes4.jpg"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
        <img
          src="/shoes5.jpg"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
        <img
          src="/shoes6.jpg"
          alt=""
          className="example-product w-100 h-100 object-cover"
        />
      </div>
    </section>
  );
}

export default Products;
