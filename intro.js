import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Image, TouchableOpacity } from 'react-native';


export default class Intro extends React.Component {
  render() {
  return (
    <ImageBackground source={require('./front.jpeg')} style={styles.container}>
      <View style={styles.begin}>
        <View style={styles.layer}>
          <Image source={require('./logo.png')} style={{ width: 900, height:100 }}  />
          <Text style={styles.text}>We feed youthrough it all. 
            whether you are at home or in the office, we find you and feed you</Text>
          <View style={styles.button}>
            <View style={styles.signin}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.sign}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Signup}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.signs}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>  
      </View>
    </ImageBackground>
  );
}v
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
  layer: {
   height: '60%',
   width: '80%',
   justifyContent: 'space-between',
   alignItems: 'center',
  },
  text: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
   
  },
  button: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  sign: {
    fontWeight: 'bold',
    color: 'white'
  },
  signs: {
    fontWeight: 'bold', 
  },
  signin: {
    width: '45%',
    height: 40,
    backgroundColor: '#7fff00',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  Signup: {
    width: '45%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'   
  },
 });