import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import dashArrow from "@/assets/images/dashed-arrow.png";
import ReceiveProductSvg from "@/assets/images/ReceiveProductSvg";
import ProductReceivedSvg from "@/assets/images/ProductReceivedSvg";

const TrackOrder = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-screen bg-white">
        <View className="flex-row justify-start items-center  px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">Track Order</Text>
        </View>
        <View className="px-4 pt-8">
          <View className="border border-g30 rounded-xl p-4">
            <View className="flex-row justify-between items-center text-xl text-g60">
              <View className="flex justify-center items-center flex-col gap-3">
                <View className="w-10 h-10 border border-g30 rounded-full flex justify-center items-center">
                  <Octicons
                    name="package-dependents"
                    size={24}
                    color="#3f3f3f"
                  />
                </View>
                <View className="relative">
                  <Ionicons name="checkmark-circle" size={20} color="#3f3f3f" />

                  <View className="absolute bottom-2.5 -right-16">
                    <Image source={dashArrow} />
                  </View>
                </View>
              </View>
              <View className="flex justify-center items-center flex-col gap-3">
                <View className="w-10 h-10 border border-g30 rounded-full flex justify-center items-center">
                  <MaterialCommunityIcons
                    name="truck-fast-outline"
                    size={24}
                    color="#3f3f3f"
                  />
                </View>
                <View className="relative">
                  <MaterialIcons
                    name="radio-button-on"
                    size={20}
                    color="#3f3f3f"
                  />
                  <View className="absolute bottom-2.5 -right-16">
                    <Image source={dashArrow} />
                  </View>
                </View>
              </View>
              <View className="flex justify-center items-center flex-col gap-3">
                <View className="w-10 h-10 border border-g30 rounded-full flex justify-center items-center">
                  <ReceiveProductSvg />
                </View>
                <View className="relative">
                  <MaterialIcons
                    name="radio-button-off"
                    size={20}
                    color="#696969"
                  />
                  <View className="absolute bottom-2.5 -right-16">
                    <Image source={dashArrow} />
                  </View>
                </View>
              </View>
              <View className="flex justify-center items-center flex-col gap-3 ">
                <View className="w-10 h-10 border border-g30 rounded-full flex justify-center items-center">
                  <Ionicons
                    name="checkmark-done-circle-outline"
                    size={24}
                    color="#3f3f3f"
                  />
                </View>
                <View className="relative">
                  <MaterialIcons
                    name="radio-button-off"
                    size={20}
                    color="#696969"
                  />
                </View>
              </View>
            </View>
            <Text className="text-base pt-5 text-center text-g50">
              Order in Delivery
            </Text>
          </View>
        </View>
        <View className="px-4 pt-8">
          <Text className="text-base text-g60 font-semibold pb-2">
            Delivery Status
          </Text>
          <View className="border border-g30 rounded-xl p-4">
            <View className="flex-row justify-start items-center gap-4">
              <View className="relative">
                <MaterialIcons
                  name="radio-button-on"
                  size={20}
                  color="#3f3f3f"
                />
                <View className="absolute -bottom-[38px] w-[1px] h-10 border-l border-dashed border-g50 left-[9px]"></View>
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-g60 font-medium">
                    Order is being Delivered - Dec 23
                  </Text>
                  <Text className="text-xs text-g50">09.44 PM</Text>
                </View>
                <Text className="text-xs text-g50 pt-1">
                  4 Evergreen Street Lake Zurich. IL 60047
                </Text>
              </View>
            </View>
            <View className="">
              <View className="border-b border-g30 border-dashed pb-3 ml-9"></View>
            </View>
            <View className="flex-row justify-start items-center gap-4 pt-3">
              <View className="relative">
                <MaterialIcons
                  name="radio-button-on"
                  size={20}
                  color="#3f3f3f"
                />
                <View className="absolute -bottom-[38px] w-[1px] h-10 border-l border-dashed border-g50 left-[9px]"></View>
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-g60 font-medium">
                    Order is being Delivered - Dec 23
                  </Text>
                  <Text className="text-xs text-g50">09.44 PM</Text>
                </View>
                <Text className="text-xs text-g50 pt-1">
                  4 Evergreen Street Lake Zurich. IL 60047
                </Text>
              </View>
            </View>
            <View className="">
              <View className="border-b border-g30 border-dashed pb-3 ml-9"></View>
            </View>
            <View className="flex-row justify-start items-center gap-4 pt-3">
              <View className="relative">
                <MaterialIcons
                  name="radio-button-on"
                  size={20}
                  color="#3f3f3f"
                />
                <View className="absolute -bottom-[38px] w-[1px] h-10 border-l border-dashed border-g30 left-[9px]"></View>
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-g60 font-medium">
                    Order is being Delivered - Dec 23
                  </Text>
                  <Text className="text-xs text-g50">09.44 PM</Text>
                </View>
                <Text className="text-xs text-g50 pt-1">
                  4 Evergreen Street Lake Zurich. IL 60047
                </Text>
              </View>
            </View>
            <View className="">
              <View className="border-b border-g30 border-dashed pb-3 ml-9"></View>
            </View>
            <View className="flex-row justify-start items-center gap-4 pt-3 ">
              <MaterialIcons name="radio-button-on" size={20} color="#3f3f3f" />
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-g60 font-medium">
                    Order is being Delivered - Dec 23
                  </Text>
                  <Text className="text-xs text-g50">09.44 PM</Text>
                </View>
                <Text className="text-xs text-g50 pt-1">
                  4 Evergreen Street Lake Zurich. IL 60047
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackOrder;
