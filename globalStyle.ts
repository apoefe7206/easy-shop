import { StyleSheet } from "react-native";

import { appColors } from "./appColors";

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.maastrichtBlue,
  },
  text: {
    color: "#fff",
  },
});

export const globalStyle = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: appColors.richBlack,
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
});
