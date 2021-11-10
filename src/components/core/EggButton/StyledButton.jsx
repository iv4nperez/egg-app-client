import styled from "styled-components";

export const StyledButton = styled.button`
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    background-color: white;
    border: 2px solid #000;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
    width: ${ (props) => props.width ? props.width : '100%' };
    height: ${ ( props ) => props.height ? props.height : '50px' };
    border-radius: 5px;
    position: relative;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #ffcf00;
        border: 2px solid #ffcf00;
    }
    &:disabled {
        cursor: default;
        box-shadow: none;
    }
`