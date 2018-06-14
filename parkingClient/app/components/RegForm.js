import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity
 } from 'react-native';
 import { createStackNavigator,StackNavigator} from 'react-navigation';


export default class regForm extends React.Component {
  render() {
    return (
      <View style={styles.regForm}>
        <Text style={styles.header}>Registration</Text>    

        <View style={styles.Texts}>  
          <TextInput placeholderTextColor="#fff" underlineColorAndroid="transparent" style={styles.textInput} placeholder='username'
          onChangeText={(text) => this.setState({username: text})}
          ></TextInput>
              
          <TextInput placeholderTextColor="#fff" underlineColorAndroid="transparent" style={styles.textInput} placeholder='email'
          onChangeText={(text) => this.setState({email: text})}
          ></TextInput>
          
          <TextInput placeholderTextColor="#fff" underlineColorAndroid="transparent" style={styles.textInput} placeholder='password must contain at least 8 characters' secureTextEntry={true}
          onChangeText={(text) => this.setState({password1: text})}
          ></TextInput>
          <TextInput placeholderTextColor="#fff" underlineColorAndroid="transparent" style={styles.textInput} placeholder='repeat password' secureTextEntry={true}
          onChangeText={(text) => this.setState({password2: text})}
          ></TextInput>
        </View>
      <TouchableOpacity style={styles.botton} onPress={() => fetch('http://192.168.42.95:8000/rest-auth/registration/', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': this.state.username,
        'password1': this.state.password1,
        'password2': this.state.password2,
		    //'email':this.state.email,
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson)
      if(responseJson.token)
        this.props.navigation.navigate('LoginPage');
      else
        console.log(responseJson.password1);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    })
		  }>
            <Text style={styles.bottonText}>
              signup
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
  onPress = ()=>{
	console.log("ssalam")
    
  }

}

const styles = StyleSheet.create({
  regForm: {
      flex:1,
      backgroundColor:'#3f3f3f',
      alignSelf: 'stretch',
  },
  header: {
      fontSize: 34,
      color:'#fff',
      paddingBottom: 10,
      marginBottom:30,
      borderBottomColor:'#fff',
      borderBottomWidth: 1,
  },
  textInput: {
    
    alignSelf:'stretch',
    height: 30,
    marginBottom: 10,
    color:'#fff',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,
  },
  botton:{
    alignSelf:'stretch',
    height : 50,
    alignItems: 'center',
    padding:10,
   // backgroundColor: '#22c947',
   // marginTop:20,
  },
  bottonText:{
    backgroundColor: '#46a4ff',
    height:40,
    width:80,
    color:'#fff',
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  }

});
