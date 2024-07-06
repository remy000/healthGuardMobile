import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {config} from '../config.js'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
    const { backendUrl } = config;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!email || !password) {
        setError('Enter all fields');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.post(`${backendUrl}/patient/authentication`, {
          email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          const data = await response.data;
          setToken(data.token);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            setError("Invalid Credentials");
            setPassword('');
            setEmail('');
          } else if (error.response.status === 403) {
            setError("Forbidden");
            setPassword('');
            setEmail('');
          }
        } else if (error.request) {
          setError("No response received from server");
          setPassword('');
          setEmail('');
        } else {
          setError(error.message);
          setPassword('');
          setEmail('');
        }
        setLoading(false);
      }
    };
  
    useEffect(() => {
      const setAsyncStorage = async () => {
        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            const role = decodedToken.roles;
            if (role && role.includes('patient')) {
              await AsyncStorage.setItem('email', email);
              await AsyncStorage.setItem('token', token);
              navigation.navigate("Home");
              setLoading(false);
            } else {
              setLoading(false); 
            }
          } catch (error) {
            console.error('Error setting AsyncStorage items', error);
            setLoading(false);
          }
        } else {
          setLoading(false); 
        }
      };
  
      setAsyncStorage();
    }, [navigation, email, token]);
   
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.images}/>
        <Text style={styles.text}>Health Guard</Text>
        </View>
        
        <Text style={styles.subText}>We Provide Home Care Service{"\n"}
             For Your Family</Text>
        <View style={styles.home}>
            <Text style={styles.homeText}>Let's Sign You In</Text>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.login}>
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            value={email}
            onChangeText={setEmail}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            />
            </View>
            <View style={styles.button}>
            <Button onPress={handleLogin} title='login' style={styles.loginButton} color="#1E5DFF"/>
            </View>
          
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.opacityText}>Not A Member? <Text style={styles.signUp}>Sign Up</Text></Text>

            </TouchableOpacity>

        </View>
    </View>
  
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#1E5DFF',
        width:"100%"
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:100,
        marginLeft:30,
        gap:20
    },
    images:{
        width:110,
        height:110,
        borderRadius:60
    },
    text:{
    color:'white',
     fontSize:32,
     fontWeight:'bold',
     lineHeight:30,
     marginTop:4
    },
    subText:{
        color:'white',
        marginLeft:30,
        marginTop:30,
        fontSize:17,
        fontWeight:'semibold',
        marginBottom:40, 
        lineHeight:24
    },
    home:{
        display:"flex",
        backgroundColor:'white',
        flexDirection:'column',
        height:'100%',
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },
    homeText:{
        textAlign:'center',
        marginTop:40,
        fontSize:23,
        fontWeight:'bold',
        color:'#1E5DFF',
        marginBottom:30
    },
    login:{
        marginLeft:25,
        display:'flex',
        flexDirection:'column'

    },
    labels:{
        fontSize:17,
        fontWeight:'500',
        marginBottom:15,
        marginLeft:10

    },
    homeInput:{
    paddingVertical:10,
    borderColor:'#1E5DFF',
    backgroundColor:'white',
    width:350,
    height:50,
    borderRadius:40,
    paddingHorizontal:25,
    borderWidth:0.4,
    marginBottom:16
    },
    button:{
        marginTop:20,
        width:'60%',
        alignSelf:'center'
    },
    opacity:{
        display:'flex',
        justifyContent:'center',
        marginVertical:14
      }
    ,
    opacityText:{
      textAlign:'center',
      color:'gray',
      fontWeight:'400',
      fontSize:15
    },
    signUp:{
        color:'#1E5DFF',
        fontWeight:'bold'
    },
    error:{
        color:'red',
        fontWeight:'800',
        textAlign:'center'
    }
})