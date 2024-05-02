import { create } from "zustand";

export const userStore = create({
    userInfo: {},
    addUserInfo: (newUserInfo) => set((state) => ({userInfo: newUserInfo})),
    deleteUserInfo: () => set((state) => ({userInfo: {}}))
})