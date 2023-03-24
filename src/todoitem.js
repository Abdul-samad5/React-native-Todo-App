import React from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import Task from './Task';

export default function TodoItem({item, handleClick}){
    return(
        <TouchableOpacity onPress={()=> handleClick(item.key)}>
             {/* <Text style={styles.item}>{item.text}</Text> */}
             <Task  text={item}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   item:{
    padding:16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius:10
   }
  });