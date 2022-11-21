import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import CustomSpinner from "./CustomSpinner.js";
import CouponInfo from "./CouponInfo.js";
import NotifyUsageButton from "./NotifyUsageButton.js";
import { validate } from "../utils/coupons.js";


export default function ValidationResult({ notifyUse, scannedData, hide }) {
  const [isValid, setIsValid] = useState(undefined);
  const [coupon, setCoupon] = useState();

  useEffect(() => {
    validate(scannedData).then(({ validity, coupon }) => {
      setIsValid(validity);
      setCoupon(coupon);
    }).catch(error => {
      console.log(error);
    });
  }, [scannedData]);

  if (isValid === undefined) {
    return <CustomSpinner />;
  }

  /* if (!isValid) { */
  /*   return ( */
  /*     <View style={styles.failureContainer}> */
  /*       <View style={styles.failureItemContainer}> */
  /*         <Text style={styles.failureText}>Cupón Inválido</Text> */
  /*       </View> */
  /*       <View style={styles.failureItemContainer}> */
  /*         <TouchableOpacity style={styles.failureButton} onPress={hide}> */
  /*           <Image  */
  /*             style={styles.failureButtonImage} */
  /*             source={require("../assets/close-circular.png")}  */
  /*           /> */
  /*         </TouchableOpacity> */
  /*       </View> */
  /*     </View> */
  /*   ); */
  /* } */

  return (
    <View style={styles.successContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.successTitle}>Cupón Válido</Text>
      </View>
      <View style={styles.successInfoContainer}>
        <CouponInfo coupon={JSON.parse(scannedData)} />
      </View>
      <View style={styles.successButtonsContainer}>
        <NotifyUsageButton style={styles.notifyUsageBuatton} notifyUse={() => notifyUse(coupon)} />
        <TouchableOpacity style={styles.successButton} onPress={hide}>
          <Text style={styles.successButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  failureContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F16835",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  failureItemContainer: {
    display: "flex",
    height: "50%",
    justifyContent: "center"
  },

  failureText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 32
  },

  failureButton: {
    borderRadius: 300,
    width: 100,
    height: 100
  },

  failureButtonImage: {
    height: 100,
    width: 100
  },

  successContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%"
  },

  successInfoContainer: {
    height: "73%",
  },

  successButton: {
    backgroundColor: "#CA955C",
    padding: "3%",
  },

  successButtonText: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },

  titleContainer: {
    padding: "3%",
    backgroundColor: "#A0C562",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },

  successButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "20%",
  },

  successTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
});
