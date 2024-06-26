import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';

const SignUp = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');
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
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.images}/>
        <Text style={styles.text}>Create Account</Text>
       
        </View>
        <ScrollView style={styles.login}>
            <Text style={styles.labels}>Names</Text>
            <TextInput placeholder='Enter Names'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Email</Text>
            <TextInput placeholder='Enter email'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Phone</Text>
            <TextInput placeholder='Enter Phone'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>BirthDate</Text>
             <TouchableOpacity  onPress={showDatePicker}>
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
            <TextInput placeholder='Enter Bllod group'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Gender</Text>
             <Picker
            selectedValue={gender}
            style={styles.homeInput}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
             <Picker.Item label="select" value="select" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
            <Text style={styles.labels}>Weight</Text>
            <TextInput placeholder='Enter weight'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Age</Text>
            <TextInput placeholder='Enter Age'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>Address</Text>
            <TextInput placeholder='Enter address'
            style={styles.homeInput}
            />
             <Text style={styles.labels}>Sickness</Text>
            <TextInput placeholder='Enter sickness'
            style={styles.homeInput}
            />
            <Text style={styles.labels}>allergies (if any)</Text>
            <TextInput placeholder='Enter allergies'
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