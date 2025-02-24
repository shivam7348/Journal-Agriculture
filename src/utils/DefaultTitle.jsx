import { useRef, useEffect } from "react";

function DefaultTitle({ title, prevailOnUnmount = false }) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [title]);

  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, [prevailOnUnmount]);

  return null;
}

export default DefaultTitle;
