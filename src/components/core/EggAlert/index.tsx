
import { StyledAlert } from './StyledAlert'

interface Iprops {
    children?: any
}

export const index = ({ children } : Iprops) => {
    return (
        <StyledAlert>
            { children }
        </StyledAlert>
    )
}
