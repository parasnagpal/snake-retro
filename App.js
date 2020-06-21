import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>

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
