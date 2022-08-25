import { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className="NotFound-Wrapper">
    <div className="NotFound">
      <h1>EROR 404 ( Bad gateway )</h1>
      <p>
        Whoooops.....
        <br />
        Something went wrong. Seems like there`s no pages on this url. Try
        again!
      </p>
      <Link to="/" className="button">
        To main page{" "}
      </Link>
    </div>
  </div>
);

export default NotFound;
