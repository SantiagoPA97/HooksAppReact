import React from 'react'
import { useCounter, useFetch } from '../hooks/index';
import { Quote, LoadingQuote } from './index';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote quote={ quote } author={ author }/>
            }

            <button onClick={ increment } disabled={ isLoading } className='btn btn-primary'>Next quote</button>
            

        </>
    );
}
