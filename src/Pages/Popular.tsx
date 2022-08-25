import { FC } from "react";
import { Outlet } from "react-router-dom";
import Post from "../Components/Post/Post";

interface PopularProps {}

const Popular: FC<PopularProps> = () => {
  return (
    <div className="Popular">
      <Outlet />
    </div>
  );
};

export default Popular;
