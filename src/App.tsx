import { type FormEvent, useState } from "react";
import "./App.css";
import { TextInput } from "./assets/text-input.tsx";

function App() {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    setIsFormValid(event.currentTarget.checkValidity());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    event.currentTarget.reset();
  };

  return (
    <>
      <h1>Form validation</h1>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <TextInput />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
