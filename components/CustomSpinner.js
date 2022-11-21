import React from "react";
import * as Progress from "react-native-progress";


export default function CustomSpinner() {
  return <Progress.Circle 
    style={{alignSelf: "center"}}
    size={100} 
    borderWidth={15}
    color={"#55AAFF"}
    indeterminate
  />;
}
