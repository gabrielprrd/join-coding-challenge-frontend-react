import { SyntheticEvent } from "react";

type Props = {
  pages: number;
  current: number;
  handleNumClick: (e: SyntheticEvent) => void;
  handleBackClick: (e: SyntheticEvent) => void;
  handleNextClick: (e: SyntheticEvent) => void;
};

const isActive = (num: number, current: number) => current === num;

const handleActiveButtonStyle = (num: number, current: number) =>
  isActive(num, current) ? "bg-blue-600 text-white" : "";

export default function Pagination({
  pages,
  current,
  handleNumClick,
  handleBackClick,
  handleNextClick,
}: Props) {
  const isFirst = current === 1;
  const isLast = current === pages;

  return (
    <div className="flex gap-2">
      {!isFirst && <button onClick={(e) => handleBackClick(e)}>Back</button>}
      {Array.from({ length: pages }).map((_, index) => (
        <button
          onClick={(e) => handleNumClick(e)}
          className={`${handleActiveButtonStyle(
            +index + 1,
            +current
          )} p-2 rounded-sm`}
          key={`paginationButton_${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
      {/* // TODO: fix Next Button rendering bug */}
      {!isLast && <button onClick={(e) => handleNextClick(e)}>Next</button>}
    </div>
  );
}
