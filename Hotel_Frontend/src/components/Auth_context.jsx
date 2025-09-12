import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [page, setPage] = useState(token ? "profile" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle user login
  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:8000/token/", {
        email,
        password,
      });

      const data = res.data;
      setToken(data.access);
      localStorage.setItem("token", data.access);
      setPage("/");
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle user registration
  const register = async (
    username,
    email,
    phone ,
    address,
    password,
    confirm_password
  ) => {
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8000/register/", {
        username,
        email,
        phone,
        address,
        password,
        confirm_password,
      });

      // After successful registration, redirect to home page
      setPage("/");
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle user logout
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setPage("/");
    setError("");
  };

  // Helper function to navigate to a specific page
  const goTo = (pageName) => {
    setPage(pageName);
    setError(""); // Clear errors when navigating
  };

  // Provide the authentication context to child components
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        register,
        page,
        goTo,
        loading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
