import React, { Component } from 'react'
import firebase from '@firebase/app'
import '@firebase/auth'
import {Alert, TextInput} from 'react-native'
import Button from './Button'
import Card from './Card'
import CardSection from './CardSection'
import Spinner from './Spinner'

export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            loading:false
        }
    }

    clickLoginBtn(){

       

        const {email, password} = this.state;

        if(email === '' || password === ''){
            Alert.alert(
                'Mesaj',
                'Kullanıcı adı ve şifre boş bırakılamaz',
                [{
                    text:'Tamam', onPress:()=>null
                }]
            );
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.loginSuccess.bind(this))
                .catch(this.loginFail.bind(this));
                
            });

            this.setState({
                loading : true
            });
        }

        
    }

    renderContents(){
        if(!this.state.loading){
            return(
                <Button onPress={this.clickLoginBtn.bind(this)} > 
                        GİRİŞ
                </Button>
            );
        }else{
            return(
                <Spinner size = "small"/>
            );
        }
    }

    loginSuccess(){
        this.setState({
            loading : false
        });

        console.log('başarılı');
    }

    loginFail(){

        this.setState({
            loading : false
        });
        Alert.alert(
            'Mesaj',
            'Kullanıcı adı veya şifre hatalı',
            [{
                text:'Tamam', onPress:()=>null
            }]
        );
        
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
                        secureTextEntry
                        style={inputStyle} 
                        placeholder="Şifre"
                        value={this.state.password} 
                        onChangeText={text => this.setState({password:text})}
                    />
                </CardSection>

                <CardSection>
                    {this.renderContents()}
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