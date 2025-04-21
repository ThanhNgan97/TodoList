import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './homes/HomeScreen'

const App = () => {
  return (
   <>
      <HomeScreen/>
      <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor="transparent"
      />
   </>
  )
}

export default App


// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigator } from "@react-navigation/stack"
// import HomeScreen from "./homes/HomeScreen"

// const Stack = createStackNavigator()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App
