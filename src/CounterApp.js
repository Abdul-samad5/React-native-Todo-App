import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import React, {Component} from 'react';
class CounterApp extends Component{
    
      increaseCounter =() => {
        this.setState({counter: this.state.counter + 1})
      }
      decreaseCounter =() => {
        this.setState({counter: this.state.counter - 1})
      }
      render(){
        return (
            <View style={styles.container}>
              <View style={{flexDirection: "row", width: 200,
            justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=>this.increaseCounter()}>
                  <Text>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>{this.state.counter}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.decreaseCounter()}>
                  <Text>Decrease</Text>
                </TouchableOpacity>
              </View>
              <StatusBar style="auto" />
            </View>
          );
        }
    }
     function mapStateToProps(state)  {
        return{
            counter: state.counter
        }
     }
     export default connect(mapStateToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
