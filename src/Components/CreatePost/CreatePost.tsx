import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
interface CreatePostProps {}

const CreatePost: FC<CreatePostProps> = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("AddPost")}
      className="CreatePost"
    >
      Add your own post <AiOutlinePlus />
    </button>
  );
};

export default CreatePost;
