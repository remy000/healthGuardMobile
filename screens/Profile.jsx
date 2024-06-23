import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Profile</Text>
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

export default Profile

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
        marginLeft:130,
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
        backgroundColor:'white',
        borderColor:'#1E5DFF',
        borderWidth:1,
        borderTopWidth:0,
        width:'100%',
        height:130,

    }
})