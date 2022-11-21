import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { notifyUsage } from "../utils/coupons";
import { CustomSpinner } from "./CustomSpinner";


export default function NotifyUsageResult({coupon, hide}) {
  const [failure, setFailure] = useState(undefined);

  useEffect(() => {
    console.log("Por notificar");
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

  var backgroundColor = "#64DB52";
  var buttonBgColor = "#54CB32";
  var buttonBorderColor = "#249B02";
  if (failure) {
    backgroundColor = "#F58553";
    buttonBgColor = "#EE6432";
    buttonBorderColor = "#DD5422";
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
        <TouchableOpacity 
          style={{
            ...styles.hideButton, 
            backgroundColor: buttonBgColor,
            borderColor: buttonBorderColor
          }} 
          onPress={hide}
        >
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
    color: "white",
    textAlign: "center"
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
    borderWidth: 2
  },

  hideButtonText: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  }
});
