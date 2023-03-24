import React, {useState} from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Keyboard, Button, TouchableOpacity} from 'react-native'
import Task from './src/Task';

export default function App() {
  const [ task, setTask] = useState()
  const [taskItem,setTaskItem]=useState([])
  const handleAddTask= ()=>{
    Keyboard.dismiss()
      setTaskItem([...taskItem, task])
      setTask(null)
      console.log(task)
    }
    const completeTask = (index)=>{
      let itemscopy = [...taskItem]
      itemscopy.splice(index, 1)
      setTaskItem(itemscopy)
    }
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? "padding":  "height"}>
        <TextInput
              style={styles.input}
              placeholder='write a task'
              value={task}
              onChangeText={text => setTask(text)}/>
              <Button onPress={()=> handleAddTask()} title='add todo' color='coral' />
        </KeyboardAvoidingView>
          <Text style={styles.sectionTitle}> Today's Task </Text>

          <View style={styles.items}>
          {
              taskItem.map((item, index)=>{
              return (<TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                    <Task text={item}/>
              </TouchableOpacity>
              )
              })
            }
          </View>
        </View>
        
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20
  },
  items:{
    marginTop:22,
},
sectionTitle:{
  fontSize:24,
  fontWeight: 'bold'
},
items:{
  marginTop:30
},
input:{
  marginBottom: 1,
 paddingHorizontal: 8,
 paddingVertical:6,
 borderBottomWidth: 1,
 borderBottomColor: '#ddd'
 }
});