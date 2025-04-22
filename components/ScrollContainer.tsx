import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: ReactNode
}

const ScrollContainer = (props:Props) => {
    const {children} =props;
    return (
        <ScrollView 
        style={[
            globalStyles.container, 
            globalStyles.scrolView
        ]}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    )
}

export default ScrollContainer