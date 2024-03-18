import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material"; // Import Material-UI components

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch orders data");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <CircularProgress />; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders.length === 0) {
    return <Typography>No orders found</Typography>;
  }

  return (
    <div className="container">
      <Typography variant="h2" className="my-4">Orders</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>${order.totalPrice}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;
