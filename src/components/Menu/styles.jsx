import { styled } from "styled-components";

export const MenuContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        text-decoration: none;
        color: #959AA7;
        font-weight: 400;
        font-size: 1em;
        margin-top: 20px;
        transition: ease all .2s;

        :hover {
            background: #20283D;
        }
    }
`

export const MenuItem = styled.li`
    text-decoration: none;
    padding: 15px;
    display: flex;
    align-items: center;

    svg {
        font-size: 1.4em;
        margin-right: 10px;
    }

`