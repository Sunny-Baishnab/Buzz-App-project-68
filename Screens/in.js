import * as React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
                <LinearGradient
                    colors={['yellow', 'orange','red']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    
                >
                    <Text style = {{fontSize:60 , fontWeight:'bold'}}>INSTAGRAM</Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 400,
      width: 1000,
    }
})