import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { config, getStoredData } from '../config'; 
import axios from 'axios';

const Home = () => {
  const { backendUrl } = config;
  const [data,setData]=useState([]);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [name,setName]=useState('');
  const [error,setError]=useState('');
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
            setName(data.names);
            fetchHealthData(data.patientId);
          }
        } catch (error) {
          setError(error.message);
        }
      };

      const fetchHealthData = async (id) => {
        try {
          const response = await axios.get(`${backendUrl}/healthData/findPatientData/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.status === 200) {
            const data = response.data;
            setData(data);
          }
        } catch (error) {
          setError(error.message);
        }
      };

      fetchPatient();
    }
  }, [email, token, backendUrl]);

  const dummyData=data.slice(-7);
  const glucose = dummyData.map(item => item.bloodGlucose);
  const pressure = dummyData.map(item => item.bloodPressure);
  const heartRate = dummyData.map(item => item.heartRate);
  const stress=dummyData.map(item=>item.stressLevel);

  const glucoseAverage = glucose.reduce((acc, curr) => acc + curr, 0) / dummyData.length;
const averageBodyPressure = pressure.reduce((acc, curr) => acc + curr, 0) / dummyData.length;
const averageHeartRate = heartRate.reduce((acc, curr) => acc + curr, 0) / dummyData.length;
const averageStress = stress.reduce((acc, curr) => acc + curr, 0) / dummyData.length;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Welcome, {name.split(' ')[1]}</Text>
        <FontAwesome name="user-plus" size={33} color="#1E5DFF" />
      </View>
      <Text style={styles.data}>Health Data</Text>
      <View style={styles.home}>
        <View style={styles.dashboard}>
        <Fontisto name="blood-drop" size={70} color="red" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Blood Glucose</Text>
          <Text style={styles.dashBoardText}>{`${glucoseAverage.toFixed(2)} mg/dl`}</Text>
        </View>
        <Text style={styles.levels}>{glucoseAverage<70?"Low":glucoseAverage>100?"High":"Normal"}</Text>
        </View>
        <View style={styles.dashboard}>
        <Fontisto name="blood" size={63} color="#7DF9FF" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Blood Pressure</Text>
          <Text style={styles.dashBoardText}>{`${averageBodyPressure.toFixed(2)} mmHg`}</Text>

        </View>
        <Text style={styles.levels}>{averageBodyPressure<90? "low":averageBodyPressure>120?"High":"Normal"}</Text>

        </View>
        <View style={styles.dashboard}>
        <FontAwesome6 name="brain" size={57} color="gray" style={styles.icon2} />
        <View style={styles.subDashboard1}>
          <Text style={styles.dashboardHeader}>Stress Level</Text>
          <Text style={styles.dashBoardText}>{`${averageStress.toFixed(2)} ms`}</Text>

        </View>
        <Text style={styles.levels}>{averageStress<50?"low":averageStress>76?"High":"Medium"}</Text>

         </View>
         <View style={styles.dashboard}>
         <FontAwesome5 name="heartbeat" size={57} color="orange" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Heart Rate</Text>
          <Text style={styles.dashBoardText}>{`${averageHeartRate.toFixed(2)} Bpm`}</Text>

        </View>
        <Text style={styles.levels}>{averageHeartRate<60?"low":averageHeartRate>100?"High":"Normal"}</Text>

        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    body:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:90,
        marginLeft:15,
        marginRight:15
    },
    header:{
       
        fontSize:27,
        color:'#1E5DFF',
        fontWeight:'bold',
        lineHeight:32
    },
    data:{
      marginTop:33,
      marginLeft:15,
      color:'#1E5DFF',
      fontWeight:'semibold',
      fontSize:20
    },
    home:{
        marginTop:20,
        display:'flex',
        flexDirection:'column'
    },
    dashboard:{
        backgroundColor:'#1E5DFF',
        width:'95%',
        height:125,
        marginLeft:12,
        marginBottom:5,
        borderRadius:20,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        gap:30
    },
    dashboard1:{
      backgroundColor:'#1E5DFF',
      width:'95%',
      height:125,
      marginLeft:10,
      marginBottom:5,
      borderRadius:20,
      paddingHorizontal:15,
      display:'flex',
      flexDirection:'row',
      gap:30
  },
    subDashboard:{
      marginTop:15,
      display:'flex',
      flexDirection:'column',
      gap:5
    },
    subDashboard1:{
      marginTop:15,
      display:'flex',
      flexDirection:'column',
      gap:5,
      marginRight:40
    },
    dashBoardText:{
      fontSize:25,
      fontWeight:'bold',
      color:'white',
      marginTop:10

    },
    dashboardHeader:{
      fontSize:20,
      fontWeight:'semibold',
      color:'white',
    },
    icon:{
      marginTop:23,
    },
    icon2:{
      marginTop:25,

    },
    levels:{
      marginTop:40,
      fontSize:20,
      color:'white',
      fontWeight:'800',

    },
    levels1:{
      marginTop:40,
      fontSize:20,
      color:'white',
      fontWeight:'800',
      marginLeft:20
    }
})