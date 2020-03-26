import React, { Component } from 'react'
import {View} from 'react-native'


export default class CardSection extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {subContainerStyle} = styles;

        return (
            <View style = {subContainerStyle}>
                {this.props.children}
            </View>
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
    }
}