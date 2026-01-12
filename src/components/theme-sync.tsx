"use client";

import { useEffect } from 'react';

export function ThemeSync() {
    useEffect(() => {
        const syncTheme = () => {
            // Load font preference
            const savedFont = localStorage.getItem('theme-font');
            if (savedFont) {
                document.documentElement.style.setProperty('--font-primary', savedFont);
            }

            // Load theme preference
            const savedTheme = localStorage.getItem('theme-preference') || 'theme-navy';
            document.body.className = savedTheme;
        };

        // Initial sync
        syncTheme();

        // Listen for storage changes (for cross-tab sync)
        window.addEventListener('storage', (e) => {
            if (e.key === 'theme-preference' || e.key === 'theme-font') {
                syncTheme();
            }
        });

        // Custom event for same-tab sync
        window.addEventListener('theme-changed', syncTheme);

        return () => {
            window.removeEventListener('storage', syncTheme);
            window.removeEventListener('theme-changed', syncTheme);
        };
    }, []);

    return null;
}
