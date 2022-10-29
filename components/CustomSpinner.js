import * as Progress from "react-native-progress";


export default CustomSpinner = () => {
  return <Progress.Circle 
    style={{alignSelf: "center"}}
    size={100} 
    borderWidth={15}
    color={"#55AAFF"}
    indeterminate
  />;
};
