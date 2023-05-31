import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // 'userWidget': userWidgetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;