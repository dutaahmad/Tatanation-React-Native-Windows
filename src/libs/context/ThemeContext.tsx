import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme, ThemeContextValue, ThemeProviderProps } from '../type';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>(systemTheme === 'dark' ? 'dark' : 'light');

    useEffect(() => {
        setTheme(systemTheme === 'dark' ? 'dark' : 'light');
    }, [systemTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
