import { StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  darkModalView: {
    backgroundColor: appColors.grayLight,
  },
  modalView: {
    margin: 20,
    backgroundColor: appColors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: "montserrat-semiBold",
  },
  description: {
    marginTop: 15,
  },
  price: {
    color: appColors.redOrj,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
    resizeMode: "contain",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
