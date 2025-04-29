import { create } from 'zustand';

const useResumeStore = create((set) => ({
  resumes: [], // Start with an empty array

  addResume: (title) =>
    set((state) =>({
      resumes: [
        ...state.resumes,
        { id: Date.now(), title }, // Unique ID & user-defined title
      ],
    })),
}));

export default useResumeStore;
