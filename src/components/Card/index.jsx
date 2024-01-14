import React from "react";
import { CardContainer, InfoCard, TitleCard } from "./styles";

export default function Card({ title, info, icon }) {
    return (
        <CardContainer>
            <TitleCard>
                {title} {icon}
            </TitleCard>
            <InfoCard>
                {info}
            </InfoCard>
        </CardContainer>
    )
}