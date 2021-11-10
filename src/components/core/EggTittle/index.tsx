import React from 'react'
import { StyledTittle } from './StyledTittle'

interface IProps {
    children?: any
}

export const index = ({ children }: IProps) => {
    return (
        <StyledTittle>
            { children }
        </StyledTittle>
    )
}
