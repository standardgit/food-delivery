import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      password: '',
      phoneErrorMessage: '',
      passwordErrorMessage: '',
      nameErrorMessage: ''
    };
  }
    handleLogin = () => {
    if (this.state.phone == '' && this.state.password == '' && this.state.name == '') {
      this.setState({ errorMessage: 'Please type phone number and password and name' })
    } else if (this.state.phone == '') {
      this.setState({phoneErrorMessage: 'Please input your phone number'})
    } else if (this.state.password == '') {
      this.setState({ passwordErrorMessage: 'Please enter your Password' })
    }else if (this.state.name == '') {
      this.setState({ nameErrorMessage: 'Please enter your name' })
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
          <View style={styles.camera}>
            <Ionicons name='ios-camera' color='white' size={45}/>
          </View>
          <View style={styles.name}>
              <Text style={styles.name}>Name</Text>
            <TextInput style={styles.text} />
            <Text style={{ color: 'red' }}>{this.state.nameErrorMessage}</Text>
          </View>
          <View style={styles.name}>
              <Text style={styles.name}>Phone</Text>
            <TextInput style={styles.text}  placeholder="+234" />
            <Text style={styles.alert}>We sent you a password in SMS</Text>
            <Text style={{ color: 'red' }}>{this.state.phoneErrorMessage}</Text>
          </View>
          <View style={styles.name}>
              <Text style={styles.password}>password</Text>
            <TextInput style={styles.text}
            secureTextEntry={true}
             />
             <Text style={{ color: 'red' }}>{this.state.passwordErrorMessage}</Text>
          </View>
          <View style={styles.terms}>
            <TouchableOpacity onPress={{color='#7fff00' size={22}}}>
              <MaterialCommunityIcons name='checkbox-marked' color='white' size={20}  />
            </TouchableOpacity>
            <Text style={styles.alert}>I agree with the</Text>
            <Text style={styles.conditions}>Terms & conditions</Text>
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          </View>
        </View>
        <View style={styles.signUp}>
          <View style={styles.sign}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm').handleLogin}>
              <Text style={styles.alert}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <Text style={styles.have}>I have</Text>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.repeat}>an account.</Text>
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
  return: {
    flex: 1,
    width: '90%',
    height: '50%',
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
    height: '50%',
    alignContent: 'flex-start',
    justifyContent: 'space-around'
  },
  camera: {
    width: 40,
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  name: {
    width: '90%',
    color: '#7fff00',
    fontWeight: 'bold',
    fontSize: 14,
  },
  password: {
    width: '90%',
    color: '#7fff00',
    fontWeight: 'bold',
    fontSize: 14, 
  },
  text: {
    height: 20,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  alert: {
    color: 'white',
    justifyContent: 'space-around' 
  },
  terms: {
    flexDirection: 'row',
    marginTop: 15
  },
  conditions: {
    color: '#7fff00',
    borderBottomWidth: 1,
    borderBottomColor: '#7fff00'
  },
  signUp: {
    width: '90%',
    height: '20%',
    color: 'white',
    alignContent:'center',
    justifyContent: 'center',

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
    justifyContent: 'center',
    marginTop: 10
  },
  have: {
    color: 'white',
  },
  repeat: {
    color: '#7fff00',
    marginLeft: 5
  }, 
 });