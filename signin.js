import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      phoneErrorMessage: '',
      passwordErrorMessage: '',
    };
  }

  handleLogin = () => {
    if (this.state.phone == '' && this.state.password == '') {
      this.setState({ errorMessage: 'Please type phone number and password' })
    } else if (this.state.phone == '') {
      this.setState({phoneErrorMessage: 'Please input your phone number'})
    } else if (this.state.password == '') {
      this.setState({ passwordErrorMessage: 'Please enter your Password' })
    } else {
      this.setState({ errorMessage: '' })
      console.log(this.state);
    }
  }
    
  render() {
    return (
      <ImageBackground source={require('./front.jpeg')} style={styles.container}>
        <View style={styles.begin}>
          <View style={styles.details}>
            <View style={styles.code}>
              <Text style={styles.enter}>SIGN IN</Text>
              <Text style={styles.sms}>enter your data</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.name}
              >Phone</Text>
              <TextInput
                style={styles.text}
                placeholder="phone Number"
                keyboardType='number-pad'
                selectionColor='blue'
                value={this.state.phone}
                onChangeText={(text) => this.setState({ phone: text })}
              />
              <Text style={{ color: 'red' }}>{this.state.phoneErrorMessage}</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.name}>Password</Text>
              <TextInput style={styles.text} placeholder="*****"
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
              />
              <Text style={{ color: 'red' }}>{this.state.passwordErrorMessage}</Text>
            </View>
            <View style={styles.password}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                <Text style={styles.forget}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          </View>
          <View style={styles.signUp}>
            <View style={styles.sign}>
              <TouchableOpacity onPress={this.handleLogin}>
                <Text style={styles.alert}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.oor}>
              <Text style={styles.or}>OR</Text>
            </View>
            <View style={styles.twitter}>
              <TouchableOpacity>
                <Text style={styles.alert}>Sign in with twitter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.facebook}>
              <TouchableOpacity>
                <Text style={styles.alert}>Sign in with facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.last}>
              <Text style={styles.have}>New here ?</Text>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.repeat}>Sign up</Text>
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
    margin: 5
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
  password: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forget: {
    color: '#7fff00',
    borderBottomWidth: 1,
    borderBottomColor: '#7fff00'
  },
  oor: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  or: {
    color: 'white',
  },
  twitter: {
    width: '95%',
    height: 40,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  facebook: {
    width: '95%',
    height: 40,
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});