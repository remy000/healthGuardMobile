import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Welcome, Remy</Text>
        <FontAwesome name="user-plus" size={33} color="#1E5DFF" />
      </View>
      <Text style={styles.data}>Health Data</Text>
      <View style={styles.home}>
        <View style={styles.dashboard}>
        <Fontisto name="blood-drop" size={70} color="red" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Blood Glucose</Text>
          <Text style={styles.dashBoardText}>80 mg/dl</Text>

        </View>
        <Text style={styles.levels}>Normal</Text>
        </View>
        <View style={styles.dashboard}>
        <Fontisto name="blood" size={63} color="#7DF9FF" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Blood Pressure</Text>
          <Text style={styles.dashBoardText}>102 mmhg</Text>

        </View>
        <Text style={styles.levels}>Normal</Text>

        </View>
        <View style={styles.dashboard1}>
        <FontAwesome6 name="brain" size={57} color="gray" style={styles.icon2} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Stress Level</Text>
          <Text style={styles.dashBoardText}>50 ms</Text>

        </View>
        <Text style={styles.levels1}>Normal</Text>

         </View>
         <View style={styles.dashboard1}>
         <FontAwesome5 name="heartbeat" size={57} color="orange" style={styles.icon} />
        <View style={styles.subDashboard}>
          <Text style={styles.dashboardHeader}>Heart Rate</Text>
          <Text style={styles.dashBoardText}>98 Bpm</Text>

        </View>
        <Text style={styles.levels1}>Normal</Text>

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
      marginLeft:10
    },
    levels1:{
      marginTop:40,
      fontSize:20,
      color:'white',
      fontWeight:'800',
      marginLeft:20
    }
})