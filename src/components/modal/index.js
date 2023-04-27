import React from "react";
import { Modal, View, Button, Text } from "react-native";
import styles from "./styles";


const TaskModal = ({ isVisible, onCancel, onDelete, selectedTask, animationType }) => {

    return(

        <Modal
            visible={ isVisible }
            animationType={ animationType }
        >

            <View style={ styles.modalView } >
                <View style={ styles.modalContainer } >
                    <Text style={ styles.modalTitle } > Detalle de la tarea </Text>

                    <View style={ styles.modalDetailContainer } >
                        <Text style={ styles.modalDetailMessage } > Vas a eliminar esta tarea. ¿Estás seguro? </Text>
                        <Text style={ styles.modalSelectedTask } > { selectedTask?.value } </Text>
                    </View>

                    <View style={ styles.buttonContainer }>

                        <Button
                            title='Cancelar'
                            color="gray"
                            onPress={ onCancel }
                        />

                        <Button
                        title='Eliminar'
                        color="red"
                        onPress={ () => onDelete(selectedTask.id)  }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default TaskModal;