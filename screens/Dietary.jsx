import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Dietary = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.body}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
      <Entypo name="arrow-long-left" size={30} color="white" />
      <Text style={styles.header}>Dietary Plan</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
    <Text style={styles.description}>
    Follow a balanced and nutritious diet to support your overall health:
      {"\n"}
      Morning (8:00 AM): Whole grain oatmeal with fruits and a glass of low-fat milk.
      {"\n"}
      Afternoon (1:00 PM): Grilled chicken salad with a variety of vegetables and olive oil dressing.
      {"\n"}
      Evening (8:00 PM): Baked salmon with quinoa and steamed broccoli.
      </Text>

    </View>
  </View>
  )
}

export default Dietary

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