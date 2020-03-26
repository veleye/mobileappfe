import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HelloWorldApp from './src/components/HelloWorld'
import Header from './src/components/Header'
import MyList from './src/components/MyList'

export default function App() {
  return (
  
      <View style={styles.container}>
        <Header headerText={'Music Store'} />
        <MyList/>
      </View>
        
        
     

  );
}


const styles = {
  container: {
    flex: 1
  },
}
