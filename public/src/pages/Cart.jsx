import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CircularProgress, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material"; // Import Material-UI components

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data.cart);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch cart data");
        setLoading(false);
      }
    };
    fetchCart();
  }, [token]);

  const handleCashOnDelivery = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/order/cash",
        {
          cartId: cart._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      history.push("/orders");
    } catch (error) {
      console.error("Error processing cash order:", error);
    }
  };

  const handlePayOnline = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/order/online",
        {
          cartId: cart._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      window.open(response.data.session, "_blank");
    } catch (error) {
      console.error("Error processing online order:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!cart || cart.products.length === 0) {
    return <Typography>No items in cart</Typography>;
  }

  return (
    <Box mt={4}>
      <Typography variant="h2" align="center" gutterBottom>
        Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Cart table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + product.image}
                    alt={product.productName}
                    style={{
                      height: "auto",
                      width: "100px",
                      borderRadius: "5px",
                    }}
                  />
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>${product.finalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} textAlign="center">
        <Typography variant="h4">Total Price: ${cart.totalPrice}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCashOnDelivery}
          sx={{ m: 2 }}
        >
          Pay Cash on Delivery
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handlePayOnline}
          sx={{ m: 2 }}
        >
          Pay Online
        </Button>
      </Box>
    </Box>
  );
}

export default Cart;
