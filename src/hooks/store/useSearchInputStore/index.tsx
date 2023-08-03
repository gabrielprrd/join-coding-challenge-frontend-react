import { create } from "zustand";

interface SearchInputStore {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
}

export const useSearchInputStore = create<SearchInputStore>((set) => ({
  searchInput: "",
  setSearchInput: (searchInput) => set({ searchInput }),
}));
