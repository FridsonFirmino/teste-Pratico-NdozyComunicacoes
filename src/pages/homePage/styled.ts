import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 24px;
    font-weight: 700;
`;

export const ImageArea = styled.View`
    width: 100%;
    height: 30%;
`;

export const ImageBackgroundTransparent = styled.View`
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${props => props.theme.red};
    border-bottom-right-radius: 90px;
`;

export const InfoArea = styled.View`
    margin-left: 5%;
    margin-top: 32%;
    position: absolute;
`;

export const ImageInfo = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 20px;
    font-weight: 600;
`

export const ImageInfo2 = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 32px;
    font-weight: 700;
`

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',

})`
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 90px;
`;

export const Body = styled.View`
    width: 100%;
    height: 70%;
    justify-content: center;
`;