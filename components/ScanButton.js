import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";


export default ScanButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("QRScan")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Validar Cupón</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    width: 300,
    height: 300,
    backgroundColor: "#55AAFF",
    borderRadius: 300,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    textAlign: "center"
  },
});
