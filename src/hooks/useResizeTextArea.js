import { useRef } from "react";

export const useResizeTextarea = () => {
  const textareaRef = useRef(null);

  function resizeTextarea() {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }

  return { textareaRef, resizeTextarea };
};
