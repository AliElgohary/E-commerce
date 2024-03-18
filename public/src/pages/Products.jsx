import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/action/productsAction";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = useSelector((state) => state.products.products);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const history = useHistory();

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
      if (token) {
        await axios.post("http://localhost:5000/cart", {}, config);
        await axios.patch("http://localhost:5000/cart", data, config);
        console.log("Products added to cart successfully.");
      }
      if (!token) {
        history.push("/login");
      }
    } catch (error) {
      console.error("Error adding products to cart:", error);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
    <div className="container mt-4 w-100">
      <Categories onSelectCategory={(category) => setSelectedCategory(category)} />
    </div>
      <div className="container mt-4 ">
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={process.env.PUBLIC_URL + "/images/" + product.image}
                  alt={product.productName}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Stock: {product.stock}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Price: ${product.finalPrice}
                  </Typography>
                  <Button onClick={() => addToCart([product.productName])} variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Products;
