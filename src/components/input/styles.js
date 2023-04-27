import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30
  },
  
  input: {
    width: 250,
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
})

export default styles;