import { FC } from "react";
import { FaReddit } from "react-icons/fa";
import "./Logo.css"


interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="Header-Logo">
      <FaReddit />
      <h2>leggit</h2>
    </div>
  );
};

export default Logo;
