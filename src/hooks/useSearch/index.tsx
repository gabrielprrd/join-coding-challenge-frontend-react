import {
  searchFormSchema,
  SearchFormSchema,
} from "@/models/validations/searchFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { useSearchInputStore } from "../store/useSearchInputStore";

export default function useSearch() {
  const { searchInput, setSearchInput } = useSearchInputStore();
  const searchInputHint = useId();

  const createSearchForm = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "",
    },
  });

  const { getValues } = createSearchForm;

  function search() {
    const searchValue = getValues("search") || "";
    setSearchInput(searchValue);
  }

  return {
    search,
    searchInputHint,
    createSearchForm,
    searchInput,
  };
}
