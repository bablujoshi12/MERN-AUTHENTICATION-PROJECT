import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const inputValue = e.target.value;

    setSignupInfo((currVal) => {
      return {
        ...currVal,
        [fieldName]: inputValue,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = signupInfo;

    if (!username || !email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = "http://localhost:8080/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();

      console.log(result);

      const { success, message } = result;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow border-0" style={{ width: "400px" }}>
        <div className="card-body p-4">
          <h2 className="text-center fw-bold mb-4">Create Account</h2>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                id="username"
                value={signupInfo.username}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                id="email"
                value={signupInfo.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  value={signupInfo.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={
                      showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                    }
                  ></i>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100 py-2">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none fw-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
