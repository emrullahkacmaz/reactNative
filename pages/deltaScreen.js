import React, { Component } from 'react'
import { View, Text, TextInput,TouchableOpacity, StyleSheet, Button ,Image} from 'react-native'

import wyeScreen from './wyeScreen';

export default class deltaScreen extends Component {
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
            
            <View style={this.styles.titleText}>
            <Text>*R1 </Text>
            <TextInput
            style={this.styles.baseText}
            value={this.state.birinciDirenc}
            onChangeText={(text) => {
              if (text != "") {
                this.setState({
                  birinciDirenc: parseFloat(text)
                  
                  ,
                });
              } else {
                this.setState({
                  birinciDirenc: 0,
                });
              }
            }}
          ></TextInput>
          <Text>*R2</Text>
          <TextInput
          style={this.styles.baseText}
          
          value={this.state.ikinciDirenc}
          onChangeText={(text) => {
            if(text !=""){
                this.setState({
                    ikinciDirenc : parseFloat(text),
                });
                }
                else{
                    this.setState({
                        ikinciDirenc :0,
                    });
                }

          }}>
              </TextInput> 

              <Text>*R3</Text> 
              <TextInput 
              style={this.styles.baseText}
              value={this.state.ucuncuDirenc}
              onChangeText={(text)=> {
                  if(text != ""){
                      this.setState({
                          ucuncuDirenc : parseFloat(text)
                      });
                  }
                  else {
                     
                    this.setState({
                        ucuncuDirenc: 0
                    });
                  }
              }}
              >
                  
                  
                  </TextInput> 
                  </View> 
                  <View style={this.styles.stretch}>
                  <View >
            <Image
        style={this.styles.stretch}
        source={"https://elektrikmen.com/wp-content/uploads/2018/12/Y%C4%B1ld%C4%B1z-%C3%BC%C3%A7gen-d%C3%B6n%C3%BC%C5%9F%C3%BCm%C3%BC.jpg"}/>

</View>

            

                  <View>
                  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button color={"#ea45be"} title="reset" onPress={this.reset}></Button>

            <View >
                <Button     color={"#fd8958"}
                  title=  "go to wyeScreen"
                onPress={()=> this.props.navigation.navigate(wyeScreen)}>

                </Button>
            <Button  color={"#fa5007"}
               
           title="go to homeScreen"
        onPress={() => this.props.navigation.navigate('homeScreen')}>
      </Button>
      </View>
        
            




            </View >   
                  </View>
                  </View>
                  
                  
                  <View style={{alignItems:"flex-start"}}>
          <Button color={"#8e076a"} title="calculate" onPress={this.hesapla}>Hesapla</Button>
        </View>
        <View style={this.styles.baseText}>
        <Text> *Ra : {this.state.rea}  </Text>
        <Text> *Rb : {this.state.rebe}  </Text>
        <Text> *Rc : {this.state.rece}  </Text>
        
        </View>

         
            
            
            </View>);
    }

    

hesapla =() => {
 var toplamyuk=((this.state.birinciDirenc*this.state.ikinciDirenc)+
 (this.state.ikinciDirenc*this.state.ucuncuDirenc)+
 (this.state.birinciDirenc*this.state.ucuncuDirenc));
   
    
 
 
 var sonuc1 =toplamyuk/(this.state.birinciDirenc);

    this.setState({
        rea:sonuc1 ,
    });
    var sonuc2= toplamyuk/(this.state.ikinciDirenc);
    this.setState({
        rebe: sonuc2,
    });
    var sonuc3 =toplamyuk/(this.state.ucuncuDirenc);
    this.setState({
        rece : sonuc3,
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



