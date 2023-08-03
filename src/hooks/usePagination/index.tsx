import { SyntheticEvent, useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);

  function handleNumClick(e: SyntheticEvent) {
    const target = e.target as HTMLButtonElement;
    setPage(+target.innerText);
  }

  function handleBackClick() {
    setPage(page - 1);
  }

  function handleNextClick() {
    setPage(page + 1);
  }

  return {
    page,
    handleNumClick,
    handleBackClick,
    handleNextClick,
  };
}
