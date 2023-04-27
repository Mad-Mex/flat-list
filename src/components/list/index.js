import React from "react";
import { FlatList } from "react-native";
import ListItem from "./listItem.js";


const List = ({ tasksList, onSelectItem }) => {

    const renderItem = ({item}) => (
        <ListItem
            item = { item }
            onSelectItem={ onSelectItem } 
        />
    );

    const keyExtractor = item => item.id;

    return(

        <FlatList 
            data={ tasksList }
            keyExtractor={ keyExtractor }
            renderItem={ renderItem }
            alwaysBounceVertical={ false }
        />
    )
}


export default List;