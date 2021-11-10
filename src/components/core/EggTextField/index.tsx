
import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from 'react'
import { StyledTextField, StyledMessageError } from './StyledTextField'

interface Iprops {
    placeholder?: string,
    name?: string,
    className?: any,
    autoComplete?: string,
    value?: any,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    type?: string,
    error?: boolean,
    messageError?: string,
    rest?: any,
    readOnly?: boolean,
    disabled?: boolean,
    onInput?: FormEventHandler<HTMLInputElement>
}

export const index = ({ placeholder, name, className, autoComplete, value, onChange, type,onBlur,readOnly, disabled, onInput, ...rest }: Iprops) => {
    return (
        <>
            <div style={{ width:'100%' }}>
                <StyledTextField
                    readOnly={ readOnly  }
                    placeholder={placeholder}
                    name={name}
                    className={className}
                    autoComplete={autoComplete}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    type={type}
                    disabled={ disabled }
                    onInput={ onInput }
                    {...rest}
                ></StyledTextField>
               <div style={{ width:'100%', height: 25 }}>
                    {
                        rest.error 
                            ? <StyledMessageError>{ rest.messageError }</StyledMessageError>
                            : ''
                    }
               </div>
            </div>
        </>
    )
}
