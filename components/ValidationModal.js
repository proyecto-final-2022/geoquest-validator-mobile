import { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import ValidationResult from "./ValidationResult.js";
import NotifyUsageResult from "./NotifyUsageResult";


export default ValidationModal = ({hide, scannedData}) => {
  const [notifyUse, setNotifyUse] = useState();

  return (
    <Modal style={styles.modal} isVisible={true}>
      {/* Siempre que se renderice este componente es porque el Modal es visible */}
      { notifyUse ?
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