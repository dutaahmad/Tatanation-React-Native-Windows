import { type ReactNode } from "react";

export interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}

export type Theme = 'light' | 'dark';

export interface ScreenParams {
    screen: string;
    params?: { [key: string]: any };
}

export interface HomeScreenProps {
    navigate: (screen: string, params?: { [key: string]: any }) => any;
}

export interface MockData {
    id: number;
    name: string;
    description: string;
}

export type MockDatas = MockData[];

export interface DetailScreenProps {
    navigate: (screen: string, params?: { [key: string]: any }) => void;
    params?: { [key: string]: any };
}