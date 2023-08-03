import BikesList from "@/components/BikesList";
import usePagination from "@/hooks/usePagination";
import { BikesService } from "@/services/BikesService";
import { useQuery } from "react-query";
import Center from "@/components/Center";
import Pagination from "@/components/Pagination";
import SearchBikesForm from "../SearchBikesForm";
import useSearch from "@/hooks/useSearch";

export default function BikesTable() {
  const { page, handleNumClick, handleBackClick, handleNextClick } =
    usePagination();
  const { searchInput } = useSearch();

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

  return (
    <div className="h-full w-full flex flex-col gap-5">
      <SearchBikesForm />

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
