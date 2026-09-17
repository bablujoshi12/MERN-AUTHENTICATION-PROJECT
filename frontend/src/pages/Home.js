import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    handleSuccess("User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/products`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const result = await response.json();

      if (!response.ok) {
        handleError(result.message || "Failed to fetch products");
        return;
      }

      setProducts(result.products || []);
    } catch (error) {
      handleError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-bold">{loggedInUser?.toUpperCase()}</h1>

          <p className="text-muted mb-0">Welcome to your dashboard</p>
        </div>

        <button className="btn btn-danger" onClick={handleLogOut}>
          Logout
        </button>
      </div>

      {/* Products */}
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product._id}>
            <div className="card h-100 shadow-sm border-0">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  padding: "20px",
                }}
              />

              <div className="card-body d-flex flex-column">
                {/* Category */}
                <span className="badge bg-secondary align-self-start mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h4 className="card-title fw-bold">{product.name}</h4>

                {/* Description */}
                <p className="card-text text-muted">{product.description}</p>

                {/* Price */}
                <h5 className="fw-bold">₹{product.price}</h5>

                {/* Stock */}
                <p className="text-muted">Stock: {product.stock}</p>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <button
                    className="btn btn-outline-dark w-50"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    View
                  </button>

                  <button className="btn btn-dark w-50">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
