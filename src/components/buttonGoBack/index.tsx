import React from 'react';
import { ImageProps } from "react-native";
import {
    Container,
    ButtonImage
 } from './styled';

interface props{
  image: ImageProps['source']
  onPress: () => void
}

export function ButtoGoBack({ image, onPress }:props) {
  return (
        <Container onPress={onPress}>
          <ButtonImage source={image}/>
        </Container>
  );
}