import React, { useState } from "react";
import { useMutation } from "react-query";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Footer from "../components/footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation(
    async () => {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      return response.data.data;
    },
    {
      onSuccess: (userData) => {
        login(userData);
        navigate("/"); // Redirect to home after login
      },
      onError: (error: any) => {
        console.error("Login failed:", error);
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid email or password! Please try again.");
        } else {
          setErrorMessage(
            "An unexpected error occurred! Please try again later."
          );
        }
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
    setErrorMessage(""); // Clear any previous error messages
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-green-400 h-[calc(100vh-56px-160px)]"
      >
        <div className="px-10 space-y-2 bg-red-500 border-2 rounded-lg h-2/4">
          <h1 className="text-2xl font-semibold">Log Into Your Account</h1>
          <div>
            <p>Email Address</p>
            <input
              type="email"
              placeholder="you@exemple.com"
              className="px-3 py-1 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="********"
              className="px-3 py-1 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="px-3 py-1 bg-green-300 rounded-2xl">
            LOGIN
          </button>
        </div>
        {errorMessage && (
          <p className="font-semibold text-red-600">{errorMessage}</p>
        )}
      </form>
      <Footer />
    </div>
  );
}
