import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shoes").then((res) =>
        res.json(),
      ),
      fetch("https://dummyjson.com/products/category/womens-shoes").then(
        (res) => res.json(),
      ),
    ]).then(([mensData, womensData]) => {
      const allProducts = [...mensData.products, ...womensData.products];
      setProducts(allProducts);
    });
  }, []);
  return (
    <section className="w-full flex flex-col items-start justify-center gap-y-10 py-20">
      <div className="w-full grid grid-cols-3 grid-rows-4 items-center justify-items-center gap-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg p-5 bg-gray-300 shadow-sm flex flex-col justify-between"
          >
            {product.thumbnail ? (
              <div className="bg-black">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover rounded mb-4 mx-auto"
                />
              </div>
            ) : (
              <div className="bg-black text-gray-50 flex items-center justify-center mb-4">
                There is no image !
              </div>
            )}
            <div className="flex flex-col justify-center items-center bg-gray-300 p-3">
              <h3 className="font-semibold text-lg text-black">
                {product.title}
              </h3>
              <p className="text-black text-sm mt-1">{product.category}</p>
              <p className="text-green-600 font-bold mt-2">${product.price}</p>
              <button className="mt-4 bg-black text-gray-50 p-2 rounded hover:bg-gray-950 transition cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-14">
        <button className="text-gray-50 text-lg p-2.5 rounded-lg cursor-pointer transition border border-gray-600/60 bg-gray-800/60 shadow-lg ring-1 ring-white/5 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-gray-800/40">See All</button>
      </div>
    </section>
  );
}

export default Products;
