import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { colors } from '../constant/colors';
import { fontsFamili } from '../constant/fontsFamili';


interface Props {
    color?:string,
    value?:number,
    maxValue?:number
}

const CicularComponent = (props:Props) => {
    const {color, value, maxValue} = props;
    return (
        <CircularProgress 
            value = {value} 
            title ={`${value}%`} 
            showProgressValue={false}
            activeStrokeColor={color ?? colors.blue}
            inActiveStrokeColor={'#3C444A'} 
            titleColor={colors.silver}
            titleFontSize={24}
            titleStyle={{
                fontFamily:fontsFamili.semibold,
            }}
            />
    );
}



export default CicularComponent;



