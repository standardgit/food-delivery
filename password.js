import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import SignIn from './intro';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Password extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./front.jpeg')} style={styles.container}>
        <View style={styles.begin}>
          <View style={styles.details}>
            <View style={styles.code}>
              <Text style={styles.enter}>FORGOT PASSWORD</Text>
              <Text style={styles.sms}>we sent you a password in sms</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.name}>password</Text>
              <TextInput style={styles.text}
                placeholder="Enter password"
                keyboardAppearance='dark'
              />
            </View>
            <View style={styles.sign}>
              <TouchableOpacity>
                <Text style={styles.alert}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signUp}>

          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  begin: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  return: {
    flex: 1,
    width: '90%',
    height: '30%',
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'center'
  },
  back: {
    color: 'white',
    paddingLeft: 10,
  },
  details: {
    width: '90%',
    height: '60%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  code: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',


  },
  sms: {
    color: 'white'
  },
  name: {
    width: '90%',
    color: '#7fff00',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    height: 30,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  alert: {
    color: 'white',
    justifyContent: 'space-around'
  },
  signUp: {
    width: '90%',
    height: '30%',
    color: 'white',
    alignContent: 'center',
    justifyContent: 'space-around',

  },
  sign: {
    width: '95%',
    height: 40,
    backgroundColor: '#7fff00',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },

  enter: {
    color: '#7fff00',
    fontSize: 20
  },
});