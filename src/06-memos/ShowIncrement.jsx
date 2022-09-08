export const ShowIncrement = ({ increment }) => {    
    return (
        <button onClick={ () => { increment() } } className='btn btn-primary'>Increment</button>
    )
}
