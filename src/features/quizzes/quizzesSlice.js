import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

// define initial state 
const initialState = {
    quizzes: {}
}

// create slice 
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        },
    },
});

// add and export selector(s)
export const selectQuizzes = state => state.quizzes.quizzes;

// export action(s)
export const { addQuiz } = quizzesSlice.actions;

// create a thunk to handle quiz-adding actions in both quizzesSlice and topicsSlice
export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({ 
            quizId: payload.id, 
            topicId: payload.topicId 
        }));
    };
};

// export reducer
export default quizzesSlice.reducer;