// src/components/Head.js
import { useEffect } from 'react';

const Head = () => {
    useEffect(() => {
        if (!document.head.querySelector('script[src*="adsbygoogle"]')) {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3709238869532212';
            script.async = true;
            script.crossOrigin = 'anonymous';

            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, []);

    return null;
};

export default Head;
