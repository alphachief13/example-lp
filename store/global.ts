import { create } from "zustand";

export interface GlobalState {
  isHeaderMenuOpen: boolean;
  isHeaderOnScreen: boolean;
}

export interface GlobalAction {
  setIsHeaderMenuOpen: (isHeaderMenuOpen: boolean) => void;
  setIsHeaderOnScreen: (isHeaderOnScreen: boolean) => void;
}

export type GlobalStore = GlobalState & GlobalAction;

export const useGlobal = create<GlobalStore>((set) => ({
  isHeaderMenuOpen: false,
  isHeaderOnScreen: false,
  setIsHeaderMenuOpen: (isHeaderMenuOpen) => set({ isHeaderMenuOpen }),
  setIsHeaderOnScreen: (isHeaderOnScreen) => set({ isHeaderOnScreen }),
}));
