import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface FaqItemType {
    question: string;
    answer: string;
}

interface FaqState {
    faq: FaqItemType[];
    status: 'idle' | 'loading' | 'succeeded' | 'error loading faq';
    error: string | null;
}

export const fetchFaq = createAsyncThunk<FaqItemType[]>('faq/fetchFaq', async () => {
    const response = await fetch('http://localhost:3001/faq');
    if (!response.ok) {
        throw new Error('Ошибка загрузки раздела FAQ');
    }
    return response.json();
});

const initialState: FaqState = {
    faq: [],
    status: 'idle',
    error: null,
};

const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchFaq.pending, state => {
            state.status = 'loading';
        });

        builder.addCase(fetchFaq.fulfilled, (state, action: PayloadAction<FaqItemType[]>) => {
            state.status = 'succeeded';
            state.faq = action.payload;
        });

        builder.addCase(fetchFaq.rejected, (state, action) => {
            state.status = 'error loading faq';
            state.error = action.error.message || null;
        });
    },
});

export default faqSlice.reducer;
