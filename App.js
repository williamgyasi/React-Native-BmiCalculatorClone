import * as React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import {Text,Container, Content,View,Item,Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import Slider from '@react-native-community/slider'



export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial Value of slider
      sliderValue: 15
    };
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
}

selectionOnPress(userType) {
  this.setState({ selectedButton: userType });
}
  render(){
    return(
      <Container style={{backgroundColor:'#192530'}}>
      <StatusBar
      backgroundColor='#30465c'
      barStyle='#30465c'>

      </StatusBar>
      <Appbar.Header style={{backgroundColor:'#30465c'}}>
      <Appbar.Content style={{marginLeft:30}}
          title="BMI CALCULATOR"
        />
      </Appbar.Header>
      {/* MAIN CONTENT */}
      <Content>
        <View style={styles.genderView}>
        <Button style={[styles.malegender,{backgroundColor:
                            this.state.selectedButton === "BASIC"
                                ? "green"
                                : "#365775"}]} onPress={() => this.selectionOnPress("BASIC")} >
          <Icon
          name="male"
          type="FontAwesome5"
          size={120}
          color='white'
          >
          </Icon>
          <Text
          style={{fontSize:30,color:'black'}}>
            MALE
          </Text>
       

        </Button>

        <Button style={[styles.femalegender,{backgroundColor:
                            this.state.selectedButton === "INTERMEDIATE"
                                ? "green"
                                : "#365775"}]} onPress={() => this.selectionOnPress("INTERMEDIATE")} >
          <Icon
          name="female"
          type="FontAwesome5"
          size={120}
          color='white'
          >

          </Icon>
          <Text
          style={{fontSize:30,color:'black',color:this.state.selectedButton==="BASIC" ? "white" :"black"}}>
            FEMALE
          </Text>
        </Button>
           
        </View>
         {/* PROGRESS SLIDER FOR HEIGHT */}
        <View style={styles.container}>
          <Text style={styles.heightText}>
            HEIGHT
          </Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={styles.actualHeight}>
              {this.state.sliderValue}
          </Text>
          <Text style={{fontSize:20,color:'white',lineHeight:100,marginLeft:1}}>
            CM
          </Text>
          </View>
          
          <Slider
             maximumValue={500}
             minimumValue={400}
             minimumTrackTintColor="#307ecc"
             maximumTrackTintColor="#000000"
             step={1} 
             value={this.state.sliderValue}
             onValueChange={(sliderValue) => this.setState({ sliderValue })}
          />
        </View>

        {/* WEIGHT AND AGE COLUMN */}

        <View style={styles.genderView}>
          
        
           
        </View>

      </Content>
     
      





      </Container>
    )
  }
 
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  heightText:{
    fontSize:25,
    color:'#e3dede',
    textAlign:'center'
  
  },
  actualHeight:{
    fontSize:60,
    color:'white',
    textAlign:'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumb: {
    width: 30,
    height: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#365775',
    height:170,
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
  },
  mastHead:{
    paddingLeft:10,
    paddingRight:10,

  },
  header:{
    fontSize:25
  },
  genderView:{

    height:200,
    padding:10,
    marginTop:20,
    marginBottom:10,
    flexDirection:'row',
    flex:1
  },
  malegender:{
    backgroundColor:'#365775',
    borderRadius:30,
    flexDirection:'column',
    width:190,
    
    padding:10,
    height:180,
  },
  femalegender:{
    backgroundColor:'#365775',
    borderRadius:30,
    flexDirection:'column',
    width:190,
    marginLeft:10,
    padding:10,
    height:180,
    shadowColor:'blue'
  },
});