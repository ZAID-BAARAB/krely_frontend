import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Animated, {
  AnimatedRef,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ItemProps } from "./OnBoardingSliderItem";
import { router } from "expo-router";

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<ItemProps>>;
  x: SharedValue<number>;
};

const SliderButton = ({ flatListRef, flatListIndex, dataLength, x }: Props) => {
  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
    };
  });

  return (
    <TouchableWithoutFeedback
      className="w-full"
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({
            index: flatListIndex.value + 1,
          });
        } else {
          router.push("/SignInPage" as any);
        }
      }}
    >
      <Animated.View className={"w-full bg-gray-800 py-3 rounded-lg "}>
        <View className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <Animated.Text
            className=" text-white font-semibold text-base"
            style={[textAnimationStyle]}
          >
            Get Started
          </Animated.Text>
        </View>
        <Animated.Text
          className="text-center text-white font-semibold text-base"
          style={[arrowAnimationStyle]}
        >
          Next
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default SliderButton;
