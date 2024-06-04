import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  const handleClick = (ev) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useOnClickOutside;
