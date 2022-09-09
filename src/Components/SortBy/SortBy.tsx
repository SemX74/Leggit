import { FC, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { useAppDispatch } from "../../Hooks/ReduxHook";
import { sortByName } from "../../Slices/PostSlice";
import "./SortBy.css";
interface SortByProps {}

const SortBy: FC<SortByProps> = () => {
  const [sortBy, setSortBy] = useState("");
  const dispatch = useAppDispatch();

  const handleSelect = (value: string) => {
    setSortBy(value);
    dispatch(sortByName(value));
  };
  const selectedOption = (option: string): string => {
    return sortBy === option ? "SortBy_option active" : "SortBy_option";
  };
  return (
    <aside className="SortBy">
      <section>
        <span>Sort By:</span>
      </section>
      <div className="SortBy_wrapper">
        <ul className="SortBy_list">
          <li
            onClick={() => handleSelect("az")}
            className={selectedOption("az")}
          >
            <FcAlphabeticalSortingAz />
            A-Z
          </li>
          <li
            onClick={() => handleSelect("rating")}
            className={selectedOption("rating")}
          >
            <AiOutlineStar />
            Rating
          </li>
          <li
            onClick={() => handleSelect("newest")}
            className={selectedOption("newest")}
          >
            <BiTimeFive />
            Newest
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SortBy;
