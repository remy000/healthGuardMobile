import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Plan = () => {
  return (
   <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>CarePlan</Text>
        <FontAwesome6 name="hospital-user" size={33} color="#1E5DFF" />
      </View>
      <View style={styles.home}>
        <View style={styles.dashboard}>

        </View>
        <View style={styles.dashboard}>

        </View>
        <View style={styles.dashboard}>

         </View>
         <View style={styles.dashboard}>

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
        marginBottom:4,
        borderRadius:10

    }
})