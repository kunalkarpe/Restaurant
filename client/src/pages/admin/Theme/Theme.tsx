import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { ThemeContext } from "../../../store/context/ThemeContext"
import UiButton from "../../../ui/Button/UiButton"
import UiTextInput from "../../../ui/Inputs/UiTextInput"


interface IThemeFormSchema {
    primary: string,
    secondary: string,
    tertiary: string
}
const Theme = () => {
    const formMethods = useForm<IThemeFormSchema>()
    const themContext = useContext(ThemeContext)
    const handelThemeData = (data: {

        primary: string,
        secondary: string,
        tertiary: string

    }) => {
        console.log(data)
        const theme = {
            primaryColor: data?.primary,
            secondaryColor: data?.secondary,
            tertiaryColor: data?.tertiary
        }
        themContext?.setTheme(theme)
    }
    return (
        <div className="px-4">
            <div className="flex ">
                Hey form theme
            </div>
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(handelThemeData)} className="flex flex-col gap-2">
                    <div className="flex gap-4">

                        <UiTextInput type={"color"} label="Primary" name="primary" />
                        <UiTextInput type={"color"} label="Secondary" name="secondary" />

                        <UiTextInput type={"color"} label="Tertiary" name="tertiary" />
                    </div>
                    <div className="flex">
                        <UiButton buttonType="primary" buttonName={"Submit"} type={"submit"} />
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default Theme
