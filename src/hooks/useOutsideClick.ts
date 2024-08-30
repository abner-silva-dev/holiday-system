import { useEffect, useRef } from 'react';

type OutsideClickHandler = () => void;

export function useOutsideClick<T extends HTMLElement>(
  handle: OutsideClickHandler,
  listenCapturing = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handle();
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);

    return () => document.removeEventListener('click', handleClick, listenCapturing);
  }, [handle, listenCapturing]);

  return ref;
}
