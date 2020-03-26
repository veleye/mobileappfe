import React, { Component } from 'react'
import {View} from 'react-native'

export default class Card extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {containerStyle} = styles;
        return (
            <View style={containerStyle}>
                {this.props.children}
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
    }
}
