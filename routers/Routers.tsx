import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../homes/HomeScreen';
import AddNewTask from '../tasks/AddNewTask';

const Stack = createStackNavigator();

const Routers = () => {
    return (
        <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddNewTask" component={AddNewTask} />
        </Stack.Navigator>
    );
};

export default Routers;
