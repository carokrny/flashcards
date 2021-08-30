import reducer, { addTopic, selectTopics } from "./topicsSlice.js";

describe('topicsSlice state', () => {
    it('should have object typeof state', () => {
        const previousState = undefined;
        expect(typeof reducer(previousState, {})).toEqual('object');
    }), 

    describe('topicsSlice reducer', () => {
        it('should return the initial state', () => {
            const previousState = undefined;
            const expectedState = { 
                topics: {} 
            };
            expect(reducer(previousState, {})).toEqual(expectedState);
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

                expect(reducer(previousState, addTopic({ 
                    id: '123', 
                    name: 'example topic1', 
                    icon: 'icon url1', 
                    quizIds: [],
                }))).toEqual(expectedState);
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
                expect(reducer(previousState, addTopic({ 
                    id: '456', 
                    name: 'example topic2', 
                    icon: 'icon url2', 
                    quizIds: [],
                }))).toEqual(expectedState);
            })
        })
    }), 

    describe('selectTopics selector', () => {
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

            const newState = reducer(previousState, addTopic({ 
                id: '123', 
                name: 'example topic1', 
                icon: 'icon url1', 
                quizIds: [],
            }));
            const rootState = { topics: newState };

            expect(selectTopics(rootState)).toEqual(expectedState.topics);
        })
    })
});



