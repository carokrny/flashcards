import reducer, { addTopic, addQuizId, selectTopics } from "./topicsSlice.js";

describe('topicsSlice state', () => {
    it('should have a state with typeof object', () => {
        const previousState = undefined;
        expect(typeof reducer(previousState, {})).toEqual('object');
    }), 

    describe('topicsSlice reducer', () => {
        it('should return the initial state', () => {
            const previousState = undefined;
            const expectedState = { 
                topics: {} 
            };
            const resultState = reducer(previousState, {});
            expect(resultState).toEqual(expectedState);
        }),

        describe('addTopic action', () => {
            it('should handle a topic being added to an empty topics object', () => {
                const previousState = { 
                    topics: {} 
                };
                const expectedState = {
                    topics: {
                        '123': {
                            id: '123',
                            name: 'example topic1',
                            icon: 'icon url1',
                            quizIds: [],
                        }
                    }
                };
                const resultState = reducer(previousState, addTopic({ 
                    id: '123', 
                    name: 'example topic1', 
                    icon: 'icon url1', 
                    quizIds: [],
                }));
                expect(resultState).toEqual(expectedState);
            }), 

            it('should handle a topic being added to an existing topics object', () => {
                const previousState = {
                    topics: {
                        '123': {
                            id: '123',
                            name: 'example topic1',
                            icon: 'icon url1',
                            quizIds: [],
                        }
                    }
                };
                const expectedState = {
                    topics: {
                        '123': {
                            id: '123',
                            name: 'example topic1',
                            icon: 'icon url1',
                            quizIds: [],
                        }, 
                        '456': {
                            id: '456', 
                            name: 'example topic2', 
                            icon: 'icon url2', 
                            quizIds: [],
                        },
                    }
                }
                const resultState = reducer(previousState, addTopic({ 
                    id: '456', 
                    name: 'example topic2', 
                    icon: 'icon url2', 
                    quizIds: [],
                }));
                expect(resultState).toEqual(expectedState);
            }),

            describe('addQuizId action', () => {
                it('Adds a quiz id to empty quizIds array', () => {
                    const previousState = {
                        topics: {
                            '123': {
                                id: '123',
                                name: 'example topic1',
                                icon: 'icon url1',
                                quizIds: [],
                            }, 
                            '456': {
                                id: '456', 
                                name: 'example topic2', 
                                icon: 'icon url2', 
                                quizIds: [],
                            },
                        }
                    }
                    const expectedState = {
                        topics: {
                            '123': {
                                id: '123',
                                name: 'example topic1',
                                icon: 'icon url1',
                                quizIds: ['456'],
                            }, 
                            '456': {
                                id: '456', 
                                name: 'example topic2', 
                                icon: 'icon url2', 
                                quizIds: [],
                            },
                        }
                    }
                    const resultState = reducer(previousState, addQuizId({ 
                        quizId: '456',
                        topicId: '123',
                    }));
                    expect(resultState).toEqual(expectedState);
                }), 

                it('Adds a quiz id to empty quizIds array', () => {
                    const previousState = {
                        topics: {
                            '123': {
                                id: '123',
                                name: 'example topic1',
                                icon: 'icon url1',
                                quizIds: ['456'],
                            }, 
                            '456': {
                                id: '456', 
                                name: 'example topic2', 
                                icon: 'icon url2', 
                                quizIds: ['123'],
                            },
                        }
                    }
                    const expectedState = {
                        topics: {
                            '123': {
                                id: '123',
                                name: 'example topic1',
                                icon: 'icon url1',
                                quizIds: ['456', '789'],
                            }, 
                            '456': {
                                id: '456', 
                                name: 'example topic2', 
                                icon: 'icon url2', 
                                quizIds: ['123'],
                            },
                        }
                    }
                    const resultState = reducer(previousState, addQuizId({ 
                        quizId: '789',
                        topicId: '123',
                    }));
                    expect(resultState).toEqual(expectedState);
                })
            })
        })
    }), 

    describe('selectTopics selector', () => {
        it('should return an empty object when called on the initial state', () => {
            const previousState = undefined;
            const expectedState = {
                topics: {}
            }
            const newState = reducer(previousState, {});
            const rootState = { topics: newState };
            expect(selectTopics(rootState)).toEqual(expectedState.topics);
        }), 

        it('should return correct topics when topics holds an object', () => {
            const previousState = { 
                topics: {
                    '123': {
                        id: '123',
                        name: 'example topic1',
                        icon: 'icon url1',
                        quizIds: [],
                    }
                }
            };
            const expectedState = {
                topics: {
                    '123': {
                        id: '123',
                        name: 'example topic1',
                        icon: 'icon url1',
                        quizIds: [],
                    }, 
                    '456': {
                        id: '456', 
                        name: 'example topic2', 
                        icon: 'icon url2', 
                        quizIds: [],
                    },
                }
            };
            const newState = reducer(previousState, addTopic({ 
                id: '456', 
                name: 'example topic2', 
                icon: 'icon url2', 
                quizIds: [],
            }));
            const rootState = { topics: newState };
            expect(selectTopics(rootState)).toEqual(expectedState.topics);
        }), 

        it('should return correct topics when state also holds quizzes', () => {
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
                        cardIds: ['1', '2', '3'],
                    }
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
                        cardIds: ['1', '2', '3'],
                    }
                }
            };
            const newState = reducer(previousState, {});
            const rootState = { topics: newState };
            expect(selectTopics(rootState)).toEqual(expectedState.topics);
        })
    })
});



