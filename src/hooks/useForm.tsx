import { useState } from 'react';
import { formInputProps } from '../interfaces';



export const useForm = (initialForm:formInputProps = { name:"", lastName:"" }) => {

    const [formState, setFormState] = useState<formInputProps>(initialForm);

    const onInputChange = ( event:any ) => {
        
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });        
    }

    const onReset = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
    }
}

