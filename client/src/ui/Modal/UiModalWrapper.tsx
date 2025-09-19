// import { useFormContext } from 'react-hook-form'
// import UiButton from '../Button/UiButton'
// import UiTextInput from '../Inputs/UiTextInput'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XIcon } from 'lucide-react'

const UiModalWrapper = ({ isOpen, close, children, title, description }) => {
    return (
        <Dialog open={isOpen} onClose={close} className="relative  z-50">
            <DialogBackdrop transition className="fixed inset-0 bg-black/25 duration-300 ease-out data-closed:opacity-0" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel
                    transition
                    className=" min-h-96 w-[34rem] rounded-lg bg-white p-4 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
                >
                    <div className="flex  justify-between   border-b pb-2 border-gray-200">
                        <div className="flex flex-col">

                            <p className="text-lg font-semibold">Deactivate account {title}</p>
                            <p className='text-gray-400 text-sm font-semibold'>This will permanently deactivate your account{description}</p>
                        </div>
                        <XIcon className='size-4 font-semibold rounded-full ring-1 p-0.5 cursor-pointer' onClick={close} />
                    </div>
                    <div className="flex">{children}</div>

                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default UiModalWrapper
