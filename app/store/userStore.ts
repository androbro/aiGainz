﻿// app/store/userStore.ts
import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
}

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}));

export default useUserStore;