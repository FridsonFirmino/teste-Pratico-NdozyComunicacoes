import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container, 
  ImageArea, 
  ImageInfo, 
  ImageInfo2,
  InfoArea,
  Body } from './styled';
  
import { ButtoGoBack } from '../../components/buttonGoBack';
import { Angola_Api, Angola_Api_Data, ExtrairTextosDaString } from '../../uteis/service';
import { Card } from '../../components/CardDetails';
import { FlatList } from 'react-native';

const BtnImage = require("../../../assets/left-arrow.png")

export function DetailsPage() {
  const [listData, setListData] = useState<Angola_Api_Data>()
  const [isLoading, setIsLoading] = useState(false)
  
  const Navigation = useNavigation()
  const { params } = useRoute<any>()

  useEffect(()=>{
    setIsLoading(true)
    axios
      .get(Angola_Api)
      .then((Response) => {
        setListData(Response.data.filter(({id}:any) => id == params?.provinciaId)[0])
      })
      .catch((error) => {
        console.log(error?.response)
      })
      .finally(()=>{
        setIsLoading(false)
      })
  },[params?.provinciaId])

  return (
    <Container>
      <ImageArea>
        <InfoArea>
          <ImageInfo>{listData?.nome}</ImageInfo>
          <ImageInfo2>MUNICIPIOS</ImageInfo2>
        </InfoArea>
        <ButtoGoBack 
          image={BtnImage}
          onPress={() => Navigation.goBack()}
        />
      </ImageArea>

      <Body>
        <FlatList
          data={ExtrairTextosDaString(listData?.municipios)}
          renderItem={({ item }) => <Card municipio={item}/>}
        />
      </Body>
    </Container>
  );
}