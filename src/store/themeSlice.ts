import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string;
}

const initialTheme = localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: initialTheme } as ThemeState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
