import { useState, useEffect } from "react";

export const useMouseTrack = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [mouseClick, setMouseClick] = useState(false);

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  const updateMouseClick = (ev) => {
    setMouseClick(true);
    setMouseClick(false);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("mousedown", updateMouseClick);

      return () => window.removeEventListener("mousedown", updateMouseClick);
    }
  }, []);

  return { mousePosition, mouseClick };
};
