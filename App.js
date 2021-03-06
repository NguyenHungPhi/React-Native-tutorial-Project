import * as React from 'react';
import {LogBox} from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}

export default App;
