import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import RowComponent from './RowComponent'
import TextComponent from './TextComponent'
import { Image } from 'react-native'
import { colors } from '../constant/colors'
import { globalStyles } from '../styles/globalStyles'
import { fontsFamili } from '../constant/fontsFamili'


const AvataGroup = () => {
    const uidsLength = 10;

    const imageStyle = {
        width:32,
        height:33,
        borderRadius:100,
        borderWidth:2,
        borderColor:colors.white,
    } 

    return (
        <RowComponent styles={{justifyContent:'flex-start'}}>
            {Array.from({length : 10})
            .map((item, index)=> 
                index < 3 && (
                    <Image
                        source={require('../assets/image/HaiDang.png')}
                        key={`image${index}`}
                        style={[
                            imageStyle,
                            {marginLeft:index >0 ? -10:0}
                        ]
                            
                            
                        }
                    />
                
            ))}

            {uidsLength > 5 && (
            <View style={[
                imageStyle,
                {
                    backgroundColor:'coral',
                    justifyContent:'center',
                    alignItems:'center',
                    borderWidth:1,
                    marginLeft:-13
                }
            ]}> 
                <TextComponent 
                    flex={0}
                    styles={{
                        lineHeight:19
                    }}
                    font={fontsFamili.semibold}
                    text ={`+${uidsLength-3 >9 ? 9: uidsLength-3}`}/>
            </View>

            )}
        </RowComponent>
    )
}

export default AvataGroup