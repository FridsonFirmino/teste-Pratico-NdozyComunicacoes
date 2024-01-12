import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, FlatList } from "react-native";
import axios from 'axios';
import { 
  Container, 
  ImageArea, 
  ImageBackgroundTransparent, 
  ImageInfo, 
  ImageInfo2,
  InfoArea,
  Image, 
  Name,
  Body } from './styled';

import { Angola_Api, Angola_Api_Data, DATAS } from '../../uteis/service';
import { Card } from '../../components/CardHome';
import { colors } from '../../uteis/colors';

const bgImage = require("../../../assets/2.jpg")

export function HomePage() {
  const [listData, setListData] = useState(DATAS)
  const [isLoading, setIsLoading] = useState(false)
  
  const Navigation = useNavigation()

  useEffect(()=>{
    setIsLoading(true)
    axios
      .get(Angola_Api)
      .then((Response) => {
        setListData(Response.data)
      })
      .catch((error) => {
        console.log(error?.response)
      })
      .finally(()=>{
        setIsLoading(false)
      })

  },[])

  const renderItem2 = ({item}: {item: Angola_Api_Data}) => {
    return (
        <Card item={item} onPress={() => Navigation.navigate('detailsPage', {provinciaId: item.id})
      }/>
    );
  };

  return (
    <Container>
      <ImageArea>
        <Image source={bgImage}/>
        <ImageBackgroundTransparent>
          <InfoArea>
            <ImageInfo>UM DOS</ImageInfo>
            <ImageInfo2>Maiores de Africa</ImageInfo2>
          </InfoArea>
        </ImageBackgroundTransparent>
      </ImageArea>

      <Body>
      {
        isLoading
        ?
        (
          <ActivityIndicator size={'large'} color={colors.red}/>
        )
        :
        (
          <FlatList
            data={listData}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            
          />
        )
      }
      </Body>
    </Container>
  );
}