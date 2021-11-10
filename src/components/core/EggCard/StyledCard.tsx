import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: white;
    box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.09);
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 15px;

    &:hover{
        box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.15);
        cursor: pointer;
    }
`