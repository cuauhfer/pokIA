import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) => {
        const { name, value, type } = target;
        setValues({
            ...values,
            [name]: typeParser(type, value)
        });
    }

    const typeParser = (type, value) => {
        switch (type){
            case 'number':
                return Number(value);
            default:
                return value;
        }
    }
    
    return [ values, handleInputChange, reset ];
}
