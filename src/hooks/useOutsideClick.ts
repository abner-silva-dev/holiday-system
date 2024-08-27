import { useEffect, useRef, RefObject } from 'react';

type OutsideClickHandler = () => void;

export function useOutsideClick(
  handle: OutsideClickHandler,
  listenCapturing = true
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handle();
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handle, listenCapturing]);

  return ref;
}
