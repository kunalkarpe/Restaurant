import { useState } from "react"
import UiModalWrapper from "../../../ui/Modal/UiModalWrapper"
import UiButton from "../../../ui/Button/UiButton"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex  flex-col gap-4">
            <div className="flex">
                hey form home
            </div>
            <UiButton
                buttonName="Open Modal"
                buttonType="primary"
                onClick={() => setIsOpen(true)}

            />



            {
                isOpen && (<UiModalWrapper isOpen={isOpen} close={() => setIsOpen(false)} title={"Something"} description={"sdf"} >

                    <div className="flex">HEy from child</div>
                </UiModalWrapper>)
            }

        </div>
    )
}

export default Home
