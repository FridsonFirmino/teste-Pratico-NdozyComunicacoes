import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 15px;
  background-color: ${props => props.theme.red};
  justify-content: center;
  padding-left: 5%;
  margin: 3%;
  align-self: center;
`;

export const NameProvice = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 16px;
`