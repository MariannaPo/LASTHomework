import { ChangeEvent } from "react";

type InputPropsType = {
	currentText: any// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText:any // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({currentText, setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
