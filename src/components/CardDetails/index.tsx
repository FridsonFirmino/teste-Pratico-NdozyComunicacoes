import React from 'react';
import { Container, NameProvice } from './styled';


type cardsProps = {
    municipio: string;
}

export function Card({ municipio }:cardsProps) {
  return (
    <Container >
        <NameProvice>{municipio}</NameProvice>
    </Container>
  );
}