import { create } from "zustand";

export const useStore = create((set) => ({
  count: 'white',
  inc: () => set((state) => ({ count: 'white' })),
	dec: () => set((state) => ({ count: 'black' })),
}))