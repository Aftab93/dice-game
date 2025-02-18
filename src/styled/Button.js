import styled from "styled-components"

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        border: 1px solid  black;
        color: #000000;
        transition: 0.3s ease-in;
    }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
     &:hover {
        background-color: black;
        border: 1px solid  transparent;
        color: white;
    }
`;