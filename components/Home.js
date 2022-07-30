import { StyleSheet, View } from 'react-native';
import ScanButton from "./ScanButton.js";


export default Home = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ScanButton navigation={navigation} />
    </View>
  );
};



const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
