import { createSlice } from '@reduxjs/toolkit';

// define initial state 
const  initialState = {
    topics: {}
};

// create slice 
const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id, 
                name: name, 
                icon: icon, 
                quizIds: [],
            }; 
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    },
});

// add and export selector(s)
export const selectTopics = state => state.topics.topics;

// export action(s)
export const { addTopic, addQuizId } = topicsSlice.actions;

// export reducer
export default topicsSlice.reducer;