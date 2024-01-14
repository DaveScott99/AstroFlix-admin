import React from "react";
import { Aside, Brand, Main, Wrapper } from "./styles";
import Menu from "../Menu";
import Header from "../Header";

export default function Layout({ children }) {

    return (
        <Wrapper>

            <Aside>
                <Brand>ASTROFLIX</Brand>

                <Menu />
            </Aside>

            <Main>
                <Header />
                { children }
            </Main>
        </Wrapper>
    );

}