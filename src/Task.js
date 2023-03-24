import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

 const Task= (props)=> {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}></View>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.circle}></View>
    </View>
  )
}

export default Task
const styles = StyleSheet.create({
  item:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius:10,
    borderStyle: "dashed",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap'
  },
  square:{
    width: 24,
    borderRadius:5,
    marginRight:15,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4
  },
  itemText:{
    maxWidth: '80%',
   
  },
  circle:{
    width: 12,
    borderRadius:5,
    borderWidth: 2,
    marginRight:15,
    height:12,
    backgroundColor:'#55BCF6'
  }
  });