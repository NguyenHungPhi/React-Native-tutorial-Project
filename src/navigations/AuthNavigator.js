import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login';
import SignUp from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
