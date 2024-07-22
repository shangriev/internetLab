import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface InterviewedItemType {
    title: string;
    description: string;
}

interface InterviewedState {
    interviewed: InterviewedItemType[];
    status: 'idle' | 'loading' | 'succeeded' | 'error loading Interviewed';
    error: string | null;
}

export const fetchInterviewed = createAsyncThunk<InterviewedItemType[]>('interviewed/fetchInterviewed', async () => {
    const response = await fetch('http://localhost:3001/interviewed');
    if (!response.ok) {
        throw new Error('Ошибка загрузки раздела Опрошенных');
    }
    return response.json();
});

const initialState: InterviewedState = {
    interviewed: [],
    status: 'idle',
    error: null,
};

const interviewedSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchInterviewed.pending, state => {
            state.status = 'loading';
        });

        builder.addCase(fetchInterviewed.fulfilled, (state, action: PayloadAction<InterviewedItemType[]>) => {
            state.status = 'succeeded';
            state.interviewed = action.payload;
        });

        builder.addCase(fetchInterviewed.rejected, (state, action) => {
            state.status = 'error loading Interviewed';
            state.error = action.error.message || null;
        });
    },
});

export default interviewedSlice.reducer;
