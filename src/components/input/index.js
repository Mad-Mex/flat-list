import React from "react";
import { Button, TextInput, View } from "react-native";
import styles from "./styles";


const Input = ({ placeholder, value, onChangeText, buttonTitle, buttonColor, onHandleButton }) => {

    return(
        <View style={ styles.inputContainer } >
            <TextInput
                placeholder={ placeholder }
                style={ styles.input }
                value={ value }
                onChangeText={ onChangeText }
            />

            <Button
                title={ buttonTitle }
                color={ buttonColor }
                onPress={ onHandleButton }
            />
        </View>
    )
}


export default Input