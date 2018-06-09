import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad';

interface ILandingProps{
  onLoginBtnClick?: Function
}

class LandingPage extends Component<ILandingProps, any> {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <View style={styles.container}>
      <Image
        source={{
        uri:
            "https://png2.kisspng.com/sh/e81b8b9b4a0434ec35a7d1a6932c2b7f/L0KzQYm3VMA1N5x2fZH0aYP2gLBuTfhidpV4gNN0ZT3mf773lgRmel5ue9H3cz3mfLr3TfFzfF5ygd50LYPrcbzsTcVia2Y4etYCY3PndYGBTsAxQWM9UKcEMUW1QomAVcM2OWk4UaQ3cH7q/kisspng-handshake-computer-icons-clip-art-milk-shake-5ac53bd7ccde08.0092885915228753518392.png"
        }}
        style={{
        width: 70,
        height: 70,
        }}
      />
        <Text style={styles.appName}>MaileJol</Text>
        <Text style={styles.appSlogan}>The Employee Intergration App</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={this.props.onLoginBtnClick.bind(this)}>
        <Image source={{
            uri:
                "https://static.applenovinky.cz/wp-content/uploads/2014/03/microsoft-office-2013-100x100.png"
            }}
            style={{ width: 20, height: 20, position: 'absolute', top:10, left: 10}}
        />
        <Text>O365 Login</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15233a",
    height: "100%",
    width: "100%"
  },
  appName: {
      color: '#fff',
      fontSize: 32
  },
  appSlogan: {
    color: '#fff',
    fontSize: 14
  },
  loginBtn: {
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 35,
    marginTop: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    position: 'relative'
  }
});
