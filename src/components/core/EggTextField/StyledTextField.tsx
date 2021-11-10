import styled from "styled-components";

export const StyledTextField = styled.input`
    /* font-size: 14px; */
    height: 50px;
    width: 100%;
    border-radius: 5px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 2px;
    transition: all .2s ease;
    outline: ${ (props: any) => props.error ? '2px solid #a90000' : '' };

    &:focus{
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
        outline: 2px solid #ffcf00;
    }

`

export const StyledMessageError = styled.span`
    font-size: 12px;
    color: #a90000;
    margin-bottom: 10px;
`