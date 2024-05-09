
import { useRef, useEffect, MutableRefObject } from "react";

export function useHorizontalScroll() {
  const elRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollBy(e.deltaY, 0);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

