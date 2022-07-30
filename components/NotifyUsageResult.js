import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { notifyUsage } from "../utils/coupons";


export default NotifyUsageResult = ({coupon, hide}) => {
  const [failure, setFailure] = useState(undefined);
  
  useEffect(() => {
    notifyUsage(coupon).then(_res => {
      setFailure(false);
    }).catch(err => {
      setFailure(true);
      console.log(err);
    });
  }, [coupon]);


  if (failure === undefined) {
    return <CustomSpinner />;
  }


  var backgroundColor = "#44BB22";
  if (failure) {
    backgroundColor = "#FF1111";
  }

  var resultText = "Se notificó el uso del cupón";
  if (failure) {
    resultText = "Algo salio mal, vuelva a intentarlo";
  }

  return (
    <View style={{...styles.resultContainer, backgroundColor}}>
      <View style={styles.resultItemContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.resultItemContainer}>
        <TouchableOpacity style={styles.hideButton} onPress={hide}>
          <Text style={styles.hideButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  resultContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  resultText: {
    fontWeight: "bold",
    fontSize: 32,
    color: "white"
  },

  resultItemContainer: {
    display: "flex",
    height: "50%",
    padding: "5%",
    justifyContent: "center",
    alignItems: "center"
  },

  hideButton: {
    width: "50%",
    padding: "3%",
    borderWidth: 2,
    borderColor: "#BBBBBB"
  },

  hideButtonText: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  }
});
