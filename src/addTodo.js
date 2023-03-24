import React, {useState} from 'react'
import { StyleSheet, Button,View, TextInput } from 'react-native'

export default function AddTodo(){
    const [ task, setTask] = useState()
    const [ taskItem, setTaskItem] = useState([])
    const handleAddTask= ()=>{
        setTaskItem([...taskItem, task])
        setTask(null)
        console.log(task)
      }
    return(
        
        <View>
             {/* <TextInput
             style={styles.input}  
             value={task}
             placeholder='new to do....'
             onChangeText={changeHandle}
            //  onChangeText={text=> setTask(text)}
             /> */}
             <TextInput
              placeholder='write a task'
              value={task}
              onChangeText={text => setTask(text)}/>
             {/* <Button onPress={()=> submitHandler()} title='add todo' color='coral' /> */}
             {/* <Button onPress={()=> {submitHandler(text)}} title='add todo' color='coral' /> */}
             <Button onPress={()=> handleAddTask()} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
   input:{
    marginBottom: 1,
   paddingHorizontal: 8,
   paddingVertical:6,
   borderBottomWidth: 1,
   borderBottomColor: '#ddd'
   }
  });