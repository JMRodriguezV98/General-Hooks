import { useState } from "react";

const useForm = ( initialForm = {} ) => {
  
    const [ formState, seTformState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        seTformState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        seTformState( initialForm );
    }


    return{
        //es posible sacar los valores que estaban en el objeto con el operador spread
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm