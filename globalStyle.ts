import { StyleSheet } from "react-native";

import { appColors } from "./appColors";

export const globalStyle = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  p0: {
    padding: 0,
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  gap16: {
    gap: 16,
  },
  gap12: {
    gap: 12,
  },
  p8: {
    padding: 8,
  },
  p16: {
    padding: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  mb32: {
    marginBottom: 32,
  },
  gap10: {
    gap: 10,
  },
  gap8: {
    gap: 8,
  },
  w0h0: {
    width: 0,
    height: 0,
  },
  gap4: {
    gap: 4,
  },
  flexRow: {
    flexDirection: "row",
  },
  bold: {
    fontFamily: "Montserrat-Bold",
  },
  mt12: {
    marginTop: 12,
  },
  shadow: {
    shadowColor: appColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  formatItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  marginTopMinus16: {
    marginTop: -16,
  },
  whiteBg: {
    flex: 1,
    backgroundColor: appColors.white,
  },
});
