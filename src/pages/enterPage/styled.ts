import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ImageArea = styled.View`
    width: 100%;
    height: 85%;
`;

export const ImageBackgroundTransparent = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.6;
    background-color: ${props => props.theme.red};
    border-bottom-right-radius: 120px;
`;

export const InfoArea = styled.View`
    margin-left: 8%;
    margin-top: 80%;
`;

export const ImageInfo = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 32px;
    font-weight: 600;
`

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',

})`
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 120px;
`;

export const ButtonArea = styled.View`
    width: 100%;
    height: 15%;
    align-items: center;
    justify-content: center;
`
export const EnterButton = styled.TouchableOpacity`
    width: 50%;
    height: 40%;
    border-radius: 50px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.red};
`

export const ButtonName = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 14px;
    font-weight: 600;
`