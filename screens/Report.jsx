import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Report = ({navigation}) => {
    const inputs = [
        { label: 'Calories', placeholder: 'Enter Calories' },
        { label: 'Body Water', placeholder: 'Enter Body Water' },
        { label: 'Exercise Duration', placeholder: 'Enter Exercise Duration' },
        { label: 'Heart Rate', placeholder: 'Enter Heart Rate' },
        { label: 'Blood Glucose', placeholder: 'Enter Blood Glucose' },
        { label: 'Blood Pressure', placeholder: 'Enter Blood Pressure' },
        { label: 'Stress Level', placeholder: 'Enter Stress Level' },
        { label: 'Respiration Level', placeholder: 'Enter Respiration Level' }
      ];
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
          <Entypo name="arrow-long-left" size={30} color="#1E5DFF" />
          <Text style={styles.header}>Daily Report</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.contentText}>Generate your daily report for better care plans</Text>
      <View style={styles.content}>
        <View style={styles.homeContent}>
          {inputs.map((input, index) => {
            if (index % 2 === 0) {
              return (
                <View key={index} style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.labels}>{inputs[index].label}</Text>
                    <TextInput
                      placeholder={inputs[index].placeholder}
                      style={styles.homeInput}
                    />
                  </View>
                  {inputs[index + 1] && (
                    <View style={styles.inputContainer}>
                      <Text style={styles.labels}>{inputs[index + 1].label}</Text>
                      <TextInput
                        placeholder={inputs[index + 1].placeholder}
                        style={styles.homeInput}
                      />
                    </View>
                  )}
                </View>
              );
            }
            return null;
          })}
        </View>
        <TouchableOpacity style={styles.report} onPress={()=>navigation.navigate('report')}>
            <Text style={styles.reportText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
);
}

export default Report

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
      },
      body: {
        marginTop: 30,
        display: 'flex'
      },
      back: {
        marginLeft: 25,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        gap: 30
      },
      header: {
        fontSize: 25,
        color: '#1E5DFF',
        fontWeight: 'bold',
        marginLeft: 50
      },
      contentText: {
        marginTop: 60,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: '500'
      },
      homeContent: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 60
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      inputContainer: {
        flex: 1,
        marginRight: 10,
      },
      labels: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10,
        marginLeft: 10
      },
      homeInput: {
        paddingVertical: 3,
        borderColor: '#1E5DFF',
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 0.4,
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