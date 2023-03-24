import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CounterApp from './src/CounterApp';
//import { configureStore  } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  counter: 0
}
const reducer =(state = initialState)=>{
  return state
}
const store = configureStore(reducer)
class App extends Component{

 render(){
  return (
    <Provider store={store}>
        <CounterApp/>
    </Provider>
    // <View>
    //   <Text>hi im just starting react native</Text>
    // </View>
    
   );
 }
 }
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
