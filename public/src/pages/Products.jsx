import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/action/productsAction";
import Categories from "../components/Categorise";
import Footer from "../components/Footer";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Categories
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <div className="container mt-4">
        <div className="row w-100">
          {filteredProducts.map((product) => (
            <div className="col-md-6 col-lg-4 col-sm-12 mb-3" key={product._id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + product.image}
                  className="card-img-top"
                  alt={product.productName}
                  style={{ height: "400px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Price: ${product.finalPrice}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
