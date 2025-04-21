import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';
import { fontsFamili } from '../constant/fontsFamili';
import { colors } from '../constant/colors';

interface Props {
    text: string,
    font?: string,
    size?: number,
    color?: string
}

const TitleComponent = (props: Props) => {
    const {text, font, size, color} = props;
  return (
    <TextComponent
        size ={size ?? 20}
        font = {font ?? fontsFamili.semibold}
        // color = {color ?? colors.desc}
        color ={color}
        text = {text}
    />
  )
}

export default TitleComponent