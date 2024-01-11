import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { 
  Container, 
  ImageArea, 
  EnterButton,
  ButtonArea,
  ButtonName,
  Image,
  ImageBackgroundTransparent,
  ImageInfo,
  InfoArea } from './styled';

const bgImage = require("../../../assets/1.jpg")

export function EnterPage() {

  const Navigation = useNavigation()
  return (
    <Container>
      <ImageArea>
        <Image source={bgImage}/>
        <ImageBackgroundTransparent>
          <InfoArea>
            <ImageInfo>Angola</ImageInfo>
            <ImageInfo>país</ImageInfo>
            <ImageInfo>grande</ImageInfo>
            <ImageInfo>e belo!</ImageInfo>
          </InfoArea>
        </ImageBackgroundTransparent>
      </ImageArea>

      <ButtonArea>
        <EnterButton activeOpacity={0.6} onPress={() => Navigation.navigate('homePage')}>
          <ButtonName>Entrar</ButtonName>
        </EnterButton>
      </ButtonArea>
      
    </Container>
  );
}