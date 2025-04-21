import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    children:ReactNode
}

const SetionComponent = (props:Props) => {
    const {children}=props;

  return (
    <View style={[globalStyles.section]}>
      {children}
    </View>
  )
}

export default SetionComponent