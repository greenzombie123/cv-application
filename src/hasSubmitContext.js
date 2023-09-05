import { createContext } from "react";
import { useState } from "react";

export const useHasSubmit = () => {
  const [hasSubmit, setHasSubmit] = useState(true);

  const HasSubmitContext = createContext(hasSubmit);

  return { hasSubmit, setHasSubmit, HasSubmitContext };
};
