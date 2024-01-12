import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const ImageArea = styled.View`
    width: 100%;
    height: 30%;
    border-bottom-right-radius: 90px;
    background-color: ${props => props.theme.red};
    margin-bottom: 3%;
`;

export const InfoArea = styled.View`
    margin-left: 5%;
    margin-top: 30%;
`;

export const ImageInfo = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 32px;
    font-weight: 700;
`

export const ImageInfo2 = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 16px;
    font-weight: 500;
`

export const Body = styled.View`
    width: 100%;
    height: 70%;
    justify-content: center;
`;