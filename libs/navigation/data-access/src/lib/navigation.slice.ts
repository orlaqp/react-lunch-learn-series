import { createSlice } from '@reduxjs/toolkit';
import { NavigationState } from './definitions';

const initialState: NavigationState = {
    sidebarOpen: true
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openSidebar: (state) => ({ ...state, sidebarOpen: true }),
    closeSidebar: (state) => ({ ...state, sidebarOpen: false })
  },
});
