import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import FormField from "@/components/ui/FormField";

const AddNewPaymentMethod = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-screen bg-white">
        <View className="flex-row justify-start items-center  px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">
            Add New Payment
          </Text>
        </View>

        <View className="px-4 pt-6">
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Amin Smith"
              title="Card Holder Name"
            />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="****6585"
              title="Card Number"
            />
          </View>
          <View className="pt-4 flex flex-row justify-between items-center">
            <View className="w-[48%]">
              <FormField
                isTitle={true}
                placeholder="dd.mm.yy"
                title="Exp Date"
              />
            </View>
            <View className="w-[48%]">
              <FormField isTitle={true} placeholder="****" title="CVC" />
            </View>
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="United States"
              title="Country"
            />
          </View>
        </View>
        <View className="flex justify-start items-center  pt-8 px-4">
          <Pressable className="w-full bg-g60 py-3 rounded-lg">
            <Text className="text-center text-white text-base font-semibold">
              Save
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewPaymentMethod;

const styles = StyleSheet.create({});
