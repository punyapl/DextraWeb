import { useState, useCallback, } from 'react';

export function useModal<T = void>() {
    const [show, setShow,] = useState(false);
    const [item, setItem,] = useState<T | null>(null);

    const open = useCallback((payload?: T) => {
        if (payload !== undefined) setItem(payload);
        setShow(true);
    }, []);

    const close = useCallback(() => {
        setShow(false);
        setItem(null);
    }, []);

    return {
        show,
        item,
        setItem,
        open,
        close,
    };
}