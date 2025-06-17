import { MediaType } from "@/data/mockData";
import { create } from "zustand";

type TabItem = { name: string, type: MediaType | 'all' };

export const tabs: TabItem[] = [
  { name: 'All Files', type: 'all' },
  { name: 'Photos', type: 'photo' },
  { name: 'Videos', type: 'video' },
  { name: 'Documents', type: 'doc' },
];


type TabNavigation = {
  activeTab: TabItem;
  actions: {
    setActiveTab: (tab: TabItem) => void;
  };
};

const useTabNavigationStore = create<TabNavigation>((set) => ({
  activeTab: tabs[0],
  actions: {
    setActiveTab: (tab) => set({ activeTab: tab }),
  }
}));

export const useActiveTab = () => useTabNavigationStore((state) => state.activeTab);
export const useTabActions = () => useTabNavigationStore((state) => state.actions);