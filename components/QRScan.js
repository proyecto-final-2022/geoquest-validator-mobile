import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ValidationModal from "./ValidationModal.js";
import _ from "underscore";


export default function QRScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({data}) => {
    if (data)
      setScannedData(data);
  };

  return (
    <View style={styles.qrScannerContainer}>
      <BarCodeScanner
        barcodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.barcodeScanner]}
      />
      { scannedData && 
        <ValidationModal scannedData={scannedData} hide={() => setScannedData(undefined)}/>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  qrScannerContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "black"
  }
});
