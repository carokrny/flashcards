import { createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = {
    cards: {}
}

// create slice of cards state
const cardsSlice = createSlice({
    name: "cards", 
    initialState: initialState, 
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

// define and export selector(s) 
export const selectCards = state => state.cards.cards;

// export action(s)
export const { addCard } = cardsSlice.actions;

// export reducer 
export default cardsSlice.reducer;