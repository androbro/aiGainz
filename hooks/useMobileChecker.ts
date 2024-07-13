import { useState, useEffect } from 'react';

export const useMobileChecker = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 575);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 575);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};
