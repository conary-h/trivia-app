import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { decode } from 'html-entities';
import { getQuestionsByType } from './Trivia.thunks';
import { sanitizeBoolean } from 'utils/helpers';

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    status: 'idle',
    error: null,
    questions: [],
    undoStack: {},
    currentQuestionIndex: 0,
    totalQuestionsCount: 0,
    correctAnswersCount: 0
  },
  reducers: {
    setAnswer(state, { payload }) {
      const { answer } = payload;
      const { questions, currentQuestionIndex } = state;
      const currentQuestion = questions[currentQuestionIndex];

      if (answer === currentQuestion?.correct_answer) {
        state.correctAnswersCount = state.correctAnswersCount + 1;
      }

      currentQuestion.picked_answer = answer;
    },
    setQuestionIndex(state, { payload }) {
      state.currentQuestionIndex = payload;
    },
    resetGameState(state) {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.totalQuestionsCount = 0;
      state.correctAnswersCount = 0;
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
          question.id = uuidv4();
          question.question = decode(question.question);
          question.correct_answer = sanitizeBoolean(question.correct_answer);
          question.incorrect_answers = sanitizeBoolean(question.incorrect_answers[0]);
        });

        state.questions = payload;
        state.totalQuestionsCount = payload.length;
      })
      .addCase(getQuestionsByType.rejected, (state) => {
        state.status = 'rejected';
      })
});

export const { setAnswer, setQuestionIndex, resetGameState } = triviaSlice.actions;

export default triviaSlice.reducer;
