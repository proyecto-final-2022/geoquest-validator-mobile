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
    backgroundColor: "#CA955C",
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '#8c6132'
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    textAlign: "center"
  },
});
