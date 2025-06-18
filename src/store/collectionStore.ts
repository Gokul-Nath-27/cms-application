import { create } from "zustand";
import { CollectionItem, mockCollections } from "@/data/mockData";

interface Collections {
  collections: CollectionItem[];
  isEditing: boolean;
  actions: {
    setCollections: (collections: CollectionItem[]) => void;
    setEditing: (isEditing: boolean) => void;
    saveRenameCollection: (collections: CollectionItem[]) => void;
    cancelRenameCollection: () => void;
  };
}

const useCollectionsStore = create<Collections>((set) => ({
  collections: mockCollections,
  isEditing: false,
  actions: {
    setCollections: (collections) => set({ collections }),
    setEditing: (isEditing) => set({ isEditing }),
    saveRenameCollection: (collections) => {
      localStorage.setItem('collections', JSON.stringify(collections));
      set({ collections });
    },
    cancelRenameCollection: () => {
      set({ isEditing: false });
      const storedCollections = localStorage.getItem('collections');
      const collections = storedCollections ? JSON.parse(storedCollections) : mockCollections;
      set({ collections });
    },
  }
}));



export const useCollections = () => useCollectionsStore((state) => state.collections);
export const useIsEditing = () => useCollectionsStore((state) => state.isEditing);
export const useCollectionsActions = () => useCollectionsStore((state) => state.actions);