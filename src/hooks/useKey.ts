import { useEffect, useRef } from 'react';

type Key =
  | 'Escape'
  | 'Enter'
  | 'Space'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Backspace'
  | 'Tab'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Meta'
  | 'CapsLock'
  | 'Delete'
  | 'Insert'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

export function useKey<T extends HTMLElement>(key: Key, handle: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (!e.code) return;

      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (e.code.toLowerCase() === key.toLowerCase()) handle();
      }
    };

    document.addEventListener('keydown', callback);

    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [handle, key]);

  return ref;
}
