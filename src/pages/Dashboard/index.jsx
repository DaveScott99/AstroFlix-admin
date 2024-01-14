import React from "react";
import { Container, Line, Title,  } from "./styles";
import Card from "../../components/Card";
import { TbMovie } from "react-icons/tb";


export default function Dashboard() {
  return (
    <Container>

      <Title>Home - Summary</Title>

      <Line>
        <Card title="Total Movies" info="0" icon={<TbMovie />} />
        <Card title="Total Tv Series" info="0" icon={<TbMovie />} />
        <Card title="Total Episodes" info="0" icon={<TbMovie />} />
      </Line>
    
      <Line>
        <Card title="Total Registered User" info="0" icon={<TbMovie />} />
        <Card title="Total Active Subscription" info="0" icon={<TbMovie />} />
      </Line>

    </Container>
  );
}
