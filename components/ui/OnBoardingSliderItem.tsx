import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

export type ItemProps = {
  id: number;
  img: ImageSourcePropType;
  title: string;
  description: string;
};

type Props = {
  item: ItemProps;
  idx: number;
};

const OnBoardingSliderItem = ({ item, idx }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  return (
    <View className="">
      <View className="relative">
        <Image source={item.img} className=" w-full" />
      </View>
      <View className=" pt-10 ">
        <View
          style={{ width: SCREEN_WIDTH * 0.9, margin: SCREEN_WIDTH * 0.05 }}
          className=" justify-start items-center flex "
        >
          <Text className="text-4xl font-bold text-center ">{item.title}</Text>
          <Text className="text-center pt-5 text-base text-g50">
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingSliderItem;
