import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`
background-color: ${props => props.theme.visual.fontColor.yellow};
height:50;
    flex-basis: 0;
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color:${props => props.theme.visual.fontColor.white};

`;

const CustomButton = props => (
    <ButtonContainer
        onPress={() => alert('Hi!')}
    >

    </ButtonContainer>
);

export default ButtonContainer