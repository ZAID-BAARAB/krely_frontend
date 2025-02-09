import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

interface RoomImagesSliderProps {
  images: string[];
}

const RoomImagesSlider: React.FC<RoomImagesSliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      {/* Horizontal Image Slider */}
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      {/* Full Screen Modal Overlay */}
      {selectedImage && (
        <Modal
          visible={!!selectedImage}
          transparent={true}
          animationType="fade"
          onRequestClose={closeFullScreen}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={closeFullScreen}
          >
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullScreenImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
      )}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center",     // centers horizontally
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
  },
});

export default RoomImagesSlider;


// import React, { useState } from "react";
// import { View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";

// interface ProductImagesSliderProps {
//   images: string[];
// }

// const RoomImagesSlider: React.FC<ProductImagesSliderProps> = ({ images }) => {
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);

//     // Handler for image press
//     const handleImagePress = (image: string) => {
//         setSelectedImage(image);
//     };

//     // Handler to close full screen view
//     const closeFullScreen = () => {
//         setSelectedImage(null);
//     };

//   return (
//     <View style={styles.container}>
//         <FlatList
//             data={images}
//             horizontal
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => handleImagePress(item)}>
//                     <Image source={{ uri: item }} style={styles.image} />
//                 </TouchableOpacity>
//             )}
//             showsHorizontalScrollIndicator={false}
//         />
//             {/* Full Screen Overlay */}
//         {selectedImage && (
//             <TouchableOpacity
//             style={styles.fullScreenOverlay}
//             onPress={closeFullScreen}
//             activeOpacity={1}
//             >
//             <Image
//                 source={{ uri: selectedImage }}
//                 style={styles.fullScreenImage}
//                 resizeMode="contain"
//             />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//   },
//   image: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   fullScreenOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0,0,0,0.9)",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 999, // Ensures the overlay is above other components
//   },
//   fullScreenImage: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default RoomImagesSlider;
