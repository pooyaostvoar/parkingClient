import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Home from './Home'
import { createStackNavigator,StackNavigator} from 'react-navigation';
import { AsyncStorage } from 'react-native';




export default class Login extends Component{
  
  constructor(props) {
    super(props);
    this.state = {resp: ''};
  }
    async getCache(key){
      try{
          let value = await AsyncStorage.getItem(key);
         // console.log(value);
         this.setState(
           {token: 'JWT '+value}
         );
          return value;
      }
      catch(e){
          console.log('caught error', e);
          // Handle exceptions
      }

    }
    async setCache(key, val){
      try{
          let value = await AsyncStorage.setItem(key, val);
          //return value.json();
      }
      catch(e){
          console.log('caught error set', e);
          // Handle exceptions
      }

    }
    
    
   LoginCheck = () => {
    if(this.state && this.state.username && this.state.password)
    {
      fetch('http://192.168.42.95:8000/rest-auth/login/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': this.state.username,
          'password': this.state.password,
          //'email':this.state.email,
        }),
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.token)
        {
          this.setCache('token', responseJson.token);
          console.log("aloo");
          this.getCache('token');//.then((data)=>
          /*this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data),
          })
          
        );*/
          console.log(this.state.token)
          this.props.navigation.navigate('HomePage');
        }
        else
        {
          console.log("else");
          this.setState(previousState=>{
          return { resp: "wrong information"};
          });
          console.log(this.state.resp);
        }
          //var myResponse = new Response(body = {"token":responseJson.token}, init);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    }
    else
      return 0;
  }
  
  GoToSignUp = () =>
  {
    this.props.navigation.navigate('SignUpPage')
  }
  render() {
    return(
      <View style={styles.Login}>
        <Text style={styles.header}>Login</Text> 
        <TextInput style={styles.textInput} placeholder='username'
		    onChangeText={(text) => this.setState({username: text})}
		    ></TextInput> 
        <TextInput style={styles.textInput} placeholder='password' secureTextEntry={true}
		    onChangeText={(text) => this.setState({password: text})}
		    ></TextInput>
        
        <TouchableOpacity onPress={this.LoginCheck} style ={styles.bottun}>
          <Text style ={styles.bottonText}>
          Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.GoToSignUp} style ={styles.bottun}>
          <Text style ={styles.bottonText}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.foot}>
            <Text>
              {this.state.resp}
            </Text>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  Login: {
      flex:1,
      backgroundColor:'#3f3f3f',

  },
  header: {
      flex:2,
      fontSize: 34,
      color:'#fff',
      paddingBottom: 10,

  },
  textInput: {
    flex:2,
    alignSelf:'stretch',
    height: 40,
    color:'#fff',
  },
  bottun:{
    flex:1,
    alignSelf:'stretch',
    alignItems: 'center',
    padding:20,
    backgroundColor: '#46a4ff',
    borderColor:'#3f3f3f',
    borderWidth:1,
  },
  bottonText:{
    color:'#fff',
    fontWeight:'bold',
  },
  foot:{
    flex:3,
  }

});

/*export const stack = createStackNavigator({
  Login:{
      screen: Login,
  },
  Home:{
      screen: Home,
  }
});*/