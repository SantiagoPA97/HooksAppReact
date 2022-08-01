export const ShowIncrement = ({ increment }) => {

    console.log('Me volvi a generar');
    
    return (
        <button onClick={ () => { increment() } } className='btn btn-primary'>Increment</button>
    )
}
