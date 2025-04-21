import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles';
import { fontsFamili } from '../constant/fontsFamili';
import { colors } from '../constant/colors';

interface Props {
    text:string,
    size?:number,
    font?:string,
    color?:string
    flex?:number
    styles?: StyleProp <TextStyle>
}

const TextComponent = (props:Props) => {
    const{text,size,font, color, flex, styles} =props;
  return (
   <Text 
      style={[
        globalStyles.text, 
        {
          flex:flex ?? 1,
          fontFamily:font ?? fontsFamili.italic,
          fontSize:size ?? 14,
          color:color ?? colors.lightGray
        },
        styles,
        ]}>
        {text}
    </Text>
  )
}

export default TextComponent