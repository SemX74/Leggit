import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { AuthContextProps } from "../Contexts/AuthProvider";

export interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const Auth = useAuth();
  if (!Auth?.user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
