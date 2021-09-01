import React from "react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import NewTopicForm from "./NewTopicForm";

const mockStore = configureStore([]);

describe('<NewTopicForm /> component', () => {
    let store; 
    let component;
    
    beforeEach(() => {
        store = mockStore({
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: [],
                }
            }
        })
        //store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <NewTopicForm />
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