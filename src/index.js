import React, { useState } from 'react';
import { Text,  View } from 'react-native';
import { Input, List, TaskModal } from './components';
import styles from './styles';


export default function App() {

  const [textInput, setTextInput] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const onAddTask = () => {
    if(textInput.length ===0 ) return;

    setTasksList([
      ...tasksList,
      {
        id: Math.random().toString(),
        value: textInput
      }
    ]);

    setTextInput("")
  }


  const onHandleTask = (id) => {
    setIsModalVisible(!isModalVisible);
    const selectedTask = tasksList.find( task => task.id === id );
    setSelectedTask(selectedTask);
  }


  const onHandleCancelModal = () => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(null)
  }


  const onHandleDeleteTask = (id) => {
    setTasksList( tasksList.filter( task => task.id !== id ))
    setIsModalVisible(!isModalVisible)
  }



  return (

    <View style={ styles.container }>

      <Text style={ styles.title }> Lista optimizada   </Text>


      <Input 
        placeholder="Nueva tarea"
        value={ textInput }
        onChangeText={ textInput => setTextInput(textInput) }
        buttonTitle="Crear"
        buttonColor="#009FB7"
        onHandleButton={ onAddTask }
      />


      <Text style={ styles.taskText }> 
        { tasksList.length === 0 ? "No hay tareas" : "Lista de tareas" }  
      </Text>


      <List 
        tasksList= { tasksList }
        onSelectItem = { onHandleTask }
      />

      <TaskModal 
        isVisible={ isModalVisible }
        animationType = "slide"
        selectedTask={ selectedTask }
        onCancel={ onHandleCancelModal }
        onDelete={ onHandleDeleteTask }
      />

    </View>
  );
}


