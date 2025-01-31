import { Image, useWindowDimensions, View } from "react-native";
import React from "react";
import { styles } from "./loader.style";

const Loader = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={[
        styles.loadingConteiner,
        {
          width: width,
          height: height,
        },
      ]}
    >
      <Image
        style={styles.loadingImage}
        source={require("../../../../assets/images/loader.gif")}
      />
    </View>
  );
};

export default Loader;
