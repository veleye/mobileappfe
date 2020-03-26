import React, { Component } from 'react'
import {Text, TouchableOpacity} from 'react-native'

export default class Button extends Component {

    constructor(props){
        super(props);
    }


    render() {
        const {buttonStyle, textStyle} = styles;
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
            
                <Text style={textStyle}> {this.props.children} </Text>

            </TouchableOpacity>
        )
    }
}

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#007aff',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        marginLeft: 5,
        marginRight: 5,
    }
}