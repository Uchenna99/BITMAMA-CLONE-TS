import { create } from "zustand";

interface GlobalStateProps{
    userName: string | null;
    setUserName: (user: string)=>void;
}

const useGlobalState = create<GlobalStateProps>((set)=>({
    userName: null,
    setUserName: (userName: string)=>set({userName}),
}));

export default useGlobalState;



// const useStore = create((set) => ({
//     user: null,  // Global state for user
//     setUser: (user) => set({ user }),  // Action to update user
  
//     isLoggedIn: false,
//     setIsLoggedIn: (status) => set({ isLoggedIn: status }),
  
//     // Example of incrementing a counter
//     counter: 0,
//     increment: () => set((state) => ({ counter: state.counter + 1 })),
//     resetCounter: () => set({ counter: 0 }),
//   }));