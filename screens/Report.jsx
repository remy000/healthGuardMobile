import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';
import { config, getStoredData } from '../config';

const Report = ({navigation}) => {
  const { backendUrl } = config;
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [error,setError]=useState('');
  const [patientId,setPatientId]=useState(0);
  const [formData, setFormData] = useState({
    calories: '',
    bodyWater: '',
    exercisesDuration: '',
    heartRate: '',
    bloodGlucose: '',
    bloodPressure: '',
    stressLevel: '',
    respLevel: '',
    patientId:0
  });
   
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
            setPatientId(data.patientId);
          }
        } catch (error) {
          setError(error.message);
        }
      };
      fetchPatient();
    }
  }, [email, token, backendUrl]);


  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
    const inputs = [
        { label: 'Calories', placeholder: 'Enter Calories' },
        { label: 'Body Water', placeholder: 'Enter Body Water' },
        { label: 'Exercise Duration', placeholder: 'Enter Exercise Duration' },
        { label: 'Heart Rate', placeholder: 'Enter Heart Rate' },
        { label: 'Blood Glucose', placeholder: 'Enter Blood Glucose' },
        { label: 'Blood Pressure', placeholder: 'Enter Blood Pressure' },
        { label: 'Stress Level', placeholder: 'Enter Stress Level' },
        { label: 'Respiration Level', placeholder: 'Enter Respiration Level' }
      ];

      const healthData={
        ...formData,
        patientId:patientId
      }
      const handleSubmit=async()=>{
        try {
          const response = await axios.post(`${backendUrl}/healthData/saveData`,healthData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.status === 200) {
           navigation.navigate("Home");
          }
        } catch (error) {
          console.log(error.message);
        }

      }
  return (
    <View style={styles.container}>
    <View style={styles.body}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
        <Entypo name="arrow-long-left" size={30} color="#1E5DFF" />
        <Text style={styles.header}>Daily Report</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.contentText}>Generate your daily report for better care plans</Text>
    <View style={styles.content}>
      <View style={styles.homeContent}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Calories</Text>
            <TextInput
              placeholder="Enter Calories"
              style={styles.homeInput}
              value={formData.calories}
              onChangeText={value => handleInputChange('calories', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Body Water</Text>
            <TextInput
              placeholder="Enter Body Water"
              style={styles.homeInput}
              value={formData.bodyWater}
              onChangeText={value => handleInputChange('bodyWater', value)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Exercise Duration</Text>
            <TextInput
              placeholder="Enter Exercise Duration"
              style={styles.homeInput}
              value={formData.exerciseDuration}
              onChangeText={value => handleInputChange('exerciseDuration', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Heart Rate</Text>
            <TextInput
              placeholder="Enter Heart Rate"
              style={styles.homeInput}
              value={formData.heartRate}
              onChangeText={value => handleInputChange('heartRate', value)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Blood Glucose</Text>
            <TextInput
              placeholder="Enter Blood Glucose"
              style={styles.homeInput}
              value={formData.bloodGlucose}
              onChangeText={value => handleInputChange('bloodGlucose', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Blood Pressure</Text>
            <TextInput
              placeholder="Enter Blood Pressure"
              style={styles.homeInput}
              value={formData.bloodPressure}
              onChangeText={value => handleInputChange('bloodPressure', value)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Stress Level</Text>
            <TextInput
              placeholder="Enter Stress Level"
              style={styles.homeInput}
              value={formData.stressLevel}
              onChangeText={value => handleInputChange('stressLevel', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Respiration Level</Text>
            <TextInput
              placeholder="Enter Respiration Level"
              style={styles.homeInput}
              value={formData.respirationLevel}
              onChangeText={value => handleInputChange('respirationLevel', value)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.report} onPress={handleSubmit}>
        <Text style={styles.reportText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

export default Report

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
      },
      body: {
        marginTop: 30,
        display: 'flex'
      },
      back: {
        marginLeft: 25,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        gap: 30
      },
      header: {
        fontSize: 25,
        color: '#1E5DFF',
        fontWeight: 'bold',
        marginLeft: 50
      },
      contentText: {
        marginTop: 60,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: '500'
      },
      homeContent: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 60
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      inputContainer: {
        flex: 1,
        marginRight: 10,
      },
      labels: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10,
        marginLeft: 10
      },
      homeInput: {
        paddingVertical: 3,
        borderColor: '#1E5DFF',
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 0.4,
      },
      report:{
        marginTop:40,
        marginLeft:90,
        marginRight:60,
        backgroundColor:'#32de84',
        padding:17,
        width:'50%',
        borderRadius:40
      },
      reportText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
      }
})