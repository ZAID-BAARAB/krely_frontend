import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg'; // Import Circle from react-native-svg
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Define types for the component
interface ImageDimensions {
  width: number;
  height: number;
}

interface Offset {
  x: number;
  y: number;
}

// Rename the interface to avoid conflict
interface CircleData {
  id: number;
  cx: number;
  cy: number;
  r: number;
}

const RefrigSystemdesign1: React.FC = () => {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({ width: 0, height: 0 });
  const [zoomLevel, setZoomLevel] = useState<number>(1); // Initial zoom level (1 = 100%)
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 }); // Offset for panning

  // Circle details (relative to the original image dimensions)
  const circles: CircleData[] = [{ id: 1, cx: 769, cy: 1431, r: 9 }];

  // Function to calculate scaled coordinates for the circle
  const getScaledCoordinates = (circle: CircleData) => {
    if (!imageDimensions.width || !imageDimensions.height) {
      return { cx: 0, cy: 0, r: circle.r }; // Default coordinates if layout isn't ready yet
    }

    const scaleX = (imageDimensions.width * zoomLevel) / 2859; // Original image width
    const scaleY = (imageDimensions.height * zoomLevel) / 3663; // Original image height

    return {
      cx: (circle.cx * scaleX) / zoomLevel,
      cy: (circle.cy * scaleY) / zoomLevel,
      r: circle.r * zoomLevel,
    };
  };

  // Animated values for pan
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const onPanGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
    { useNativeDriver: false }
  );

  const onPanHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === 4) {
      // Update the offset state when the pan gesture ends
      setOffset((prevOffset) => ({
        x: prevOffset.x + nativeEvent.translationX,
        y: prevOffset.y + nativeEvent.translationY,
      }));

      // Reset the translation values
      translateX.setValue(0);
      translateY.setValue(0);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 5)); // Limit zoom to a maximum level
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Limit zoom to a minimum level
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Image Container */}
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={onPanHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [
                  { scale: zoomLevel },
                  { translateX: Animated.add(translateX, new Animated.Value(offset.x)) },
                  { translateY: Animated.add(translateY, new Animated.Value(offset.y)) },
                ],
              },
            ]}
          >
            <Image
              source={require('@/assets/clickabile_imgs/system_refrige.png')} // Replace with your image path
              style={styles.image}
              resizeMode="contain"
              onLayout={(event: LayoutChangeEvent) => {
                const { width, height } = event.nativeEvent.layout;
                setImageDimensions({ width, height });
              }}
            />

            {/* Overlay SVG Circles */}
            <Svg
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 'transparent', width: imageDimensions.width, height: imageDimensions.height },
              ]}
            >
              {circles.map((circle) => {
                const { cx, cy, r } = getScaledCoordinates(circle);
                return (
                  <Circle
                    key={circle.id}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="transparent"
                    stroke="red"
                    strokeWidth={4}
                    onPressIn={() => console.log('Circle clicked!')} // Example click handler
                  />
                );
              })}
            </Svg>
          </Animated.View>
        </PanGestureHandler>

        {/* Zoom Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Zoom In" onPress={handleZoomIn} />
          <Button title="Zoom Out" onPress={handleZoomOut} />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RefrigSystemdesign1;