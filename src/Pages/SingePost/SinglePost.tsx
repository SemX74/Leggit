import { FC, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import List from "../../Components/List/List";
import TopBar from "../../Components/TopBar/TopBar";
import UpDown from "../../Components/UpDown";
import PostFooter from "../../Components/PostFooter";
import JoditEditor from "jodit-react";
import PostHeader from "../../Components/PostHeader";
import parse from "html-react-parser"
import "./SinglePost.css";
import { useAppSelector } from "../../Hooks/ReduxHook";
interface SinglePostProps {}

const SinglePost: FC<SinglePostProps> = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const {postid} = useParams()
  const posts = useAppSelector((state) => state.posts.value);
  const post = posts.find(el => el.id === postid) 
  if(!post){
    return <Navigate to="/*" replace={true} />
  }

  return (
    <div className="ModalPost-wrapper">
      <div className="SinglePost-Background">
        <div className="SinglePost">
          <TopBar />
          <header className="SinglePost-Header">
            <div className="SinglePost-Header-UpDownWrappper">
              <hr />
              <UpDown />
              <hr />
              <h1 className="SinglePost-Header_title">{post?.title}</h1>
            </div>
            <section className="SinglePost-Close" onClick={() => navigate(-1)}>
              <VscChromeClose />
            </section>
          </header>
          <section className="container">
            <section className="SinglePost-UpDown">
              <UpDown />
            </section>
            <section className="SinglePost-Post">
              <PostHeader created={String(post?.created)}/>
              <h1 className="Post-Title">{post?.title}</h1>
              <p>{typeof post?.description === "string" && parse(post?.description)}</p>
              <PostFooter />
              <JoditEditor
                ref={editor}
                value={content}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
              <section className="SinglePost-Post_list">
                <List />
              </section>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
