import React from 'react';

function NotFound() {
  return (
    <div className="container vh-100">
      <div className="text-center mt-4">
        <h1>404 - Page Not Found</h1>
        <p>We're sorry, the page you are looking for cannot be found.</p>
        <img src={process.env.PUBLIC_URL + "/images/404.png"} alt="Page Not Found" />
      </div>
    </div>
  );
}

export default NotFound;
