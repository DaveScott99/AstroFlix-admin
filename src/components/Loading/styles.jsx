import { keyframes, styled } from "styled-components";

export const LoaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`

export const Loader = styled.div`
    animation: ${rotate} .9s linear infinite;
    width: ${props => props.width ? props.width : 50}px;
    height: ${props => props.height ? props.height : 50}px;
    border-radius: 50%;
    border: 4px solid ${props => props.color ? props.color : props.theme.colors.primary};
    border-top-color: ${props => props.theme.colors.primary};
`