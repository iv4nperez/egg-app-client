import React from 'react'
import { StyledButton } from './StyledButton'


export const index = ({ children, width="100%", height="50px", type="", disabled=false, className="" , ...rest }) => {
    return (
        <StyledButton disabled={ disabled } type={ type } width={ width } height={ height } className={ className } { ...rest }>
            <b>
            { children }
            </b>
        </StyledButton>
    )
}
