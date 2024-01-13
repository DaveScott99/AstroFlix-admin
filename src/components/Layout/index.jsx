import React from "react";
import { Aside, Brand, Main, Wrapper } from "./styles";
import Menu from "../Menu";

export default function Layout({ children }) {

    return (
        <Wrapper>

            <Aside>
                <Brand>ASTROFLIX</Brand>

                <Menu />
            </Aside>
            
            <Main>
                { children }

            </Main>
        </Wrapper>
    );

}