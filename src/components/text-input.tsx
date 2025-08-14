import { useRef } from "react";

export function TextInput() {
  const ref = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   // Example of setting a custom validity message
  //   ref.current?.setCustomValidity("never valid");
  // });

  return (
    <>
      <input ref={ref} id="textInput" type="text" required />
    </>
  );
}
