import React, { Component } from 'react'
import {View, TextInput} from 'react-native'
import Button from './Button'

export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    render() {
        const {containerStyle, subContainerStyle, inputStyle} = styles;
        return (
            <View style={containerStyle}>
                <View style={subContainerStyle}>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="E-mail"
                        value={this.state.email} 
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View>
                <TextInput 
                        style={inputStyle} 
                        placeholder="Şifre"
                        value={this.state.password} 
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>
                <View style={subContainerStyle}>
                    <Button onPress={()=>console.log('clickedd')} />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0, height : 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        evaluation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
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