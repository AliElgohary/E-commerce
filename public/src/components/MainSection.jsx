import React from 'react';
import { Typography, Button } from '@mui/material';

export default function MainSection() {
  return (
    <section
      style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ marginRight: '20px' }}>
        <img src={process.env.PUBLIC_URL + '/images/main_chair.png'} alt="" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="body1" component="p" gutterBottom>
          HOT DEALS THIS WEEK
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          SALE UP 50%
          <br />
          MODERN FURNITURE
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '20px', textDecoration: 'none' }}
          href="../products/products.html"
        >
          VIEW NOW
        </Button>
      </div>
    </section>
  );
}
