import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/components/Header'
import MyList from './src/components/MyList'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  UNSAFE_componentWillMount() {
  }


  render(){
    return (
    
      <View style={styles.container}>
        <Header headerText={'Giriş Ekranı'} />
        <LoginForm />
      </View>

    );
  }

  
}


const styles = {
  container: {
    flex: 1
  },
}
