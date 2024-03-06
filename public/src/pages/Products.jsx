import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/action/productsAction";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import axios from "axios";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = useSelector((state) => state.products.products);
  const token = useSelector((state) => state.auth.token); // Get token from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = async (productNames) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        productNames: productNames,
      };

      await axios.post("http://localhost:5000/cart", {}, config);

      await axios.patch("http://localhost:5000/cart", data, config);

      console.log("Products added to cart successfully.");
    } catch (error) {
      console.error("Error adding products to cart:", error);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Categories
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <div className="container mt-4 ">
        <div className="row justify-content-md-center">
          {filteredProducts.map((product) => (
            <div
              className="col col-md-6 col-lg-4 col-sm-12 mb-3 justify-content-md-center"
              key={product._id}
            >
              <div className="card" style={{ width: "19rem" }}>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + product.image}
                  className="card-img-top"
                  alt={product.productName}
                  style={{ height: "400px" }}
                />
                <div className="card-body container ">
                  <h5 className="card-title">{product.productName}</h5>
                  <small className="card-text">Stock: {product.stock}</small>
                  <p className="card-text">Price: ${product.finalPrice}</p>
                  <button
                    onClick={() => addToCart([product.productName])}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
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
