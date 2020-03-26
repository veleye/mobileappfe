import React, { Component } from 'react'
import {Text ,View} from 'react-native'


export default class Header extends Component {

    render() {

        const {textStyle, viewStyle} = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
           </View>
        )
    }
}

const styles = {
    textStyle:{
        fontSize:20
    },
    viewStyle:{
        backgroundColor:'#a5a5a5',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:24,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.5
    }
}
