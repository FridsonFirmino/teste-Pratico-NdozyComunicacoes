import React from 'react';
import { Container, NameProvice } from './styled';
import { Angola_Api_Data } from '../../uteis/service';


type api_AngolaProps = {
    item: Angola_Api_Data;
    onPress: () => void;
}

export function Card({ item, onPress }:api_AngolaProps) {
  return (
    <Container activeOpacity={0.6} onPress={onPress}>
        <NameProvice>{item?.nome}</NameProvice>
    </Container>
  );
}