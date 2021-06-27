import { useCallback, useState } from "react";

export function useModal() {
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => setShow((state) => !state), [setShow]);

  return {
    show,
    setShow,
    toggle,
  };
}
