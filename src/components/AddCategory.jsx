import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
       setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //Para evitar que se recargue el formulario
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )

}