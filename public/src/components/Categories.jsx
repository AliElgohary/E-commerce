import React, { useEffect, useState } from 'react';
import { Select, MenuItem, CircularProgress, FormControl, InputLabel } from '@mui/material'; // Import Material-UI components
import axios from 'axios';

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:5000/category');
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    onSelectCategory(selectedCategoryId);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress /> 
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <FormControl variant="outlined" className="container w-50 my-2">
          <InputLabel id="category-select-label">Select category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value=""
            label="Select category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="">All Products</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Categories;
