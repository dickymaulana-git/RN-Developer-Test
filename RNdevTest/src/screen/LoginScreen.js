import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
//static login
const loginHandler = () =>{
    if(username.length > 3 && password.length > 3){
        navigation.navigate('Home')
    }else{
        alert('Username / Password Minimal 4')
    }
}

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.inputContainer}
        placeholder="Input Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
      />
      <TextInput
      style={styles.inputContainer}
        placeholder="Input Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <TouchableOpacity onPress={loginHandler} style={styles.submitBtn}>
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
      borderColor:'black',
      borderWidth:1,
      padding:15,
      width:'60%',
      borderRadius:10,
      marginVertical:10
  },
  submitBtn:{
      borderColor:'black',
      paddingHorizontal:20,
      paddingVertical:10,
      borderWidth:1,
      borderRadius:10
  }
});
