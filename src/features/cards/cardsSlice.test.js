import reducer, { selectCards, addCard } from "./cardsSlice";

describe('cardsSlice state', () => {
    it('should have a state with typeof object', () => {
        const previousState = undefined;
        expect(typeof reducer(previousState, {})).toEqual('object');
    }), 

    describe('cardsSlice reducer', () => {
        it('should return the initial state', () => {
            const previousState = undefined;
            const expectedState = { 
                cards: {} 
            };
            const resultState = reducer(previousState, {});
            expect(resultState).toEqual(expectedState);
        }), 

        describe('addCard action', () => {
            it('should handle a card being added to an empty cards object', () => {
                const previousState = { 
                    cards: {} 
                };
                const expectedState = {
                    cards: {
                        '101': {
                            id: '101',
                            front: 'front text',
                            back: 'back text',
                        }
                    }
                };
                const resultState = reducer(previousState, addCard({ 
                    id: '101',
                    front: 'front text',
                    back: 'back text',
                }));
                expect(resultState).toEqual(expectedState);
            }), 

            it('should handle a card being added to an existing cards object', () => {
                const previousState = {
                    cards: {
                        '101': {
                            id: '101',
                            front: 'front text',
                            back: 'back text',
                        }
                    }
                };
                const expectedState = {
                    cards: {
                        '101': {
                            id: '101',
                            front: 'front text',
                            back: 'back text',
                        }, 
                        '102': {
                            id: '102',
                            front: 'front text',
                            back: 'back text',
                        }
                    }
                }
                const resultState = reducer(previousState, addCard({ 
                    id: '102',
                    front: 'front text',
                    back: 'back text',
                }));
                expect(resultState).toEqual(expectedState);
            })
        })
    }), 

    describe('selectCards selector', () => {
        it('should return an empty object when called on the initial state', () => {
            const previousState = undefined;
            const expectedState = {
                cards: {}
            }
            const newState = reducer(previousState, {});
            const rootState = { cards: newState };
            expect(selectCards(rootState)).toEqual(expectedState.cards);
        }), 

        it('should return correct cards when cards holds an object', () => {
            const previousState = { 
                cards: {
                    '101': {
                        id: '101',
                        front: 'front text',
                        back: 'back text',
                    },
                    '102': {
                        id: '102',
                        front: 'front text',
                        back: 'back text',
                    },
                    '103': {
                        id: '103',
                        front: 'front text',
                        back: 'back text',
                    },
                }
            };
            const expectedState = {
                cards: {
                    '101': {
                        id: '101',
                        front: 'front text',
                        back: 'back text',
                    },
                    '102': {
                        id: '102',
                        front: 'front text',
                        back: 'back text',
                    },
                    '103': {
                        id: '103',
                        front: 'front text',
                        back: 'back text',
                    },
                }
            };
            const newState = reducer(previousState, {});
            const rootState = { cards: newState };
            expect(selectCards(rootState)).toEqual(expectedState.cards);
        }), 

        it('should return correct cards when state also holds topics and quizzes', () => {
            const previousState = { 
                topics: {
                    '123': {
                        id: '123',
                        name: 'example topic1',
                        icon: 'icon url1',
                        quizIds: ['456'],
                    }
                }, 
                quizzes: {
                    '456': {
                        id: '456',
                        topicId: '123',
                        name: 'quiz 1 for example topic1',
                        cardIds: ['101', '102', '103'],
                    }
                }, 
                cards: {
                    '101': {
                        id: '101',
                        front: 'front text',
                        back: 'back text',
                    },
                    '102': {
                        id: '102',
                        front: 'front text',
                        back: 'back text',
                    },
                    '103': {
                        id: '103',
                        front: 'front text',
                        back: 'back text',
                    },
                }
            };
            const expectedState = {
                topics: {
                    '123': {
                        id: '123',
                        name: 'example topic1',
                        icon: 'icon url1',
                        quizIds: ['456'],
                    }
                }, 
                quizzes: {
                    '456': {
                        id: '456',
                        topicId: '123',
                        name: 'quiz 1 for example topic1',
                        cardIds: ['101', '102', '103'],
                    }
                }, 
                cards: {
                    '101': {
                        id: '101',
                        front: 'front text',
                        back: 'back text',
                    },
                    '102': {
                        id: '102',
                        front: 'front text',
                        back: 'back text',
                    },
                    '103': {
                        id: '103',
                        front: 'front text',
                        back: 'back text',
                    },
                }
            };
            const newState = reducer(previousState, {});
            const rootState = { cards: newState };
            expect(selectCards(rootState)).toEqual(expectedState.cards);
        })
    })
});



