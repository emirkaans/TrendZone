import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    const data = await response.json();

    setProductList(data.products);
  };

  const getProduct = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductContext.Provider value={{ getProduct, productList }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProductContext() {
  const context = useContext(ProductContext);

  return context;
}

export { useProductContext, ProductProvider };
