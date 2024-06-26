import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.home}>
        <View style={styles.profile}>
        <FontAwesome5 name="user-alt" size={70} color="#1E5DFF" />
        <View>
          <Text style={styles.names}>Dukundane Remy</Text>
          <Text style={styles.age}>60 year</Text>
        </View>

        </View>
        <TouchableOpacity style={styles.dashboard} onPress={() => navigation.navigate('profile')}>
        <FontAwesome5 name="key" size={45} color="#1E5DFF"  style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.subTitle}>User Information</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboard}>
        <FontAwesome5 name="lock" size={45} color="#1E5DFF" style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.title}>Privacy</Text>
          <Text style={styles.subTitle}>User Privacy</Text>
        </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.dashboard}>
         <Ionicons name="notifications"  size={45} color="#1E5DFF" style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.title}>Notification</Text>
          <Text style={styles.subTitle}>System Notifications</Text>
        </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboard}>
        <Entypo name="help-with-circle" size={45} color="#1E5DFF" style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.title}>Help</Text>
          <Text style={styles.subTitle}>Need help, Contact us</Text>
        </View>

        </TouchableOpacity>
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
        marginLeft:140,
        fontSize:27,
        color:'#1E5DFF',
        fontWeight:'bold',
        lineHeight:32
    },
    home:{
        marginTop:20,
        display:'flex',
        flexDirection:'column'
    },
    profile:{
      display:'flex',
      flexDirection:'row',
      marginLeft:50,
      gap:20,
      marginTop:20,
      marginBottom:50,
    },
    dashboard:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        paddingHorizontal:40,
        paddingVertical:20,
        borderColor:'#1E5DFF',
        borderWidth:0.2,
        borderEndWidth:0,
        borderStartWidth:0,
        width:'96%',
        height:100,
        marginLeft:10,
        marginRight:10,
        gap:30
    },
    names:{
      fontSize:27,
      fontWeight:'bold',
      color:'#1E5DFF',
    },
    age:{
      marginTop:10,
      fontSize:20,
      fontWeight:'600'

    },
    content:{
      display:'flex',
      flexDirection:'column',
      justifyContent:"space-between"

    },
    icon:{
      marginTop:5
    },
    title:{
      fontSize:23,
      color:'#1E5DFF',
      fontWeight:'bold'
    },
    subTitle:{
      fontSize:14,
      fontWeight:'400'
    }
})