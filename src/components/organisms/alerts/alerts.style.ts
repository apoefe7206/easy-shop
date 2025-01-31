import { Dimensions, StyleSheet } from "react-native";

import { appColors } from "../../../../appColors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 16,
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: appColors.white,
    position: "relative",
    overflow: "hidden",
  },
  body: {
    flex: 1,
    gap: 8,
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circleContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
  },
  largeCircle: {
    position: "absolute",
    width: width / 4.37,
    height: width / 4.37,
    borderRadius: width / 8.74,
    opacity: 0.6,
  },
  smallCircle: {
    position: "absolute",
    width: width / 5.5,
    height: width / 5.5,
    borderRadius: width / 11,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
});
