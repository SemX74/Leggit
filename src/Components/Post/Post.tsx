import { FC } from "react";
import UpDown from "../UpDown";
import parse from "html-react-parser";

import { useLocation, useNavigate } from "react-router-dom";
import { IPostValue } from "../../Slices/PostSlice";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import "./Post.css";

interface PostProps {}

const Post: FC<IPostValue> = ({ id, description, title, created }) => {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <article className="Post">
      <UpDown id={id} />
      <section onClick={() => navigate(`modal/${id}`)} className="Post-right">
        <PostHeader created={created} />
        <section className="Post-Section">
          <h1 className="Post-Title">{title}</h1>
          <p className="Post-Description">{parse(description)}</p>
        </section>
        <PostFooter />
      </section>
    </article>
  );
};

export default Post;
