import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet , Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import homeScreen from './homeScreen';

import deltaScreen from './deltaScreen';

export default class wyeScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            birinciDirenc:0,
            ikinciDirenc:0,
            ucuncuDirenc:0,
            rea:0,
            rebe:0,
            rece:0,
toplamyuk:0
        };
    }
    render() {
        return (<View>
            
             <Text > *Ra</Text>
            <TextInput style={this.styles.baseText}
            value={this.state.rea}
            onChangeText={(text) => {
              if (text != "") {
                this.setState({
                rea: parseFloat(text),
                });
              } else {
                this.setState({
                  rea: 0,
                });
              }
            }}
          ></TextInput>
          <Text>*Rb</Text>
          <TextInput
          style={this.styles.baseText}
          value={this.state.rebe}
          onChangeText={(text) => {
            if(text !=""){
                this.setState({
                    rebe : parseFloat(text),
                });
                }
                else{
                    this.setState({
                        rebe :0,
                    });
                }

          }}>
              </TextInput> 

              <Text>*Rc</Text> 
              <TextInput 
              style={this.styles.baseText}
              value={this.state.rece}
              onChangeText={(text)=> {
                  if(text != ""){
                      this.setState({
                          rece : parseFloat(text)
                      });
                  }
                  else {
                     
                    this.setState({
                        rece: 0
                    });
                  }
              }}
              ></TextInput>
               
              <View   style={this.styles.stretch}>
                   <View>
                       
            <Image
                style={this.styles.stretch}

        source={"https://elektrikmen.com/wp-content/uploads/2018/12/Y%C4%B1ld%C4%B1z-%C3%BC%C3%A7gen-d%C3%B6n%C3%BC%C5%9F%C3%BCm%C3%BC.jpg"}/>

            </View >
 
            <View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button  color={"#ea45be"} title="reset" onPress={this.reset}></Button>
            <View>
  <Button
  color={"#d94809"}
     
      title="go to deltaScreen"
  onPress={()=> this.props.navigation.navigate(deltaScreen)}>

  </Button>
                <Button
                   color={"#fa5007"}
                    title="go to homeScreen"
                onPress={() => this.props.navigation.navigate(homeScreen)}>

                </Button>
                </View>
            </View>
                
            </View >

            </View >
            
            <View style={{alignItems:"flex-start"}}>
          <Button color={"#8e076a"} title="calculate" onPress={this.hesapla}>Hesapla</Button>
        </View>
        <View style={this.styles.baseText}>
        <Text> *R1 : {this.state.birinciDirenc}  </Text>
        <Text> *R2 : {this.state.ikinciDirenc}  </Text>
        <Text> *R3 : {this.state.ucuncuDirenc}  </Text>
        
        </View>

        
            
            </View>);
    }



    hesapla =() => {
        var toplamyuk=(this.state.rea + this.state.rebe + this.state.rece);
           var sonuc1 =(this.state.rebe * this.state.rece)/ toplamyuk;
       
           this.setState({
               birinciDirenc:sonuc1 ,
           });
           var sonuc2= (this.state.rea * this.state.rece)/ toplamyuk;
           this.setState({
              ikinciDirenc: sonuc2,
           });
           var sonuc3 =(this.state.rea * this.state.rebe)/ toplamyuk;
           this.setState({
               ucuncuDirenc : sonuc3,
           });
       }
       
       reset =() => {
       
           this.setState({
       
               birinciDirenc:0,
               ikinciDirenc:0,
               ucuncuDirenc:0,
               rea:0,
               rebe:0,
               rece:0
           })
       }


       styles = StyleSheet.create({
        baseText: {
          
         width: "50%",
            borderColor: "#fd8958"
            , borderWidth: 1,  
            marginBottom: 20,
            flexDirection:"column"
        },
        titleText: {
          fontSize: 20,
          fontWeight: "bold"
        },
        stretch: {
            width: 500,
            height: 200,
            resizeMode: 'stretch',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom:20,
            flexDirection: "row",
          }
      });
      
       }
       

