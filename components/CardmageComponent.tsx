import { View, Text, ImageBackground } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props{
    children: ReactNode,
    color?: string
}

const CardmageComponent = (props:Props) => {

   
    const {children, color} = props;
    return (
        <ImageBackground
            source={require('../assets/image/card1.png')}
            style={[globalStyles.card, {position:'relative'}]}
            imageStyle={{borderRadius:12}}
            >
                <View
                    style={[
                        {
                            backgroundColor:color??'rgba(113,77,217,0.85)',
                            borderRadius:12,
                            flex:1,
                            padding:12

                        }
                    ]}
                >
                {children}
                </View>
                
        </ImageBackground>
  )
}

export default CardmageComponent

