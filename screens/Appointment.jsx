import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { config, getStoredData } from '../config';
import axios from 'axios';

const Appointment = ({navigation}) => {
  const { backendUrl } = config;
    const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [error,setError]=useState('');
    const [patientId,setPatientId]=useState(0);
    const [providerId,setProviderId]=useState(0);
    const formData={
      type:selectedAppointmentType,
      description:text,
      requestDate:date,
      patientId:patientId,
      providerId:providerId
    }
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate.toISOString().split('T')[0]);
      hideDatePicker();
    };
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
              setProviderId(data.providerId);
            }
          } catch (error) {
            setError(error.message);
          }
        };
        fetchPatient();
      }
    }, [email, token, backendUrl]);

    const handleSubmit=async()=>{
      try {
        const response = await axios.post(`${backendUrl}/appointment/bookAppointment`,formData, {
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
      <Entypo name="arrow-long-left" size={30} color="white" />
      <Text style={styles.header}>Appointment</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
        <Text style={styles.contentHeader}>Book an appointment with your {"\n"} care provider</Text>
        <View style={styles.subContent}>
        <Text style={styles.labels}>Appointment Type</Text>
        <Picker
            selectedValue={selectedAppointmentType}
            style={styles.homeInput}
            onValueChange={(itemValue, itemIndex) => setSelectedAppointmentType(itemValue)}
          >
             <Picker.Item label="select" value="select" />
            <Picker.Item label="Virtual" value="virtual" />
            <Picker.Item label="In-person" value="inperson" />
          </Picker>
          <Text style={styles.labels}>Appointment Date</Text>
          <TouchableOpacity style={styles.datePickerInput} onPress={showDatePicker}>
          <TextInput
            placeholder='Choose Date'
            style={styles.homeInput}
            value={date}
            editable={false}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
         <Text style={styles.labels}>Appointment Reason</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="Type your Description here..."
        value={text}
        onChangeText={setText}
      />


        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>

    </View>
  </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1E5DFF",
        flex:1
    },
    body:{
        marginTop:20,
        display:'flex'
    },
    back:{
        marginLeft:25,
        marginTop:50,
        display:'flex',
        flexDirection:'row',
        gap:30

    },
    header:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        marginLeft:50
    },
    content:{
        marginTop:40,
        marginLeft:30,
        display:'flex',
        flexDirection:'column'
    },
    contentHeader:{
        fontSize:20,
        color:'white',
        fontWeight:'500',
    },
    subContent:{
        display:'flex',
        flexDirection:'column',
        gap:7,
        marginTop:40
    },
    homeInput:{
        paddingVertical:10,
        borderColor:'#1E5DFF',
        backgroundColor:'white',
        width:350,
        height:50,
        paddingHorizontal:25,
        borderWidth:0.4,
        marginBottom:16
        },
        labels:{
            fontSize:20,
            color:'white'
        },
        textArea: {
            height: 150,
            borderColor: 'white',
            backgroundColor:'white',
            borderWidth: 1,
            padding: 10,
            textAlignVertical: 'top', 
            width:'96%'
          },
          button:{
            marginTop:40,
            marginLeft:90,
            marginRight:60,
            backgroundColor:'#32de84',
            padding:17,
            width:'50%',
            borderRadius:40
          },
          buttonText:{
            fontSize:22,
            color:'white',
            marginLeft:48,
            fontWeight:'bold'
          }
})