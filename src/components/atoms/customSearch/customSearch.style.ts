import { StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  container: {
    borderColor: appColors.redOrj,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: appColors.redOrj,
    padding: 10,
  },
  icon: {
    color: appColors.white,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
