import * as React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { StyleSheet, StatusBar, TouchableHighlight,Modal,TouchableOpacity } from 'react-native';
import {Text,Container, Content,View,Item,Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import Slider from '@react-native-community/slider'
import { RNNumberPicker,RNNumberSelector } from 'react-native-number-selector';
import AwesomeAlert from 'react-native-awesome-alerts';



export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue:0,
      weight:0,
      age:0,
      result:0

    };
    this.state = { showAlert: false };
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
}

showAlert = () => {
  this.setState({
    showAlert: true
  });
};

hideAlert = () => {
  this.setState({
    showAlert: false
  });
};



  CalculateBmi() {
    const {
      sliderValue,
      weight,
      age,
      result
    } = this.state;
    const safeParseFloat = (str) => {
  
      const value = Number.parseFloat(str);
  
      return Number.isNaN(value) ? 0 : value;    
    }
    const sp = safeParseFloat(sliderValue);
    const sc = safeParseFloat(weight);
    const sCharge = safeParseFloat(age); 
    const resultFloat=safeParseFloat(result) 
    const calResult = (sc/sp/sp)*10000; 
    const toFloat=calResult.toFixed(2)
    const finalResult=safeParseFloat(toFloat)
    this.setState(()=> 
    this.showAlert(),
    );
    this.setState({
      result:finalResult
    })
          
}

selectionOnPress(userType) {
  this.setState({ selectedButton: userType });
}
  render(){
    const {showAlert} = this.state;
    let items1 = [];
    let items3 = [];
    for (let i=0;i<200;i++){
      items1.push(i)

    }
    for (let i=0;i<100;i++){
      items3.push(i)

    }
    

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
             maximumValue={900}
             minimumValue={200}
             minimumTrackTintColor="#307ecc"
             maximumTrackTintColor="#000000"
             step={1} 
             value={this.state.sliderValue}
             onValueChange={(sliderValue) => this.setState({ sliderValue })}
          />
        </View>

        {/* WEIGHT AND AGE COLUMN */}

        <View style={styles.weightageview}>
          {/* WIEGHT NUMBER PICKER */}
          <View style={styles.malegender}>
            <Text style={styles.weightAgeText}>
              WEIGHT (KG)
            </Text>

            <RNNumberSelector key={1} 
            style={{ left: 0, width: '100%', height: 60 ,marginTop:25}} 
            items={items1} selectedItem={60} 
            spacing={1} highlightedFontSize={70}
             fontSize={0} 
             textColor={'black'}
              highlightedTextColor={'white'} 
              viewAnimation={0} 
              value={this.state.weight}
              onChange={(number) => {
                this.setState({
                  weight:number
                })
            
        }} />
          </View>

          

          {/* AGE NUMBER PICKER */}
          <View style={styles.femalegender}>
          <Text style={styles.weightAgeText}>
              AGE
            </Text>
            <RNNumberSelector key={1} 
            style={{ left: 0, width: '100%', height: 60 ,marginTop:25}} 
            items={items3} selectedItem={20} 
            spacing={0} highlightedFontSize={70}
             fontSize={0} 
             textColor={'black'}
              highlightedTextColor={'white'} 
              viewAnimation={1} 
              value={this.state.age}
              onChange={(ageNumber) => {
                this.setState({
                  age:ageNumber
                })

        }} />
          </View>
        </View>


        <Button style={styles.bottomButton}
        onPress={this.CalculateBmi.bind(this)}>
          <Text style={{fontSize:30,marginLeft:50,color:'#369140'}}>
            CALCULATE YOUR BMI
          </Text>
        </Button>

      </Content>
      <AwesomeAlert

   show={showAlert}
   showProgress={false}
   title="YOUR BODY MASS INDEX IS :"
   message={(this.state.result)}
   closeOnTouchOutside={true}
   confirmButtonStyle={{backgroundColor:'#369140'}}
    contentContainerStyle={{backgroundColor:'#123061'}}
    titleStyle={{color:'white'}}
    messageStyle={{color:'#7fc8db',fontSize:80}}
   closeOnHardwareBackPress={false}
   showConfirmButton={true}
   confirmText="OKAY"
   confirmButtonColor="#DD6B55"
   onCancelPressed={() => {
     this.hideAlert();
   }}
   onConfirmPressed={() => {
     this.hideAlert();
   }}
 />
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
  bottomButton:{
    height:100,
    marginTop:25,
    backgroundColor:'#566a91'

  },
  heightText:{
    fontSize:25,
    color:'#e3dede',
    textAlign:'center',
    fontWeight:'bold'
  
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  },
  weightAgeText:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    fontFamily:'ROBOTO',
    fontWeight:'bold'

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
  weightageview:{
    height:200,
    padding:10,
    marginTop:20,
    marginBottom:10,
    flexDirection:'row',
    flex:1,
  
  },
  malegender:{
    backgroundColor:'#365775',
    borderRadius:30,
    flexDirection:'column',
    width:190,
    padding:10,
    height:180,
    elevation:10,
    
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