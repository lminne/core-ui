import { ExclamationCircleIcon } from '@heroicons/react/solid'

export type inputProps = {
    label?:string,
    inputType: string,
    name: string,
    id?: string,
    placeholder?:string,
    currentValue?: any,
    onChange:any,
    disabled?:boolean,
    containerClassName?:string,
    inputClassName?: string,
    validationDesired?: boolean,
    infoLink?: string,
    infoLinkText?: string,
    colorClass?: string,
    errorMessage?: string
}

export default function Input(props:inputProps) {

    return (
        <div className={props.containerClassName}>
            <div className={"flex justify-between"}>
                <label htmlFor={props.name} className="block text-sm font-medium text-gray-400">
                    {props.label}
                </label>
                {props.infoLink?<a target="_blank" rel="noopener noreferrer" className={"block text-sm font-medium text-gray-400"} href={props.infoLink}>{props.infoLinkText}</a>:null}
            </div>

            <div className="mt-1 relative rounded-mg">
                <input
                    type={props.inputType}
                    name={props.name}
                    id={props.id}
                    className={((props.inputClassName)+ (" w-full h-10 sm:text-sm rounded-md p-2 outline-0 ") + (props.colorClass?"focus:border-"+props.colorClass:"focus:border-indigo-600"))}
                    placeholder={props.placeholder}
                    value={props.currentValue?props.currentValue:""}
                    onChange={props.onChange}
                    aria-invalid={"false"}
                    aria-describedby={"input-error"}
                    disabled={props.disabled}
                />
                {((!props.currentValue || props.currentValue?.length < 1) && props.validationDesired)?<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>:""}
            </div>
            {((!props.currentValue || props.currentValue?.length < 1 )  && props.validationDesired)?<p className="mt-2 text-xs text-red-400" id="input-error">
                {props.name + " " + props.errorMessage}
            </p>:""}
        </div>
    )
}