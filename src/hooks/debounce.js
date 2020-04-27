import { useState, useEffect } from 'react';

export default function debounceValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [value] 
  );

  return debouncedValue;
}
