import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Exercise = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.body}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
      <Entypo name="arrow-long-left" size={30} color="white" />
      <Text style={styles.header}>Exercise Plan</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
    <Text style={styles.description}>
        Engage in a 30-minute daily exercise routine that includes a mix of cardio, 
        Adhere to a strict medication schedule, taking prescribed medicines at the same time each day to manage your condition effectively:
      {"\n"}
      Morning (8:00 AM): 20 minutes of cardio exercises, such as running or cycling.
      {"\n"}
      Afternoon (1:00 PM): 30 minutes of strength training, focusing on major muscle groups.
      {"\n"}
      Evening (8:00 PM): 15 minutes of flexibility exercises, including yoga or stretching..
      </Text>
        <TouchableOpacity style={styles.report} onPress={()=>navigation.navigate('report')}>
            <Text style={styles.reportText}>Daily Report</Text>
        </TouchableOpacity>

    </View>
  </View>
  )
}

export default Exercise

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