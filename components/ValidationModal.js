import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import ValidationResult from "./ValidationResult.js";
import NotifyUsageResult from "./NotifyUsageResult";


export default function ValidationModal({hide, scannedData}) {
  const [notifyUse, setNotifyUse] = useState();

  return (
    <Modal style={styles.modal} isVisible={true} onRequestClose={hide}>
      {/* Siempre que se renderice este componente es porque el Modal es visible */}
      { scannedData ?
        <NotifyUsageResult 
          hide={hide}
          coupon={notifyUse}
        />
        :
        <ValidationResult 
          hide={hide}
          scannedData={scannedData} 
          notifyUse={setNotifyUse}
        />
      }
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "90%",
    height: "90%",
  },
});
