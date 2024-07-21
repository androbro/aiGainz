import { useState, useEffect } from 'react';

export const useMobileChecker = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window == 'undefined') {
            return;
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 575);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};