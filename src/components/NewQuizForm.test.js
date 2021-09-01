import React from "react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import NewQuizForm from "./NewQuizForm";

const mockStore = configureStore([]);

describe('<NewQuizForm /> component', () => {
    let store; 
    let component;
    
    beforeEach(() => {
        store = mockStore({
            topics: {
                topics: {
                    '123': {
                        id: '123',
                        name: 'example topic1',
                        icon: 'icon url1',
                        quizIds: ['456'],
                    }
                } 
            },
            quizzes: {
                quizzes: {
                    '456': {
                        id: '456',
                        topicId: '123',
                        name: 'quiz 1 for example topic1',
                        cardIds: ['1', '2', '3'],
                    }
                }
            }
        })

        component = renderer.create(
            <Provider store={store}>
                <NewQuizForm />
            </Provider>
        )
    }),

    describe('rendering', () => {
        it('should render the component without crashing', () => {
            expect(component.toJSON()).toBeTruthy();
        }),
        
        it('should render with given state from Redux store', () => {
            expect(component.toJSON()).toMatchSnapshot();
        }),

        it('should render a form', () => {
            expect(component.root.findByType('form')).toBeTruthy();
        })
    })

});
