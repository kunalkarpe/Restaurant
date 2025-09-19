import { Checkbox } from '@headlessui/react'
import { CheckIcon } from 'lucide-react'

const UiCheckBox = ({ enabled, setEnabled }) => {
    return (
        <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
        >
            <CheckIcon className="hidden size-4 fill-black group-data-checked:block" />
        </Checkbox>
    )
}

export default UiCheckBox
