import { FormProvider, useForm } from "react-hook-form"
import { IMAGES } from "../../../assets/index"
import { data } from "react-router-dom"
import UiTextInput from "../../../ui/Inputs/UiTextInput"
import UiButton from "../../../ui/Button/UiButton"
import { Rocket } from "lucide-react"
const Login = () => {
    const formMethods = useForm()
    return (
        <div className="flex h-screen">
            <FormProvider {...formMethods}>

                <div className="flex flex-col w-1/2  items-center justify-center gap-4">
                    <p className="font-semibold">Welcome Back</p>

                    <form action="" className="flex flex-col gap-2 w-60" onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
                        <UiTextInput
                            label="Email"
                            name="email"
                            type="text"
                            registerOptions={{
                                required: "Email is requried"
                            }}

                        />
                        <UiTextInput
                            label="Password"
                            name="password"
                            type="password"
                            registerOptions={{
                                required: "Password is requried"
                            }}

                        />
                        <div className="flex gap-2 pt-4">
                            <UiButton
                                buttonName="Login"
                                buttonType="primary"
                                type="submit"
                                className="w-full h-8"

                            />

                        </div>
                    </form>
                    <p className="text-sm text-gray-400">--------------------OR--------------------</p>
                    <div className="flex flex-col gap-2 text-sm w-60">
                        <UiButton buttonType="secondary" className="!text-gray-400 w-full h-8" buttonName="Continue with Google"
                            icon={<Rocket className="size-4" fill="text-primary" />}

                        />
                        <UiButton buttonType="secondary" className="!text-gray-400 w-full h-8" buttonName="Continue with Facebook" />


                    </div>
                </div>
            </FormProvider>
            <div className="flex-1 flex items-center h-full ">

                <img src={IMAGES?.LoginMan} width="650px" alt="logo" />
            </div>

        </div>
    )
}

export default Login
