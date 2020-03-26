import React, { Component } from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import Detail from './detail'


export default class MyList extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }


    }

    UNSAFE_componentWillMount(){
        
        let url = 'https://rallycoding.herokuapp.com/api/music_albums'
        axios.get(url)
        .then(response=>
            this.setState({data:response.data}));

    }

    renderData(){
        return this.state.data.map((respData,id) => <Detail key={id} data ={respData}/> );
    }


    render() {
        console.log('renderr');
        return (
            <ScrollView style={style.viewStyle}>
                {this.renderData()}
            </ScrollView>
        )
    }
}

const style = {
    viewStyle:{
        marginTop:5
    }
}