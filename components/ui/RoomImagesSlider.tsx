import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

interface ProductImagesSliderProps {
  images: string[];
}

const RoomImagesSlider: React.FC<ProductImagesSliderProps> = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default RoomImagesSlider;
