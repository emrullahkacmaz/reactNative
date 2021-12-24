import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import wyeScreen from './wyeScreen';
 //export { TapGestureType as TapGesture } from './handlers/gestures/tapGesture';


export default class homeScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<View>
            <View style={this.styles.row} >
                <Text> "--DELTA-WYE TRANSFORMATİON--" </Text>
              

            </View>
            <Image
        style={this.styles.stretch}
        source={"https://elektrikmen.com/wp-content/uploads/2018/12/Y%C4%B1ld%C4%B1z-%C3%BC%C3%A7gen-d%C3%B6n%C3%BC%C5%9F%C3%BCm%C3%BC.jpg"}/>

            <View >
            
            <View  style={this.styles.part}>

                <Button 
        color={"#fd8958"}
        title ="go to wye-delta transformation"
        onPress={() => this.props.navigation.navigate('deltaScreen')}>
           
      </Button>
    </View>
    <View  style={this.styles.logo}>
      <Button
      
     
      color={"#d94809"}
     
          title="go to delta-wye transformation"
      onPress={() => this.props.navigation.navigate(wyeScreen) }>


      </Button>
      </View>
      </View>
        
  


        </View>);
    }
    styles = StyleSheet.create({
        row: {

            height: 100,
      justifyContent: "center",
      alignSelf: "flex-start",
      backgroundColor: "#fd8958",
      borderColor: "#6a0101",
      borderRadius: 10,
     
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 5,
      flex:1,
      padding:10
      

        },

        part: {
            
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignSelf: "flex-start",
          
            padding: 15,
            marginLeft: 15,
            marginRight:15,
            marginBottom:15,
         
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,

        },
        logo: {
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignSelf: "flex-start",
          
            padding: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom:20,
         
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,

          },
          stretch: {
            width: 500,
            height: 200,
            resizeMode: 'stretch',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom:20,
          }
    });





}
