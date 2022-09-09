import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LoggingButtonsProps {}

const LoggingButtons: FC<LoggingButtonsProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Header-Registration_wrapper">
      <button
        onClick={() => {
          navigate("/login", {
            replace: true,
            state: { from: location.pathname },
          });
        }}
        className="LogIn  button"
      >
        Log In
      </button>
      <button
        onClick={() => {
          navigate("/register", {
            replace: true,
            state: { from: location.pathname },
          });
        }}
        className="SignUp button"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoggingButtons;
