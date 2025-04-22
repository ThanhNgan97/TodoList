import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { fontsFamili } from '../constant/fontsFamili';

interface Props{
    size?: `small`| `defaul` | `large`,
    color?: string,
    percent:number
}

const ProgressBarComponent = (props:Props) => {

    const {size, color, percent} = props;

    const heightContent = size === 'small' ? 6 : size === 'large' ? 10 :8;
    return (
        <View style={{marginBottom:16,borderRadius:100}}>
            <View style={{
                height:heightContent,
                width:'100%',
                backgroundColor:'rgba(0,0,0, 0.4)',
                marginTop:12, 
                borderRadius:100              
            }}>
                <View style={{
                    backgroundColor:color ?? colors.blue, 
                    width:`${percent}%`, 
                    height:heightContent,
                    borderRadius:100
                }}/>
            </View>

            <RowComponent styles={{justifyContent:'space-between', marginTop:4}}>
                <TextComponent text = "Progress" size ={12}/>
                <TextComponent
                    font={fontsFamili.bold} 
                    text = {`${percent}%`} 
                    size ={12} 
                    flex={0}/>

            </RowComponent>

        </View>
    )
}

export default ProgressBarComponent