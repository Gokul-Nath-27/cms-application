import { create } from "zustand";
import { CollectionItem, mockCollections } from "@/data/mockData";

interface Collections {
  collections: CollectionItem[];
  actions: {
    setCollections: (collections: CollectionItem[]) => void;
  };
}

const useCollectionsStore = create<Collections>((set) => ({
  collections: mockCollections,
  actions: {
    setCollections: (collections) => set({ collections }),
  }
}));

export const useCollections = () => useCollectionsStore((state) => state.collections);
export const useCollectionsActions = () => useCollectionsStore((state) => state.actions);