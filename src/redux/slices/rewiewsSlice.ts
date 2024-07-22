import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface reviewsItemType {
    image: string;
    name: string;
    city: string;
    feedback: string;
}

interface reviewsState {
    reviews: reviewsItemType[];
    status: 'idle' | 'loading' | 'succeeded' | 'error loading reviews';
    error: string | null;
}

export const fetchReviews = createAsyncThunk<reviewsItemType[]>('reviews/fetchReviews', async () => {
    const response = await fetch('http://localhost:3001/reviews');
    if (!response.ok) {
        throw new Error('Ошибка загрузки раздела отзывов');
    }
    return response.json();
});

const initialState: reviewsState = {
    reviews: [],
    status: 'idle',
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchReviews.pending, state => {
            state.status = 'loading';
        });

        builder.addCase(fetchReviews.fulfilled, (state, action: PayloadAction<reviewsItemType[]>) => {
            state.status = 'succeeded';
            state.reviews = action.payload;
        });

        builder.addCase(fetchReviews.rejected, (state, action) => {
            state.status = 'error loading reviews';
            state.error = action.error.message || null;
        });
    },
});

export default reviewsSlice.reducer;
