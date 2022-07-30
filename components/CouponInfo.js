import { StyleSheet, View, Text } from "react-native";



export default CouponInfo = ({coupon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>Cupón #{coupon.id}</Text>
      <Text style={styles.descTitle}>Descripción:</Text>
      <Text style={styles.desc}>{coupon.description}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  id: {
    fontWeight: "bold",
    fontSize: 28,
  },

  desc: {
    fontSize: 20
  },

  descTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold"
  },

  container: {
    margin: "3%"
  }
});
