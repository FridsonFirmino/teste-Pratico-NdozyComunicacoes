import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: 40px;
  border-bottom-style: dashed;
  border-bottom-width: 3px;
  border-bottom-color: red;
  color: red;
  justify-content: center;
  align-self: center;
  margin-top: 3%;
`;

export const NameProvice = styled.Text`
    color: ${props => props.theme.text_Black};
    font-size: 16px;
`