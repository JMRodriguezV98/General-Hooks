import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
    const [ counter,setCounter ] = useState( 10 );

    const incrementFunction = useCallback(
      ( value ) => {
        setCounter( ( count ) => count + value );
      },
      [],
    )
    
  
    // const incrementFunction = () => {
    //     setCounter( counter + 1 )
    // }

    return (
    <>
        <h1>useCallback Hook: { counter } </h1>
        <hr />

        <ShowIncrement increment={ incrementFunction }/>
    </>
  )
}
