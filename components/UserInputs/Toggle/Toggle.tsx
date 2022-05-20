import { useState } from 'react';
import { Switch } from '@headlessui/react';

export type toggleProps = {
    checked: boolean,
    colorClass?: string
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Toggle(props:toggleProps) {
    const [enabled, setEnabled] = useState(props.checked)

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
                enabled ? (props.colorClass? "bg-"+props.colorClass : 'bg-indigo-600') : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
            />
        </Switch>
    )
}
