import React from 'react';
import { StyleSheet, View } from 'react-native';
import GestureView from './src/components/gesture';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  grid:{
    backgroundColor:"gray",
    borderRadius: 10,
    borderColor:"grey",
    borderWidth: 3,
    margin:10,
    flex:1
  }
});

function Arena(){
  return(
    <View style={styles.container}>
      <GestureView/> 
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Arena" component={Arena}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
