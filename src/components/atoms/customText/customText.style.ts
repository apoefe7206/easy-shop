import { StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  horizontalTextContainer: {
    flexDirection: "row",
    gap: 4,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 30,
    backgroundColor: appColors.redDarker,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
  },
  dotText: {
    paddingLeft: 8,
  },
});
