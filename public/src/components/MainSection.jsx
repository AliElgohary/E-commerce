import React from "react";
import "./headers.styles.css"; 

export default function MainSection() {
  return (
    <section className="main_sec mt-5">
      <div className="img">
        <img src={process.env.PUBLIC_URL +"/images/main_chair.png"} alt="" />
      </div>
      <div className="text">
        <p>HOT DEALS THIS WEEK</p>
        <h2>
          SALE UP 50%
          <br />
          MODERN FURNITURE
        </h2>
        <a href="../products/products.html" className="main_btn">
          VIEW NOW
        </a>
      </div>
    </section>
  );
}
