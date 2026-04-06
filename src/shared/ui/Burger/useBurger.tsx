import { useCallback, useEffect, useState } from 'react';

export const useBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const onKeyup = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      if (key === 'ESC' && isOpen) {
        toggleBurger();
      }
    },
    [isOpen, setIsOpen],
  );

  useEffect(() => {
    document.addEventListener('keyup', onKeyup);
    return () => {
      document.removeEventListener('keyup', onKeyup);
    };
  }, [onKeyup]);

  return { isOpen, toggleBurger } as const;
};
