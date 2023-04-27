import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    modalView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)"
    },

    
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
        paddingVertical: 40,
        backgroundColor: "#fff",
        borderRadius: 14
    },


    modalTitle: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: "bold"
    },


    modalDetailContainer: {
        paddingVertical: 10
    },


    modalDetailMessage: {
        fontSize: 16,
        fontWeight: "400"
    },


    modalSelectedTask: {
        marginTop: 6,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },


    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%"
    }







})


export default styles;