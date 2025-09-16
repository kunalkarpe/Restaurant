import { useFormContext, type FieldValues, type RegisterOptions } from "react-hook-form"


interface UiTextInputProps {
    type: string
    label: string
    name: string
    registerOptions?: RegisterOptions<FieldValues, string>
}
const UiTextInput = ({ type, label, name, registerOptions }: UiTextInputProps) => {
    const { register } = useFormContext()
    return (
        <div className="flex flex-col gap-1">
            {label && <p className="text-sm font-medium">{label}</p>}
            <input type={type} className="ring-1 ring-gray rounded-sm py-1 text-sm h-8 px-2"
                {...register(name, registerOptions)}
            />

        </div>
    )
}

export default UiTextInput
