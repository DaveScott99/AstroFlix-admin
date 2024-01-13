import React from "react";
import { Main, Wrapper } from "./styles";

export default function Layout({ children }) {

    return (
        <Wrapper>
            
            <Main>
                { children }

            </Main>
        </Wrapper>
    );

}