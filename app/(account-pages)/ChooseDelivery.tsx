import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { deliveryItems } from "@/constants/data";
import RadioButton from "@/components/ui/RadioButton";

const ChooseDelivery = () => {
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60">Choose Delivery</Text>
        </View>

        <View className="px-4 pt-4 justify-start items-start flex-col  radioItems chooseDelivery">
          {deliveryItems.map(({ id, name, price, logo }, idx) => (
            <Pressable
              onPress={() => setActive(idx)}
              key={`${id}`}
              className="p-4 border border-g30 rounded-xl flex-row justify-between items-start w-full item mt-4"
            >
              <View className="flex-row justify-start items-start ">
                <View className="bg-g20 w-10 h-10 rounded-full flex justify-center items-center border border-g30">
                  <Image source={logo} />
                </View>
                <View className="pl-2">
                  <Text className="text-sm font-medium text-g60">{name}</Text>
                  <Text className="text-xs text-g50 pt-1">
                    Estimated arrival: 24-25 Dec, 2024
                  </Text>
                  <Text className="text-sm font-semibold text-g60 pt-2">
                    ${price}.00
                  </Text>
                </View>
              </View>
              <RadioButton isActive={active === idx} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseDelivery;

const styles = StyleSheet.create({});
