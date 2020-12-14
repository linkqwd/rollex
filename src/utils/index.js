import { useEffect } from 'react';

export function strHash(str) {
    let hash = 0, i, ii, chr;
    if (str.length === 0) return hash;
    for (i = 0, ii = str.length; i < ii; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


export const useClickOutside = (ref, onClickOutside) => {
    useEffect(() => {
        const handler = (event) => {
            const { current: el } = ref;
            el && !el.contains(event.target) && onClickOutside(event);
        };
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler);
        };
    });
};
