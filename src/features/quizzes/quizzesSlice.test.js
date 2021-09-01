import reducer, { addQuiz, selectQuizzes } from "./quizzesSlice";

describe('quizzesSlice state', () => {
    it('should have a state with typeof object', () => {
        const previousState = undefined;
        expect(typeof reducer(previousState, {})).toEqual('object');
    }),

    describe('quizzesSlice reducer', () => {
        it('should return the initial state', () => {
            const previousState = undefined;
            const expectedState = { 
                quizzes: {} 
            };
            expect(reducer(previousState, {})).toEqual(expectedState);
        }), 

        describe('addQuiz action', () => {
            it('should handle a quiz being added to an empty quizzes object', () => {
                const previousState = { 
                    quizzes: {} 
                };
                const expectedState = {
                    quizzes: {
                        '456': {
                            id: '456',
                            topicId: '123',
                            name: 'quiz 1 for example topic1',
                            cardIds: ['1', '2', '3'],
                        }
                    }
                };

                expect(reducer(previousState, addQuiz({ 
                    id: '456',
                    topicId: '123',
                    name: 'quiz 1 for example topic1',
                    cardIds: ['1', '2', '3'],
                }))).toEqual(expectedState);
            }), 

            it('should handle a topic being added to an existing topics object', () => {
                const previousState = {
                    quizzes: {
                        '456': {
                            id: '456',
                            topicId: '123',
                            name: 'quiz 1 for example topic1',
                            cardIds: ['1', '2', '3'],
                        }
                    }
                };
                const expectedState = {
                    quizzes: {
                        '456': {
                            id: '456',
                            topicId: '123',
                            name: 'quiz 1 for example topic1',
                            cardIds: ['1', '2', '3'],
                        }, 
                        '789': {
                            id: '789',
                            topicId: '123',
                            name: 'quiz 2 for example topic1',
                            cardIds: ['4', '5', '6'],
                        }
                    }
                }
                expect(reducer(previousState, addQuiz({ 
                    id: '789',
                    topicId: '123',
                    name: 'quiz 2 for example topic1',
                    cardIds: ['4', '5', '6'],
                }))).toEqual(expectedState);
            })
        })
    }), 

    describe('selectQuizzes selector', () => {
        it('should return correct quizzes after a quiz being added to an empty quizzes object', () => {
            const previousState = { 
                quizzes: {} 
            };
            const expectedState = {
                quizzes: {
                    '456': {
                        id: '456',
                        topicId: '123',
                        name: 'quiz 1 for example topic1',
                        cardIds: ['1', '2', '3'],
                    }
                }
            };

            const newState = reducer(previousState, addQuiz({ 
                id: '456',
                topicId: '123',
                name: 'quiz 1 for example topic1',
                cardIds: ['1', '2', '3'],
            }));
            const rootState = { quizzes: newState };

            expect(selectQuizzes(rootState)).toEqual(expectedState.quizzes);
        })
    })
});