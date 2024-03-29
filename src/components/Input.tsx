import { ForwardRefRenderFunction, forwardRef } from 'react';

interface IInput {
    placeholder: string;
    type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
    { placeholder, type, ...rest },
    ref,
) => {
    return (
        <div className='w-full'>
            <input
                type={type}
                placeholder={placeholder}
                ref={ref} {...rest}
                className='px-3 w-full py-2 rounded-md bg-gray-950'
            />
        </div>
    )
};
export const Input = forwardRef(InputBase);