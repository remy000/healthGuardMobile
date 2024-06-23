import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.images}/>
        <Text style={styles.text}>Create Account</Text>
       
        </View>
        <ScrollView style={styles.login}>
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
            />
           
            </ScrollView>
            <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLinkText}>Already have an account? Log In</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        flexGrow: 1,
         flex:1,
        backgroundColor:'white',
        width:"100%"
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        marginLeft:30,
        gap:20
    },
    images:{
        width:80,
        height:80,
        borderRadius:60
    },
    text:{
    color:'#1E5DFF',
     fontSize:25,
     fontWeight:'bold',
     lineHeight:30,
     marginTop:4
    },
    login:{
      marginLeft:20,
      marginTop:20

    },
    
    labels:{
        fontSize:17,
        fontWeight:'500',
        marginBottom:10,
        marginLeft:10

    },
    homeInput:{
    paddingVertical:3,
    borderColor:'#1E5DFF',
    backgroundColor:'white',
    width:350,
    height:40,
    borderRadius:40,
    paddingHorizontal:20,
    borderWidth:0.4,
    marginBottom:13
    },
    button: {
        backgroundColor: '#1E5DFF',
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        width:'70%',
        alignSelf:'center'
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      loginLink: {
        marginTop: 5,
        alignItems: 'center',
        marginBottom:25
      },
      loginLinkText: {
        color: '#1E5DFF',
        fontSize: 14,
      },
})