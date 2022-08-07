import { createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestions } from 'services/provider';

type getQuestionsTypes = {
  type: string;
  difficulty: string;
  amount: number;
};

export const getQuestionsByType = createAsyncThunk(
  'trivia/getQuestionsByType',
  async ({ type, difficulty, amount }: getQuestionsTypes, { rejectWithValue }) => {
    try {
      const { data } = await getQuestions({
        type,
        difficulty,
        amount
      });

      return data?.results;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
