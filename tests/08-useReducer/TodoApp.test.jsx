const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/hooks/useTodos");

jest.mock('../../src/hooks/useTodos');

useTodos

describe('Tests in TodoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ],
        handleNewTodo: jest.fn(),
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1
    });

    test('should show the component properly', () => {

        render(<TodoApp />);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});