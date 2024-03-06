import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../components/Footer";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleCashOnDelivery = () => {};

  const handlePayOnline = () => {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cart || cart.products.length === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <>
      <div className="container shadow-sm w-75 mb-5">
        <h2 className="my-4">Cart</h2>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + product.image}
                    alt={product.productName}
                    style={{
                      height: "auto",
                      width: "100px",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td className="align-middle">{product.productName}</td>
                <td className="align-middle">${product.finalPrice}</td>
              </tr>
            ))}
            <tr>
              <td className="align-middle" colSpan={2}>
                <h4>Total Price: </h4>
              </td>
              <td className="align-middle">
                <h4>${cart.totalPrice}</h4>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button
            className="btn btn-primary mx-2"
            onClick={handleCashOnDelivery}
          >
            Pay Cash on Delivery
          </button>
          <button className="btn btn-success mx-2" onClick={handlePayOnline}>
            Pay Online
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
