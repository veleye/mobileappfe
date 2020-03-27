import React, {Component} from 'react';
import { StyleSheet, Text, View, SwitchComponent } from 'react-native';
import Header from './src/components/Header'
import MyList from './src/components/MyList'
import LoginForm from './src/components/LoginForm';
import firebase from '@firebase/app'
import '@firebase/auth'
import CardSection from './src/components/CardSection'
import Spinner from './src/components/Spinner'
import Button from './src/components/Button'

export default class App extends Component {

  state = {
    loggedIn : null
  }

  componentWillMount(){
    var firebaseConfig = {
        apiKey: "AIzaSyCwMsbPgUCuEjGPOqUClzyZsbPGb5vk66I",
        authDomain: "mobileappfirebase-de15b.firebaseapp.com",
        databaseURL: "https://mobileappfirebase-de15b.firebaseio.com",
        projectId: "mobileappfirebase-de15b",
        storageBucket: "mobileappfirebase-de15b.appspot.com",
        messagingSenderId: "909208366514",
        appId: "1:909208366514:web:e4a636dc5fd81e280ac8ab"
      };
      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          loggedIn : true
        });
      }else{
        this.setState({
          loggedIn : false
        });
      }


    })
      
}

renderExitContentPage(){
  
  switch(this.state.loggedIn){
    case true:
      return(
        <CardSection>
          <Button onPress={this.clickLogoutBtn.bind(this)} > 
              ÇIKIŞ
          </Button>
        </CardSection>
      );
    case false:
      return(
        <LoginForm />
      );
    default:
      return(
        <View>
          <Spinner size="large"/>
        </View>
      );
  }

}

clickLogoutBtn(){
  firebase.auth().signOut();
}

  render() {

    const { containerStyle } = styles;

    return (
    
      <View style={containerStyle}>
        <Header headerText={'Giriş Ekranı'} />
         {this.renderExitContentPage()}
      </View>

    );
  }

  
}

const styles = {
  containerStyle: {
    flex: 1
  }
}


