import { createContext } from "react";
import { useState } from "react";

export const useHasSubmit = () => {
  const [hasSubmit, setHasSubmit] = useState(false);

  const HasSubmitContext = createContext(hasSubmit);

  return { hasSubmit, setHasSubmit, HasSubmitContext };
};
