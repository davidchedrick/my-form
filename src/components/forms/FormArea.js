import { FormDisplay } from "../home/FormDisplay";
import { Inputs } from "./Inputs";
import useForm from "./useForm";

export default function FormArea() {
    const initialState = {
        name: "",
        number: 0,
    };
    const { formState, handleChange, handleSubmit } = useForm(initialState);
    const { name, number } = formState;

    return (
        <>
            <Inputs
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={name}
                number={number}
            />
            <FormDisplay name={name} number={number} />
        </>
    );
}
