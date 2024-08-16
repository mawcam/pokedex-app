import { useCallback, useRef } from 'react';

export function useDebounce() {
  const timeoutRef = useRef<number | null>(null);

  const debounce = useCallback((callback: () => void, delay: number = 700) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, []);

  return debounce;
}
