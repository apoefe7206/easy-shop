import React from "react";
import { StyleProp, Text, TextStyle, View } from "react-native";
import RenderHTML, { defaultSystemFonts } from "react-native-render-html";

import { CustomTextProps } from "../../../models/templates/CustomText";
import { appColors } from "../../../../appColors";
import { styles } from "./customText.style";
import { FontNames } from "../../../models/app/App";
const HTMLText = ({
  htmlContent = "",
  color,
  style,
  callback,
  fontFamily,
}: {
  htmlContent: string;
  color?: string;
  style?: StyleProp<TextStyle>;
  callback?: () => void;
  fontFamily?: FontNames;
}) => {
  const systemFonts = [
    ...defaultSystemFonts,
    "Montserrat-Regular",
    "Montserrat-SemiBold",
    "Montserrat-Black",
    "Montserrat-Bold",
    "Montserrat-Light",
    "Montserrat-Medium",
  ];
  return (
    <RenderHTML
      source={{ html: htmlContent }}
      baseStyle={{
        color: color || appColors.grayDark,
        // @ts-ignore
        ...style,
        fontFamily: fontFamily || "Montserrat-Regular",
      }}
      systemFonts={systemFonts}
      renderersProps={{
        a: {
          onPress: () => {
            if (callback) {
              return callback();
            }
          },
        },
      }}
    />
  );
};

const DefaultText = ({ props }: { props: CustomTextProps }) => {
  if (props.type === "default" && props.isHTML) {
    let htmlContent = props.text || "";
    return HTMLText({
      htmlContent: htmlContent,
      color: props.color,
      style: props.style,
      callback: props.htmlCallback,
      fontFamily: props.fontFamily,
    });
  }
  return props.type === "default" ? (
    <View style={[styles.row, props.style]}>
      {props.hasDot ? <View style={styles.dot} /> : null}
      <Text
        style={[
          {
            fontSize: props.fontSize,
            fontFamily: props.fontFamily,
            lineHeight: props.lineHeight,
            textAlign: props.textAlign,
            color: props.color || appColors.grayDark,
          },
          props.style,
          props.hasDot && styles.dotText,
        ]}
        numberOfLines={props.numberOfLines}
      >
        {props.text || ""}
      </Text>
    </View>
  ) : null;
};

const HorizontalText = ({ props }: { props: CustomTextProps }) => {
  return props.type === "horizontalText" ? (
    <View style={[styles.horizontalTextContainer, props.style]}>
      {props.leftText && (
        <Text
          style={[
            {
              fontSize: props.fontSize,
              fontFamily: props.leftTextFontFamily,
              lineHeight: props.lineHeight,
              textAlign: props.leftTextAlign,
              color: props.leftTextColor || appColors.black,
            },
            props.style,
          ]}
          numberOfLines={props.leftNumberOfLines}
        >
          {props.leftText || ""}
        </Text>
      )}
      <Text
        style={[
          {
            fontSize: props.fontSize,
            fontFamily: props.rightTextFontFamily,
            textAlign: props.rightTextAlign,
            color: props.rightTextColor || appColors.black,
          },
          props.style,
        ]}
        numberOfLines={props.rightNumberOfLines}
      >
        {props.rightText || ""}
      </Text>
    </View>
  ) : null;
};

export const CustomText: React.FC<CustomTextProps> = (props) => {
  if (props.type === "default") {
    return DefaultText({ props });
  } else if (props.type === "horizontalText") {
    return HorizontalText({ props });
  }

  return null;
};
