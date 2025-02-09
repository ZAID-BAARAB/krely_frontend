import { FlatList, Pressable, Text, View, ViewToken } from "react-native";

import React from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { router } from "expo-router";
import { onbordingSliderData } from "@/constants/data";
import OnBoardingSliderItem, {
  ItemProps,
} from "@/components/ui/OnBoardingSliderItem";
import Pagination from "@/components/ui/Pagination";
import SliderButton from "@/components/ui/SliderButton";

const OnBoardingSlider = () => {
  const flatListRef = useAnimatedRef<FlatList<ItemProps>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View className="justify-start items-center h-full bg-white ">
      <View className=" flex-1 rounded-t-3xl pb-6 pt-8">
        <Animated.FlatList
          ref={flatListRef}
          data={onbordingSliderData}
          onScroll={onScroll}
          keyExtractor={(item) => `key:${item.id}`}
          renderItem={({ item, index }) => {
            return <OnBoardingSliderItem item={item} idx={index} />;
          }}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />

        <View className="pb-6 ">
          <Pagination onbordingSliderData={onbordingSliderData} x={x} />
        </View>
        <View className="flex-1 px-4">
          <SliderButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={onbordingSliderData.length}
            x={x}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingSlider;
