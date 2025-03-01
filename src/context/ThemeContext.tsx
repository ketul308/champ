import React, { createContext, useContext, useState, ReactNode } from 'react';

export const Theme = {
    DARK: "dark",
    LIGHT: "light",
}

type Theme = 'light' | 'dark'
// Define Theme Types
export interface ThemeType {
    mode: Theme;
    background: string;
    text: string;
    primary: string;
}

export interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

// Light and Dark Theme Definitions
const lightTheme: ThemeType = {
    mode: 'light',
    background: '#FFFFFF',
    text: '#000000',
    primary: '#6200ee',
};

const darkTheme: ThemeType = {
    mode: 'dark',
    background: '#1e1e1e',
    text: '#FFFFFF',
    primary: '#BB86FC',
};

// Create Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>(lightTheme);

    // Toggle Theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.mode === 'light' ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
