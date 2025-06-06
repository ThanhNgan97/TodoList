import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


// import { AppRegistry } from "react-native"
// import App from "./App"
// import { name as appName } from "./app.json"

// // This ensures Reanimated is properly initialized
// import "react-native-reanimated"

// AppRegistry.registerComponent(appName, () => App)

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
