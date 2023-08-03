import BikesList from "@/components/BikesList";
import { BikesService } from "@/services/BikesService";
import { SyntheticEvent, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../Pagination";

type SearchInputElement = {
  search: {
    value: string;
  };
} & HTMLInputElement;

export default function BikesTable() {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: bikes,
    isLoading: isLoadingBikes,
    isFetching: isFetchingBikes,
    isError: isErrorBikes,
  } = useQuery({
    queryKey: ["bikes", searchInput, page],
    queryFn: () => BikesService.getMany(page, searchInput),
  });

  const {
    data: count,
    isLoading: isLoadingCount,
    isFetching: isFetchingCount,
    isError: isErrorCount,
  } = useQuery({
    queryKey: ["count", searchInput],
    queryFn: () => BikesService.count(searchInput),
  });

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const target = event.target as SearchInputElement;
    setSearchInput(target.search.value);
  }

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

  // TODO: Reduce component's size
  return (
    <div className="h-full w-full flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full items-center"
      >
        <input
          name="search"
          id="search"
          placeholder="Search case descriptions"
          className="border-2 border-gray-200 p-2 rounded-sm w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-sm shadow-sm"
        >
          Search
        </button>
      </form>

      {/* Count */}
      <div className="flex justify-end">
        Total: {isLoadingCount || isFetchingCount ? "Loading..." : count}
        {isErrorCount && "Error while getting the total"}
      </div>

      {/* Bikes list */}
      {isLoadingBikes && (
        <Center>
          <h1>Loading...</h1>
        </Center>
      )}

      {isErrorBikes && (
        <Center>
          <h1>An error ocurred while getting the bikes list.</h1>
        </Center>
      )}

      {bikes?.length === 0 && (
        <Center>
          <h1>No results.</h1>
        </Center>
      )}

      {bikes?.length > 0 && <BikesList bikes={bikes} />}

      {isFetchingBikes ||
        (isLoadingBikes && (
          <Center>
            <h1>Loading...</h1>
          </Center>
        ))}

      {bikes?.length > 0 && !(isFetchingBikes || isLoadingBikes) && (
        <Center>
          <Pagination
            pages={Math.floor(count / bikes.length)}
            current={page}
            handleNumClick={(e) => handleNumClick(e)}
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
        </Center>
      )}
    </div>
  );
}
