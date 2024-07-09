type ButtonPropsType = {
  handleSave: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = ({handleSave, name}: ButtonPropsType) => {
  const callBackHandler = () => {
    handleSave()
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {name}
    </button>
  );
};
