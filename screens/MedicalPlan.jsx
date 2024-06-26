import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
const MedicalPlan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
        <Entypo name="arrow-long-left" size={30} color="white" />
        <Text style={styles.header}>Medical Plan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
      <Text style={styles.description}>
      Adhere to a strict medication schedule, taking prescribed medicines at the same time each day to manage your condition effectively:
      {"\n"}
      Morning (8:00 AM): Take 20mg of Lisinopril for blood pressure control.
      {"\n"}
      Afternoon (12:00 PM): Take 500mg of Metformin to manage blood sugar levels.
      {"\n"}
      Evening (8:00 PM): Take 10mg of Atorvastatin to lower cholesterol levels.
      </Text>
      </View>
    </View>
  )
}

export default MedicalPlan

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1E5DFF",
        flex:1
    },
    body:{
        marginTop:30,
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
        height:'100%',
        backgroundColor:'white',
        marginTop:80
    },
    description: {
      fontSize: 14,
      marginHorizontal: 20,
      marginTop:50,
      fontSize:20,
      fontWeight:'400'
    },
})