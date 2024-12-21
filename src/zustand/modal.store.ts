import React from "react";
import { create } from "zustand";

type ModalStoreState = {
  modal: React.ReactElement | null;
  openModal: (modal: React.ReactElement) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStoreState>((set) => ({
  modal: null,
  openModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: null }),
}));
