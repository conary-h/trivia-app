import { createSlice } from '@reduxjs/toolkit';
import { getQuestions } from './Trivia.thunks';

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    status: 'idle',
    error: null,
    questions: { current: 0 },
    undoStack: {}
  },
  reducers: {
    setCurrentQuestion({ questions }, { payload }) {
      questions.current = payload;
    }
  },
  extraReducers: (builder) =>
    builder

      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        state.status = 'done';

        state.questions = payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.status = 'rejected';
      })
});

export const { setCurrentQuestion } = triviaSlice.actions;

export default triviaSlice.reducer;
