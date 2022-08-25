import { FC, useState } from "react";
import "./SortBy.css"
interface SortByProps {}

const SortBy: FC<SortByProps> = () => {
  const [sortBy, setSortBy] = useState("az");

  const handleSelect = (value: string) => {
    setSortBy(value);
  };
  const selectedOption = (option: string): string => {
    return sortBy === option ? "SortBy_option active" : "SortBy_option";
  };
  return (
    <aside className="SortBy">
      <span>Sort By:</span>
      <ul className="SortBy_list">
        <li onClick={() => handleSelect("az")} className={selectedOption("az")}>
          A-Z
        </li>
        <li
          onClick={() => handleSelect("rating")}
          className={selectedOption("rating")}
        >
          Rating
        </li>
        <li
          onClick={() => handleSelect("newest")}
          className={selectedOption("newest")}
        >
          Newest
        </li>
      </ul>
    </aside>
  );
};

export default SortBy;
