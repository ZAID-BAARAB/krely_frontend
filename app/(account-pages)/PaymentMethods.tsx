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
import { AntDesign, Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { paymentMethodsData } from "@/constants/data";

const PaymentMethods = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-between items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60">Payment Methods</Text>
          <Pressable onPress={() => router.push("/AddNewPaymentMethod" as any)}>
            <AntDesign name="plus" size={24} color="#3f3f3f" />
          </Pressable>
        </View>

        <View className="px-4 pt-4">
          {paymentMethodsData.map(({ id, name, icon }) => (
            <View
              key={`${id}`}
              className="p-4 border border-g30 rounded-xl flex-row justify-between items-center w-full mt-4"
            >
              <View className="flex-row justify-start items-center ">
                <View className="bg-white w-8 h-8 rounded-full flex-row justify-center items-center ">
                  <Image source={icon} />
                </View>
                <Text className="text-sm font-medium text-g60 pl-1">
                  {name}
                </Text>
              </View>
              <Text className="text-sm text-g50">Connected</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({});
