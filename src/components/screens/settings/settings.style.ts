import { StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lightText: {
    color: appColors.black,
  },
  darkText: {
    color: appColors.white,
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
  },
  activeIcon: {
    color: appColors.redOrj,
  },
});
