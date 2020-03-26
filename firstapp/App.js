import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/components/Header'
import MyList from './src/components/MyList'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  UNSAFE_componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyCwMsbPgUCuEjGPOqUClzyZsbPGb5vk66I',
        authDomain: 'mobileappfirebase-de15b.firebaseapp.com',
        databaseURL: 'https://mobileappfirebase-de15b.firebaseio.com',
        projectId: 'mobileappfirebase-de15b',
        storageBucket: 'mobileappfirebase-de15b.appspot.com',
        messagingSenderId: '909208366514',
        appId: '1:909208366514:web:e4a636dc5fd81e280ac8ab'
      }
    );
  }


  render(){
    return (
    
      <View style={styles.container}>
        <Header headerText={'Giriş Ekranı'} />
        <Text style={{marginTop:5}}>Kimlik Doğrulama Uygulaması Login Sayfası</Text>
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
