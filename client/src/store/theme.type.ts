interface IThemeSchema {
    theme: {
        primaryColor: string
        secondaryColor: string
        tertiaryColor: string
    }
    setTheme: React.Dispatch<React.SetStateAction<{
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
}>>
}

export type { IThemeSchema }