import { Dimensions, StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

export const styles = StyleSheet.create({
  loadingConteiner: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: appColors.redOrj,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
});
