const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('Tests in useCounter', () => { 

    test('should return the default values', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;
        
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should return 100 if i passed the counter initial value as 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        
        expect(counter).toBe(100);
    });

    test('should increment the counter', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;
        
        act( () => {
            increment();
        });

        expect(result.current.counter).toBe(11);
    });

    test('should decrement the counter', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;
        
        act( () => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);
    });

    test('should reset the counter value', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;
        
        act( () => {
            increment();
            increment();
            increment();
            reset();
        });

        expect(result.current.counter).toBe(10);
    });
})