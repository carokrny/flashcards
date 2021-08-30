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
    },
});

// add selector(s)
export const selectTopics = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;