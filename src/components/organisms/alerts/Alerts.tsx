import React, { useMemo } from "react";
import { Pressable, useWindowDimensions, View, Text } from "react-native";

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
        alertTitle: "Removed",
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
        alertTitle: "Added",
      },
    }),
    []
  );

  const { backgroundColor, lightBackgroundColor, iconName, alertTitle } =
    statusConfig[type];

  const truncatedAlertText = `${alertText}... ${
    type === "success" ? "added" : "removed"
  }`;

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: backgroundColor,
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <Text style={[{ color: backgroundColor }]}>{alertTitle}</Text>
      </View>
      <View style={styles.body}>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {truncatedAlertText}
        </Text>
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
