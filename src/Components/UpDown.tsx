import { FC } from "react";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHook";
import { addScore, decScore, sortByName } from "../Slices/PostSlice";

interface UpDownProps {
  id?: string;
}

const UpDown: FC<UpDownProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    id && dispatch(addScore(id));
  };
  const handleDec = () => {
    id && dispatch(decScore(id));
  };
  const post = useAppSelector((state) =>
    state.posts.value.find((el) => el.id === id)
  );
  return (
    <section className="UpDown">
      <TbArrowBigTop onClick={handleAdd} />
      <span>{post?.score || 0}</span>
      <TbArrowBigDown onClick={handleDec} />
    </section>
  );
};

export default UpDown;
