import React from 'react';
import { StyleSheet, View } from 'react-native';
import GestureView from './src/components/gesture';
import Home from './src/components/home';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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

function ArenaComponent(){
  return(
    <View style={styles.container}>
      <GestureView/> 
    </View>
  );
}

function HomeComponent({navigation}){
  return(
    <Home navigation={navigation}/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Arena" component={ArenaComponent}/>
        <Stack.Screen name="Home" component={HomeComponent} options={{headerTitle:"hello"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
