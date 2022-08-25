import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHook";
import {
  addComment,
  addCommentMenu,
  deleteComment,
} from "../../Slices/CommentSlice";
import { BiComment, BiUserCircle } from "react-icons/bi";
import UpDown from "../UpDown";
import "./List.css";
interface ListProps {}

const List: FC<ListProps> = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.value);
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const Buttons = (amount: number, ID: string) => {
    const buttons: JSX.Element[] = [];
    for (let index = 0; index < amount; index++) {
      const button: JSX.Element = <div className="SideButton"></div>;
      buttons.push(button);
    }
    return buttons;
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInputTitle(e.target.value);

  const handleAdd = (ID: string, indx: number) => {
    {
      inputTitle !== "" &&
        dispatch(
          addComment({
            title: inputTitle,
            id: ID,
            inx: indx,
            visible: true,
            isAdding: false,
          })
        );
      dispatch(addCommentMenu(ID));
      setInputTitle("");
    }
  };

  const handleDelete = (ID: string) => {
    dispatch(deleteComment(ID));
  };
  const toggleAdding = (ID: string) => {
    dispatch(addCommentMenu(ID));
  };
  return (
    <ul className="CommentList">
      {comments.map((comment) => (
        <div className="post_wrapper">
          <div className="sides">{Buttons(comment.inx, comment.id)}</div>
          <div className="post">
            {comment.visible ? (
              <li key={comment.id} className="Li">
                <h3>
                  <BiUserCircle />
                  {comment.title}
                </h3>
                <div className="Li-Footer">
                  <UpDown />
                  <button onClick={() => toggleAdding(comment.id)}>
                    <BiComment />
                    Reply
                  </button>
                  <button onClick={() => handleDelete(comment.id)}>
                    Delete
                  </button>
                </div>
                {comment.isAdding && (
                  <>
                    <label htmlFor="">title :</label>
                    <textarea
                      rows={4}
                      value={inputTitle}
                      onChange={handleChangeTitle}
                    />
                    <button
                      onClick={() => handleAdd(comment.id, comment.inx)}
                      style={{
                        cursor: "pointer",
                        border: "transparent",
                        height: "30px",
                      }}
                    >
                      Comment
                    </button>
                  </>
                )}
              </li>
            ) : (
              <h1>Hidden</h1>
            )}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default List;
