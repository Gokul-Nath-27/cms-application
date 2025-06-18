import { create } from "zustand";
import { CollectionItem, mockCollections } from "@/data/mockData";

interface Collections {
  collections: CollectionItem[];
  isEditing: boolean;
  actions: {
    setCollections: (collections: CollectionItem[]) => void;
    setEditing: (isEditing: boolean) => void;
    saveRenameCollection: () => void;
    cancelRenameCollection: () => void;
    renameCollection: (id: number, newTitle: string) => void;
  };
}

const useCollectionsStore = create<Collections>((set, get) => ({
  collections: mockCollections,
  isEditing: false,
  actions: {
    setCollections: (collections) => set({ collections }),
    setEditing: (isEditing) => set({ isEditing }),
    renameCollection: (id, newTitle) => {
      set((state) => ({
        collections: state.collections.map((collection) =>
          collection.id === id ? { ...collection, title: newTitle } : collection
        ),
      }));
    },
    saveRenameCollection: () => {
      const currentCollections = get().collections;
      localStorage.setItem('collections', JSON.stringify(currentCollections));
      set({ isEditing: false });
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