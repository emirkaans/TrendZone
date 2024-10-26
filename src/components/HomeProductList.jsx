import Spinner from "./Spinner";
import { useProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

function HomeProductList() {
  const { productList } = useProductContext();
  const navigate = useNavigate();

  if (!productList[0]) {
    return <Spinner />;
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-4xl font-bold text-black max-lg:text-center">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productList.map((product, index) => (
            <a
              key={index}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group mx-auto cursor-pointer bg-white transition-all duration-500 sm:mr-0 lg:mx-auto"
            >
              <div>
                <img
                  src={product.images[0]}
                  alt={product.brand}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6 className="text-xl font-semibold leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                    {product.title}
                  </h6>
                  <h6 className="text-xl font-semibold leading-8 text-indigo-600">
                    ${product.price}
                  </h6>
                </div>
                <p className="mt-2 text-sm font-normal leading-6 text-gray-500">
                  {product.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProductList;
