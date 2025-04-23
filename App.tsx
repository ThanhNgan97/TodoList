import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from './constant/colors'
import { NavigationContainer } from '@react-navigation/native'
import Routers from './routers/Routers'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightGray }}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
