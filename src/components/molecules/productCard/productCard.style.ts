import { StyleSheet } from "react-native";
import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: appColors.graySoft2,
    borderColor: appColors.upMaroon,
  },
  container: {
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: appColors.white,
    padding: 10,
    borderColor: appColors.redOrj,
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Montserrat-Bold",
    maxWidth: 150,
    marginTop: 10,
  },
  price: {
    fontFamily: "Montserrat-Regular",
    marginTop: 10,
    color: appColors.redOrj,
  },
  iconContainer: {
    backgroundColor: appColors.white,
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 50,
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon: {
    fontSize: 20,
    color: appColors.redOrj,
  },
});
