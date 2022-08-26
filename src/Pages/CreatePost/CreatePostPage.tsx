import JoditEditor from "jodit-react";
import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/ReduxHook";
import { addPost } from "../../Slices/PostSlice";
import "./CreatePost.css";

interface CreatePostPageProps {}

const CreatePostPage: FC<CreatePostPageProps> = () => {
  const [titleInput, setTitleInput] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();
  const editor = useRef(null);
  const navigate = useNavigate();
  const isValid: boolean =  5 > titleInput.length && titleInput.length > 30 ;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInput(e.target.value);
  const handleSubmit = () => {
    dispatch(addPost({ title: titleInput, description: content }));
    navigate("/");
  };
  return (
    <section className="CreatePostPage">
      <h1 className="CreatePostPage_title">Create Post</h1>
      <div className="CreatePost-Form_Wrapper">
        <form action="">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={titleInput}
            onChange={handleChange}
          />
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
          <footer className="CreatePostFooter">
            <button
              className="button"
              disabled={isValid}
              onClick={handleSubmit}
            >
              Post
            </button>
          </footer>
        </form>
      </div>
    </section>
  );
};

export default CreatePostPage;
