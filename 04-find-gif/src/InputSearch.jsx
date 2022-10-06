import { useState } from "react";


export const InputSearch = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState()


  const onChange = ({ target }) => {
    if (target.value.trim() === 0) return;
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    onNewCategory(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={onChange}
        value={inputValue}
      />
    </form>
  )
}
