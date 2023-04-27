import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";


const ListItem = ({ item, onSelectItem }) => {

    return(

        <TouchableOpacity 
            style={ styles.itemContainer } 
            onPress={ () =>  onSelectItem(item.id) }  
    >
            <Text style={ styles.textItem } > { item.value } </Text>
    </TouchableOpacity>

    )
};

export default ListItem;

