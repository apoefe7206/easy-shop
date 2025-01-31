import React, { useMemo } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";

import { appColors } from "../../../../appColors";
import { StatusTypes } from "../../../models/app/App";
import { styles } from "./alerts.style";

export interface AlertsProps {
  type: StatusTypes;
  callBack?: () => void;
  alertText: string | JSX.Element;
}

export const Alerts: React.FC<AlertsProps> = ({
  type,
  callBack,
  alertText,
}) => {
  const width = useWindowDimensions().width;

  const statusConfig = useMemo(
    () => ({
      info: {
        backgroundColor: appColors.information,
        lightBackgroundColor: appColors.informationLight,
        iconName: "info",
        alertTitle: "Information",
      },
      warning: {
        backgroundColor: appColors.warning,
        lightBackgroundColor: appColors.warningLight,
        iconName: "warning",
        alertTitle: "Warning",
      },
      error: {
        backgroundColor: appColors.error,
        lightBackgroundColor: appColors.errorLight,
        iconName: "close1",
        alertTitle: "Error",
      },
      success: {
        backgroundColor: appColors.success,
        lightBackgroundColor: appColors.successLight,
        iconName: "check",
        alertTitle: "Success",
      },
    }),
    []
  );

  const { backgroundColor, lightBackgroundColor, iconName, alertTitle } =
    statusConfig[type];
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: backgroundColor,
        },
      ]}
    >
      <View style={styles.headerContainer}></View>
      <View style={styles.body}>
        <View></View>
      </View>
      <Pressable onPress={callBack}>
        <View style={styles.circleContainer}>
          <View
            style={[
              styles.largeCircle,
              {
                backgroundColor: lightBackgroundColor,
                width: width / 4.37,
                height: width / 4.37,
                borderRadius: width / 8.74,
              },
            ]}
          />
          <View
            style={[
              styles.smallCircle,
              {
                backgroundColor: lightBackgroundColor,
                shadowColor: backgroundColor,
                width: width / 5.5,
                height: width / 5.5,
                borderRadius: width / 11,
              },
            ]}
          />
        </View>
      </Pressable>
    </View>
  );
};
