import React, {useState} from 'react';
import { KeyboardAvoidingView, Keyboard, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] =useState();
  const [taskItems, setTaskItems] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, {text: task, completed: false}]);
    setTask(null);
  }
  const handleTaskPress = (index) => {
    setSelectedTaskIndex(index);
    setIsModalVisible(true);
  };
  const handleDelete = () => {
    if (selectedTaskIndex !== null) {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(selectedTaskIndex, 1);
      setTaskItems(itemsCopy);
    }
    setIsModalVisible(false);
  };
  const handleCheck = () => {
    if (selectedTaskIndex !== null) {
      let itemsCopy = [...taskItems];
      itemsCopy[selectedTaskIndex].completed = !itemsCopy[selectedTaskIndex].completed;
      setTaskItems(itemsCopy);
    }
    setIsModalVisible(false);
  };


  return (
    <View style={styles.container}>
         <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
       <View style ={styles.tasksWrapper}>
          <Text style ={styles.sectionTitle}>Today's Tasks</Text>
          <View style = {styles.items}>
            {/*Tasks*/}
            {
              taskItems.map((item,index) => {
              return (
                <TouchableOpacity key ={index} onPress = {() => handleTaskPress(index)}>
                    <Task text = {item.text} completed={item.completed}/>
                </TouchableOpacity>
              )

              })
            }
            {/*<task text={'Task 1'}/>
            <Task text={'Task 2'}/>*/}
          </View>
       </View>

       </ScrollView>
       {/* Input box*/}
       <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCheck}>
            <Text style={styles.buttonText}>Toggle Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>

       <KeyboardAvoidingView
         behavior={Platform.OS === "ios"? "padding":"height"}
         style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'} value= {task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress ={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style= {styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
         </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7C1B5',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold'
  } ,
  sectionTitle: {

  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1, 
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent: 'center' ,
    alignItems:'center'
  },
  addText: {},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    marginVertical: 10,
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
