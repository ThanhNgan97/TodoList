import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { colors } from '../constant/colors';
import { fontsFamili } from '../constant/fontsFamili';


interface Props {
    color?:string,
    value?:number,
    maxValue?:number,
    radius?:number,
    titleFontSize?: number; 
}

const CicularComponent = (props:Props) => {
    const {color, value, maxValue, radius, titleFontSize} = props;
    return (
        <CircularProgress 
            value = {value} 
            title ={`${value}%`}
            radius={radius ?? 46} 
            showProgressValue={false}
            activeStrokeColor={color ?? colors.blue}
            inActiveStrokeColor={'#3C444A'} 
            titleColor={colors.silver}
            activeStrokeWidth={14}
            inActiveStrokeWidth={14}
            titleFontSize={titleFontSize ?? 20}
            titleStyle={{
                fontFamily:fontsFamili.semibold,
            }}
            />
    );
}



export default CicularComponent;



