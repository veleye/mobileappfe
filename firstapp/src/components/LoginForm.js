import React, { Component } from 'react'
import firebase from '@firebase/app'
import '@firebase/auth'
import {View, TextInput} from 'react-native'
import Button from './Button'
import Card from './Card'
import CardSection from './CardSection'

export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

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

    clickLoginBtn(){
        let {email, password} = this.state;
        firebase.auth.signInwithEmailAndPassword(email, password)
        .then(this.loginSuccess.bind(this))
        .catch(() => {
            firebase.auth.createUserWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }

    loginSuccess(){
        console.log('başarılı');
    }

    loginFail(){
        console.log('hatalı');
    }

    render() {
        const {containerStyle, subContainerStyle, inputStyle} = styles;
        return (
            <Card style={containerStyle}>

                <CardSection>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="E-mail"
                        value={this.state.email} 
                        onChangeText={text => this.setState({email:text})}
                    />
                </CardSection>

                <CardSection>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Şifre"
                        value={this.state.password} 
                        onChangeText={text => this.setState({password:text})}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.clickLoginBtn.bind(this)} > 
                        GİRİŞ
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    }
}