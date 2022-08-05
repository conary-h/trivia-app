import { createSlice } from '@reduxjs/toolkit';
import { getQuestionsByType } from './Trivia.thunks';

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    status: 'idle',
    error: null,
    questions: {},
    undoStack: {}
  },
  reducers: {
    setCurrentQuestion({ questions }, { payload }) {
      questions = payload;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getQuestionsByType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestionsByType.fulfilled, (state, { payload }) => {
        state.status = 'done';

        console.log('[ayload', payload);

        state.questions = payload;
      })
      .addCase(getQuestionsByType.rejected, (state) => {
        state.status = 'rejected';
      })
});

export const { setCurrentQuestion } = triviaSlice.actions;

export default triviaSlice.reducer;
