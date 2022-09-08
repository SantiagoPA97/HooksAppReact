import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Tests in todoReucer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('should return the initial state', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should add a todo', () => {

        const action = {
            type: '[TODO] Add TODO',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should delete a todo', () => {

        const action = {
            type: '[TODO] Remove TODO',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('should toggle the todo', () => {

        const action = {
            type: '[TODO] Toggle TODO',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});