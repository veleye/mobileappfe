import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HelloWorldApp extends Component{

componentDidMount(){

    setInterval(()=>(
        this.setState(previousState=>(
            {isShowingText:!previousState.isShowingText}
        ))
    ), 1000);

}
//state object...
state = {
    isShowingText:true
}


    render(){

        if(!this.state.isShowingText){
            return null;
        }else{
            return(
                <Text> {this.props.text} </Text>
            )
        }





    }



}