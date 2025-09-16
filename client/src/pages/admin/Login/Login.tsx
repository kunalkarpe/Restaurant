import { FormProvider, useForm } from "react-hook-form"
import { IMAGES } from "../../../assets/index"
import UiButton from "../../../ui/Button/UiButton"
import UiTextInput from "../../../ui/Inputs/UiTextInput"
import useNavigationUtility from "../../../utility/navigationUtility"
const Login = () => {
    const formMethods = useForm()
    const { navigate } = useNavigationUtility()
    return (
        <div className="flex h-screen">
            <FormProvider {...formMethods}>

                <div className="flex flex-col w-1/2  items-center justify-center gap-4">
                    <div className="flex flex-col gap-4 p-4 ring-1  ring-gray-200 w-80 rounded-lg items-center justify-center">
                        <p className="font-semibold">Welcome Back</p>
                        <form action="" className="flex flex-col gap-2 w-60" onSubmit={formMethods.handleSubmit(() => {
                            navigate("/home")
                        })}>
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
                        <p className="text-sm text-gray-400">------------------- OR -------------------</p>
                        <div className="flex flex-col gap-2 text-sm w-60">
                            <UiButton buttonType="secondary" className="!text-gray-400 w-full h-8" buttonName="Continue with Google" image={IMAGES?.Goggle} imageClassName="w-4 h-4 "
                            />



                        </div>
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
