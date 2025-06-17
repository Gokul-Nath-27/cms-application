import { create } from "zustand";

interface SearchStore {
  searchTerm: string;
  actions: {
    setSearchTerm: (searchTerm: string) => void;
  };
}

const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: '',
  actions: {
    setSearchTerm: (searchTerm) => set({ searchTerm }),
  }
}));

export const useSearch = () => useSearchStore((state) => state.searchTerm);
export const useSearchActions = () => useSearchStore((state) => state.actions);