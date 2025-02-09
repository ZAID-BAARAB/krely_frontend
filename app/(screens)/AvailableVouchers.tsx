import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { voucherItems } from "@/constants/data";
import RadioButton from "@/components/ui/RadioButton";

const AvailableVouchers = () => {
  const [activeVoucher, setActiveVoucher] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-screen bg-white">
        <View className="flex-row justify-start items-center  px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">
            Promos & Vouchers
          </Text>
        </View>
        <View className="pt-8 px-4">
          <Text className="text-base font-semibold text-g60">
            Have a Promo Code?
          </Text>
          <View className="flex-row justify-between items-center gap-3 pt-3">
            <View className="flex-1 border border-g30 rounded-md bg-g20 py-3">
              <TextInput
                className="text-g60 bg-transparent outline-none placeholder:text-g50 text-sm placeholder:text-sm px-2 w-full"
                placeholder="Enter code here"
              />
            </View>
            <View className="">
              <Pressable className=" bg-g60 py-3.5 px-3 rounded-lg">
                <Text className="text-center text-white text-base font-semibold">
                  Reedem
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View className="px-4 pt-6">
          {voucherItems.map(({ id, title }, idx) => (
            <Pressable
              key={`${id}`}
              onPress={() => setActiveVoucher(idx)}
              className="p-4 rounded-xl border border-g30 bg-g20 my-2"
            >
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center">
                  <MaterialCommunityIcons
                    name="label-percent-outline"
                    size={24}
                    color="#3f3f3f"
                  />

                  <Text className="text-base font-medium text-g60 pl-2">
                    {title}
                  </Text>
                </View>
                <RadioButton isActive={idx === activeVoucher} />
              </View>
              <View className="flex-row justify-start items-center text-xs  pt-1">
                <Text className="text-g50">20DEALS</Text>
                <Entypo name="dot-single" size={24} color="#3f3f3f" />

                <Text className="text-g50">Min spend $150</Text>
                <Entypo name="dot-single" size={24} color="#3f3f3f" />

                <Text className="text-g50">Valid til 12/12/2024</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvailableVouchers;

const styles = StyleSheet.create({});
