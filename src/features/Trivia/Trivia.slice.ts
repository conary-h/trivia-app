import { createSlice } from '@reduxjs/toolkit';
import { getQuestionsByType } from './Trivia.thunks';
import { sanitizeBoolean } from 'utils/helpers';

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    status: 'idle',
    error: null,
    questions: {},
    undoStack: {},
    currentQuestionIndex: 0
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

        payload.forEach((question) => {
          question.correct_answer = sanitizeBoolean(question.correct_answer);
          question.incorrect_answers = sanitizeBoolean(question.incorrect_answers[0]);
        });

        state.questions = payload;
      })
      .addCase(getQuestionsByType.rejected, (state) => {
        state.status = 'rejected';
      })
});

export const { setCurrentQuestion } = triviaSlice.actions;

export default triviaSlice.reducer;
