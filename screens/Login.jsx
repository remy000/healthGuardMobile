import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
    const handleLogin=()=>{
        navigation.navigate("Home");
    }
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
            <View style={styles.login}>
            <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter Email'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Password</Text>
            <TextInput placeholder='Enter Password'
            style={styles.homeInput}
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
    }
})