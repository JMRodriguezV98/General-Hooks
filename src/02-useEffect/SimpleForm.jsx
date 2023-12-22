import { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [ formState, seTformState ] = useState({
        username: 'mauricio2',
        email: 'mauricio@gmail.com'
    })

    const { username,email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        seTformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        // console.log( 'useEffect called!' );
    },[]);

    useEffect( () => {
        // console.log( 'formState change!' );
    },[ formState ]);

    useEffect( () => {
        // console.log( 'email change!' );
    },[ email ]);
  
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name='username' 
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className='form-control mt-2'
                placeholder='mauricio@gmail.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            {
                username === 'mauricio' && <Message />
            }
    
        </>
  )
}

export default SimpleForm