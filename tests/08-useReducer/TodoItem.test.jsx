import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Tests in <TodoItem />>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('should show pending Todo', () => {
        
        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />);
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center false');
    });

    test('should show completed Todo', () => {

        todo.done = true;

        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center text-decoration-line-through');
    });

    test('should call ToggleTodo when click', () => {
        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('should call DeleteTodo when click', () => {
        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});