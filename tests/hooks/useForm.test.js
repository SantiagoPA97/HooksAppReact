const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../src/hooks/useForm");

describe('Tests in useForm', () => {

    const initialForm = {
        name: 'Santiago',
        email: 'santiago@google.com'
    }

    test('should return the default data', () => {
        const { result } = renderHook( () => useForm( initialForm )); 
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });
    
    test('should change the form name', () => {
        const newName = 'TestName';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange( { target: { name: 'name', value: newName }});
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    });

    test('should reset the form to the initialState', () => {
        const newName = 'TestName';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;
        
        act( () => {
            onInputChange( { target: { name: 'name', value: newName }});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});