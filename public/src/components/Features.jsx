import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import './headers.styles.css';

const ProductDetailsPage = () => {
  const product = {
    name: 'Categories',
    description: 'We have a list of categories for your needs, including clothing and electronics and other products',
  };

  const features = [
    {
      title: 'High Quality Material',
      description: 'Made with premium materials for durability and comfort.',
      icon: process.env.PUBLIC_URL + '/images/clothes1.jpg',
    },
    {
      title: 'Stylish Design',
      description: 'Sleek and modern design that enhances any space.',
      icon: process.env.PUBLIC_URL + '/images/clothes2.jpg',
    },
    {
      title: 'Easy to Use',
      description: 'Intuitive controls for effortless operation.',
      icon: process.env.PUBLIC_URL + '/images/clothes3.jpg',
    },
  ];

  return (
    <div className="container mt-5">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <div className="product-details">
            <Typography variant="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h4">{product.description}</Typography>
            <div className="m-4">
              <Typography variant="h6">clothes</Typography>
              <Typography variant="h6">Electronics</Typography>
              <Typography variant="h6">Furniture</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="product-features">
            <Typography variant="h3" gutterBottom>
              Product Features
            </Typography>
            <List>
              {features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={feature.icon} alt={feature.title} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={feature.title}
                    secondary={feature.description}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsPage;
