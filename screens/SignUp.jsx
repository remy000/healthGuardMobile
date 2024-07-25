import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import { config } from '../config';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const { backendUrl } = config;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');
    const [formData, setFormData] = useState({
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
      password: ''
    });
    const[gender,setGender]=useState('');
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
    const handleInputChange = (name, value) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

   
        const registerPatient = async () => {
          const dataForm={
            birthDate:date,
            ...formData
          }
          try {
            const response = await axios.post(`${backendUrl}/patient/register`,dataForm, {
              headers: {
                'Content-Type':'application/json'
              }
            });
            if (response.status === 200) {
              navigation.navigate("Login");
            }
          } catch (error) {
            setError(error.message);
          }
        };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.images}/>
      <Text style={styles.text}>Create Account</Text>
    </View>
    <ScrollView style={styles.login}>
      <Text style={styles.labels}>Names</Text>
      <TextInput
        placeholder='Enter Names'
        value={formData.names}
        onChangeText={value => handleInputChange('names', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Email</Text>
      <TextInput
        placeholder='Enter email'
        value={formData.email}
        onChangeText={value => handleInputChange('email', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Phone</Text>
      <TextInput
        placeholder='Enter Phone'
        value={formData.phoneNumber}
        onChangeText={value => handleInputChange('phoneNumber', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>BirthDate</Text>
      <TouchableOpacity onPress={showDatePicker}>
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
      <Text style={styles.labels}>Blood Group</Text>
      <TextInput
        placeholder='Enter Blood group'
        value={formData.bloodGroup}
        onChangeText={value => handleInputChange('bloodGroup', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Gender</Text>
      <Picker
        selectedValue={gender}
        style={styles.homeInput}
        onValueChange={(itemValue) => {
          setGender(itemValue);
          handleInputChange('gender', itemValue);
        }}
      >
        <Picker.Item label="select" value="select" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <Text style={styles.labels}>Weight</Text>
      <TextInput
        placeholder='Enter weight'
        value={formData.weight}
        onChangeText={value => handleInputChange('weight', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Age</Text>
      <TextInput
        placeholder='Enter Age'
        value={formData.age.toString()}
        onChangeText={value => handleInputChange('age', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Address</Text>
      <TextInput
        placeholder='Enter address'
        value={formData.address}
        onChangeText={value => handleInputChange('address', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Sickness</Text>
      <TextInput
        placeholder='Enter sickness'
        value={formData.sickness}
        onChangeText={value => handleInputChange('sickness', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Allergies (if any)</Text>
      <TextInput
        placeholder='Enter allergies'
        value={formData.allergies}
        onChangeText={value => handleInputChange('allergies', value)}
        style={styles.homeInput}
      />
      <Text style={styles.labels}>Password</Text>
      <TextInput
        placeholder='Enter Password'
        value={formData.password}
        onChangeText={value => handleInputChange('password', value)}
        style={styles.homeInput}
      />
    </ScrollView>
    <TouchableOpacity style={styles.button} onPress={registerPatient}>
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
        marginTop: 10,
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