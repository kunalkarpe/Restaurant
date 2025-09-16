import { createContext } from "react";
import type { IThemeSchema } from "../theme.type";

export const ThemeContext = createContext<IThemeSchema | null>(null)