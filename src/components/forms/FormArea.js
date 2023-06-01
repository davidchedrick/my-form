import { FormDisplay } from "./FormDisplay";
import { Inputs } from "./Inputs";
import useForm from "./useForm";
import "./form.css";

export default function FormArea() {
	const initialState = {
		name: "",
		number: 0,
	};
	const { formState, handleChange, handleSubmit } = useForm(initialState);
	const { name, number } = formState;

	return (
		<div className="form-area">
			<Inputs
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				name={name}
				number={number}
			/>
			<FormDisplay
				name={name}
				number={number}
			/>
		</div>
	);
}
