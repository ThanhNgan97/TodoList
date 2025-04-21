import { View,
    Text,
    ViewStyle, 
    StyleProp, 
    TouchableOpacity} from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constant/colors';

interface Props {
    text : string,
    color?: string,
    tagStyles?: StyleProp <ViewStyle>;
    textStyles?: StyleProp <ViewStyle>;
    onPress?: () => void;

}

const TagComponent = (props:Props) => {
    const {text, textStyles, color, tagStyles, onPress} = props;
    return (
        <TouchableOpacity
        onPress={onPress}
        disabled = {!onPress} 
        style = {[
            globalStyles.tag, 
            tagStyles, 
            {backgroundColor: color ?? colors.blue},
        ]}>
            <TextComponent text={text} styles = {textStyles}>

            </TextComponent>
        </TouchableOpacity>
    )
    }

export default TagComponent