import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Personalised = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.body}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
      <Entypo name="arrow-long-left" size={30} color="white" />
      <Text style={styles.header}>Personalized Plan</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
    <Text style={styles.description}>
        Engage in a 30-minute daily exercise routine that includes a mix of cardio, 
        strength training, and flexibility exercises. Follow a customized diet plan tailored 
        to your specific nutritional needs, ensuring a balanced intake of proteins, 
        carbohydrates, and healthy fats. Schedule a monthly checkup with your healthcare 
        provider to monitor your progress and make necessary adjustments to your plan.
      </Text>

    </View>
  </View>
  )
}

export default Personalised

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
      fontSize:14,
      marginHorizontal: 20,
      marginTop:50,
      fontSize:20,
      fontWeight:'400'
    },
})