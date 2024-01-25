import React from "react";
import { Loader, LoaderContainer } from "./styles";

export default function Loading({ color, height, width }) {
    return(
        <LoaderContainer>
            <Loader color={color} height={height} width={width} />
        </LoaderContainer>
    )
}