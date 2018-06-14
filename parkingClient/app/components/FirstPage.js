import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';



export default class FristPage extends Component{
  onload = () =>{
    //console.log('aloooo');
    fetch('http://192.168.42.95:8000/accounts/ex/', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'JWT 1eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOSwidXNlcm5hbWUiOiJhbGkxMSIsImV4cCI6MTUyNzc3ODMzMCwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTUyNzc3NDczMH0.CzMbyraoG2nCLpeUIze4yRjtP43AuVlswD8YvFpgz9M'
       
      },
      body: JSON.stringify({
        //'Authentication':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOSwidXNlcm5hbWUiOiJhbGkxMSIsImV4cCI6MTUyNzc3NjcxNSwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTUyNzc3MzExNX0.v4o7FIaI7422IYzr9ukEDMG0JOfnawnnfvKabSZGYMY',
        //'username': this.state.username,
        //'password': this.state.password,
        //'email':this.state.email,
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.status == 'ok'){
        //console.log("aaaa");
        this.props.navigation.navigate('HomePage');
        //console.log(response.status);
      }
      else 
        this.props.navigation.navigate('LoginPage');
      //var myResponse = new Response(body = {"token":responseJson.token}, init);
      return 1;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  /*onload = ()=>{
    console.log("onload");
    CheckIfLogin();
  } */ 
  
  render() {
    return (
        <Text>{this.onload()}</Text>
    );
  }
}