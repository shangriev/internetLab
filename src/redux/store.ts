import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './slices/rewiewsSlice';
import faqReducer from './slices/faqSlice';
import interviewedReducer from './slices/interviewedSlice';

const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        faq: faqReducer,
        interviewed: interviewedReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
