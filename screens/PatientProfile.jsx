import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { config, getStoredData } from '../config';
import axios from 'axios';

const PatientProfile = ({navigation}) => {
  const { backendUrl } = config;
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [name,setName]=useState('');
  const [error,setError]=useState('');
  const [patient,setPatient] =useState({
    patientId: 0,
    names: '',
    email: '',
    phoneNumber: '',
    bloodGroup: '',
    birthDate: '',
    weight: '',
    gender: '',
    age: 0,
    address: '',
    sickness: '',
    allergies: '',
  }
);
  useEffect(() => {
    const fetchStoredData = async () => {
      const { email, token } = await getStoredData();
      if (email && token) {
        setEmail(email);
        setToken(token);
      }
    };

    fetchStoredData();
  }, []);
  useEffect(() => {
    if (email && token) {
      const fetchPatient = async () => {
        try {
          const response = await axios.get(`${backendUrl}/patient/findPatientByEmail/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.status === 200) {
            const data = response.data;
            setPatient({
              names:data.names,
              email:data.email,
              phoneNumber:data.phoneNumber,
              sickness:data.sickness,
              birthDate:data.birthDate,
              address:data.address,
              
            
            });
          }
        } catch (error) {
          setError(error.message);
        }
      };
      fetchPatient();
    }
  }, [email, token, backendUrl]);
  return (
    <View style={styles.container}>
        
    <View style={styles.body}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
        <Entypo name="arrow-long-left" size={30} color="#1E5DFF" />
        </TouchableOpacity>
      <Text style={styles.header}>User Account</Text>
    </View>
    <View style={styles.home}>
      <View style={styles.profile}>
      <FontAwesome5 name="user-alt" size={50} color="#1E5DFF" />
      </View>
      <TouchableOpacity style={styles.dashboard}>
      <AntDesign name="user" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.names}</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dashboard}>
      <Fontisto name="email" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.email}</Text>
      </View>
       </TouchableOpacity>
       <TouchableOpacity style={styles.dashboard}>
       <Feather name="phone" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.phoneNumber}</Text>
      </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.dashboard}>
      <MaterialCommunityIcons name="emoticon-sick-outline" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.sickness}</Text>
      </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.dashboard}>
      <AntDesign name="calendar" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.birthDate}</Text>
      </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.dashboard}>
      <Entypo name="location" size={30} color="#1E5DFF" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{patient.address}</Text>
      </View>

      </TouchableOpacity>
      <View style={styles.account}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tit}>Update</Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.tit}>Logout</Text>
      </TouchableOpacity>

      </View>
      
    </View>
  </View>
  )
}

export default PatientProfile

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    back:{
        marginLeft:10

    },
    body:{
        display:'flex',
        flexDirection:'column',
        marginTop:50,
        marginLeft:15,
        marginRight:15,
        marginBottom:15
    },
    header:{
        marginLeft:120,
        fontSize:23,
        color:'#1E5DFF',
        fontWeight:'bold',
        lineHeight:32
    },
    home:{
        marginTop:4,
        display:'flex',
        flexDirection:'column'
    },
    profile:{
      display:'flex',
      flexDirection:'column',
      marginLeft:170,
      gap:15,
      marginTop:2,
      marginBottom:30,
    },
    dashboard:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        paddingHorizontal:40,
        paddingVertical:20,
        borderColor:'#1E5DFF',
        borderWidth:0.2,
        width:'96%',
        borderEndWidth:0,
        borderStartWidth:0,
        height:75,
        marginLeft:10,
        marginRight:10,
        gap:30
    },
    age:{
      marginTop:10,
      fontSize:20,
      fontWeight:'400'

    },
    content:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'

    },
    icon:{
      marginTop:5
    },
    title:{
      fontSize:20,
      color:'',
      fontWeight:'semibold'
    },
    account:{
        display:'flex',
        flexDirection:'row',
        marginLeft:90,
        marginTop:40,
        gap:30
    },
    button:{
        backgroundColor:'#1E5DFF',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:25
    },
    tit:{
        color:'white',
        fontWeight:'500',
        fontSize:17
    }
})