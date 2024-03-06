import React, { useEffect, useState } from 'react';
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
        <p>Loading categories...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <select
          className="form-select container w-50 my-2"
          aria-label="Select category"
          onChange={handleCategoryChange}
        >
          <option value="">All Products</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>{category.categoryName}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Categories;
