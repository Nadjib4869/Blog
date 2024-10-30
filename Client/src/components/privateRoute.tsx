import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Render a loading spinner or placeholder while loading
    return <div>Loading...</div>;
  }

  return user ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
