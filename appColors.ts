import { ColorValue } from "react-native";

export const appColors = {
  //main colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  //base colors
  richBlack: "#021526",
  upMaroon: "#750E21",
  maastrichtBlue: "#09122C",
  darkBackground: "#121212",
  darkText: "#E0E0E0",
  lightBackground: "#FFFFFF",
  lightText: "#000000",
  grayDarker: "#181C26",
  grayDark: "#18203c",
  gray: "#3C4359",
  grayLight: "#4F586E",
  grayLighter: "#6B7288",
  grayLightest: "#969FB2",
  graySoft1: "#B3BBCE",
  graySoft2: "#CDCED9",
  graySoft25: "#F4F7FE",
  graySoft3: "#F9FBFF",
  graySoft4: "#FCFCFC",
  graySoft5: "#F6F7FC",
  graySoft6: "#E5ECF9",
  graySoft7: "#EDF1F9",
  redGray: "#F4EFEF",
  nudeYellow: "#F8F7F3",
  nudeGray: "#E3E3E3",
  bg: "#FBFBFB",
  lavender: "#E6ECF8",

  //primary colors
  redDarker: "#A50822",
  redDark: "#B20A25",
  redOrj: "#CD0E2D",
  redLive: "#EE0F33",
  redLight: "#D73E57",
  redLighter: "#FC4961",
  redLighter2: "#F4DCE0",
  redLightest: "#FEE5EA",
  redLightest2: "#FFF4F6",
  auburn: "#A3242C",

  turquoiseDarker: "#01848F",
  turquoiseDark: "#00A8B7",
  turquoiseSoft: "#80BEC3",
  turquoiseLight: "#D1ECF1",
  turquoiseLighter: "#E6F7F9",

  blueDarker: "#2D8EC1",
  blueDark: "#40AFE9",
  blueSoft: "#60ABD3",
  blueLight: "#A6DEFC",
  blueLighter: "#D2EFFF",

  yellow: "#E29501",
  orange: "#E24401",
  purple: "#812291",
  liveBlue: "#006EBE",

  //alert
  warning: "#FFA814",
  warningLight: "#FFF6E7",
  information: "#0B5FBC",
  informationLight: "#EBF4FF",
  error: "#F10000",
  errorLight: "#FDE5E5",
  success: "#27AB00",
  successLight: "#E9F6E5",
} as const;

export const appColorsLinearGradient: { [key: string]: string[] | number[] } = {
  redGradient: ["#EE0F33", "#A40822"],
  imageSliderGradient: ["rgba(24, 32, 60, 1)", "rgba(0, 0, 0, 0)"],
  medicalCardGradient: ["rgb(28, 38, 68)", "rgba(28, 38, 68, 0)"],
} as const;

type Keys = keyof typeof appColors;
export type AppColors = (typeof appColors)[Keys] & ColorValue;
