import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { config, getStoredData } from '../config';
import axios from 'axios';

const Plan = ({navigation}) => {
  const { backendUrl } = config;
  const [error,setError]=useState('');
  const [plan,setPlan]=useState({
    personalizedPlan:'',
    medicalPlan:'',
    exercisePlan:'',
    dietPlan:'',
    });
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
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
              fetchPlanData(data.patientId);
            }
          } catch (error) {
            setError(error.message);
          }
        };
  
        const fetchPlanData = async (id) => {
          try {
            const response = await axios.get(`${backendUrl}/carePlan/patientPlan/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (response.status === 200) {
              const data = response.data;
              setPlan({
                personalizedPlan:data.personalizedPlan,
                medicalPlan:data.medicalPlan,
                exercisePlan:data.exercisePlan,
                dietPlan:data.dietPlan
              });
            }
          } catch (error) {
            setError(error.message);
          }
        };
  
        fetchPatient();
      }
    }, [email, token, backendUrl]);
    const splitByPeriod = (text) => {
      return text.split('.').filter(sentence => sentence.trim() !== '');
    };
    const navigateToScreen = (screenName, dataToSend) => {
      navigation.navigate(screenName, { data: dataToSend });
    };
    const personalizedPlanSentences = splitByPeriod(plan.personalizedPlan);
    const medicalPlanSentences = splitByPeriod(plan.medicalPlan);
    const exercisePlanSentences = splitByPeriod(plan.exercisePlan);
    const dietPlanSentences = splitByPeriod(plan.dietPlan);

  return (
   <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>CarePlan</Text>
        <FontAwesome6 name="hospital-user" size={33} color="#1E5DFF" onPress={()=>navigation.navigate('appointment')} />
      </View>
      <View style={styles.home}>
        <View style={styles.dashboard}>
          <View style={styles.plan}>
          <Image source={require('../assets/p1.webp')} style={styles.images}/>
          <View style={styles.content}>
            <Text style={styles.title}>Personalized Care Plan</Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigateToScreen('personal',personalizedPlanSentences)}>
              <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
          </View>

          </View>

        </View>
        <View style={styles.dashboard}>
        <View style={styles.plan} >
          <Image source={require('../assets/p2.jpg')} style={styles.images}/>
          <View style={styles.content2}>
            <Text style={styles.title2}>Medical Care Plan</Text>
            <TouchableOpacity style={styles.button2} onPress={()=>navigateToScreen('medical',medicalPlanSentences)}>
              <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
          </View>

          </View>

        </View>
        <View style={styles.dashboard}>
        <View style={styles.plan}>
          <Image source={require('../assets/p4.webp')} style={styles.images}/>
          <View style={styles.content2}>
            <Text style={styles.title2}>Exercises Care Plan</Text>
            <TouchableOpacity style={styles.button2} onPress={()=>navigateToScreen('exercise',exercisePlanSentences)}>
              <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
          </View>
          </View>

         </View>
         <View style={styles.dashboard}>
         <View style={styles.plan}>
          <Image source={require('../assets/p5.jpg')} style={styles.images}/>
          <View style={styles.content2}>
            <Text style={styles.title2}>Dietary Care Plan</Text>
            <TouchableOpacity style={styles.button2} onPress={()=>navigateToScreen('dietary',dietPlanSentences)}>
              <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
          </View>
          </View>

        </View>
      </View>
    </View>
  )
}

export default Plan

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
        marginTop:70,
        marginLeft:15,
        marginRight:15,
        marginBottom:15
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
        height:140,
        marginLeft:12,
        marginBottom:8,
        borderRadius:10,
        borderColor:'#1E5DFF',
        borderWidth:0.5

    }, 
    plan:{
      display:'flex',
      flexDirection:'row'

    },
    images:{
      width:130,
      height:140,
      borderRadius:10
  },
  content:{
    display:'flex',
    flexDirection:'column',
  },
  title:{
    color:'white',
    fontSize:18,
    marginLeft:19,
    marginTop:25 
  },
  button:{
    backgroundColor:'white',
    alignItems:'center',
    marginHorizontal:40,
    paddingVertical:8,
    borderRadius:40,
     marginTop:20
  },
  content2:{
    display:'flex',
    flexDirection:'column',
  },
  title2:{
    color:'white',
    fontSize:20,
    marginLeft:25,
    marginTop:25 
  },
  button2:{
    backgroundColor:'white',
    alignItems:'center',
    marginLeft:40,
    marginRight:10,
    paddingVertical:8,
    borderRadius:40,
     marginTop:20
  },
  text:{
    color:'#1E5DFF',
    fontWeight:'800'
  }
})