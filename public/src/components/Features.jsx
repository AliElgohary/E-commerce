import React from "react";
import './headers.styles.css'

const ProductDetailsPage = () => {
  const product = {
    name: "Categories",
    description:
      "We have a list of categories for your needs, including clothing and electronics and other products",
  };

  const features = [
    {
      title: "High Quality Material",
      description: "Made with premium materials for durability and comfort.",
      icon: process.env.PUBLIC_URL + "/images/clothes1.jpg",
    },
    {
      title: "Stylish Design",
      description: "Sleek and modern design that enhances any space.",
      icon: process.env.PUBLIC_URL + "/images/clothes2.jpg",
    },
    {
      title: "Easy to Use",
      description: "Intuitive controls for effortless operation.",
      icon: process.env.PUBLIC_URL + "/images/clothes3.jpg",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="product-details">
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
          </div>
          <div className="m-4">
            <h1>clothes</h1>
            <h1>Electronics</h1>
            <h1>Furniture</h1>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-features ">
            <h3>Product Features</h3>
            <ul className="list-group ">
              {features.map((feature, index) => (
                <li key={index} className="list-group-item">
                  <div className="d-flex align-items-center bg-light ">
                    <div className="feature-icon m-4">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="feature-details ml-3">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetailsPage;
