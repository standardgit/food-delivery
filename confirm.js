import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Confirm extends React.Component {
  render() {
  return (
    <ImageBackground source={require('./front.jpeg')} style={styles.container}>
      <View style={styles.begin}>
        <View style={styles.details}>
          <View style={styles.code}>
            <Text style={styles.enter}>ENTER CODE</Text>
            <Text style={styles.sms}>from sms</Text>
          </View>
          <View style={styles.name}>
              <Text style={styles.name}>password</Text>
            <TextInput style={styles.text}  placeholder="Use a strong password"  />
          </View>
        </View>
        <View style={styles.signUp}>
          <View style={styles.sign}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.alert}>DONE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <Text style={styles.have}>Do not receive sms.</Text>
            <View style>
              <TouchableOpacity>
                <Text style={styles.repeat}>Repeat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
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
  details: {
    width: '90%',
    height: '70%',
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
    height: 40,
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
    alignContent:'center',
    justifyContent: 'space-around',

  },
  sign: {
    width: '95%',
    height: 40,
    backgroundColor: '#7fff00',
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  last: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  have: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  repeat: {
    color: '#7fff00'
  },
  enter: {
    color: '#7fff00',
    fontSize: 20
     
  }, 
 });