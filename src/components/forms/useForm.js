import { useState } from "react";

export default function useForm(initialState) {
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return { formState, handleChange, handleSubmit };
}
