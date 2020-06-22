import React from 'react';
import { StyleSheet, View } from 'react-native';
import GestureView from './src/components/gesture'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
         <GestureView/> 
      </View>
    </View>
  );
}

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
