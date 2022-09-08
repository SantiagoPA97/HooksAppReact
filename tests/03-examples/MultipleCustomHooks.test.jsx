import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {

        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true, 
            error: null
        });

        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('MultipleCustomHooks'));
        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({ 
            data: [{ author: 'Santiago', quote: 'Hola mundo'}], 
            isLoading: false, 
            error: null
        });

        render( <MultipleCustomHooks />);
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Santiago')).toBeTruthy();
        expect(screen.getByText('Santiago')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call increment function', () => {

        useFetch.mockReturnValue({ 
            data: [{ author: 'Santiago', quote: 'Hola mundo'}], 
            isLoading: false, 
            error: null
        });


        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });
});