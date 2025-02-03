import { StyleProp, TextStyle } from "react-native";

import { AlignTypes, FontNames } from "../app/App";
import { AppColors } from "../../../appColors";

export type BaseProps = {
  type: "default" | "horizontalText";
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontFamily?: FontNames;
};

export type CustomTextProps =
  | (BaseProps & {
      type: "default";
      text?: string;
      isHTML?: boolean;
      htmlCallback?: () => void;
      numberOfLines?: number;
      color?: AppColors;
      textAlign?: AlignTypes;
      lineHeight?: number;
      hasDot?: boolean;
    })
  | (BaseProps & {
      type: "horizontalText";
      rightText?: string;
      leftText?: string;
      rightTextColor?: AppColors;
      leftTextColor?: AppColors;
      leftNumberOfLines?: number;
      rightNumberOfLines?: number;
      fontSize?: number;
      rightTextFontFamily?: FontNames;
      leftTextFontFamily?: FontNames;
      rightTextAlign?: AlignTypes;
      leftTextAlign?: AlignTypes;
      lineHeight?: number;
    });
