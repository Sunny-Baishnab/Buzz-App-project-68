import * as React from 'react';
import{Text,View,StyleSheet} from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1 , justifyContent:'center' , alignItems:'center' , backgroundColor:'blue'}}>
                <Text style = {{fontSize:60 , fontWeight:'bold' , color:'white'}}>FACEBOOK</Text>
            </View>
        )
    }
}