import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from './homes/HomeScreen'

const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
      <HomeScreen/>
      <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor="transparent"
      />
   </SafeAreaView>
  )
}

export default App