import useForm from '../../hooks/useForm'

export const TodoAdd = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo( newTodo );
        onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input
            type="text" 
            placeholder="Que hay que hacer?"
            className="form-control"
            name="description"
            onChange={ onInputChange }
            value={ description }
        />

        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar 
        </button>

    </form>
  )
}
