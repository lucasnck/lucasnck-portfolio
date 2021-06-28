import React, { useEffect, useRef, useState, useCallback } from "react";
import { SmoothScrollStyle } from "./style";

interface IWindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState<IWindowSize | undefined>();

  useEffect(() => {
    setWindowSize(getSize());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();

  const scrollingContainerRef = useRef<HTMLHeadingElement>();

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
  };

  useEffect(() => {
    if (windowSize && windowSize.height) {
      setBodyHeight();
    }
  }, [windowSize]);

  const smoothScrollingHandler = useCallback(() => {
    const data = {
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    };

    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, [smoothScrollingHandler]);

  return (
    <SmoothScrollStyle>
      <div ref={scrollingContainerRef}>{children}</div>
    </SmoothScrollStyle>
  );
};
