import { createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestionsByType } from 'services/provider';

type getQuestionsTypes = {
  type: string;
  difficulty: string;
  amount: number;
};

export const getQuestions = createAsyncThunk(
  'trivia/getQuestions',
  async ({ type, difficulty, amount }: getQuestionsTypes, { rejectWithValue }) => {
    try {
      const { data, status } = await getQuestionsByType({
        type,
        difficulty,
        amount
      });

      if (status === 200) {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
