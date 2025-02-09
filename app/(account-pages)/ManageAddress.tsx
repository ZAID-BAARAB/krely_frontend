import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const ManageAddress = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-between items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60">Manage Address</Text>
          <Pressable onPress={() => router.push("/AddNewAddress" as any)}>
            <AntDesign name="plus" size={24} color="#3f3f3f" />
          </Pressable>
        </View>

        <View className="flex flex-col  px-4 pt-8">
          <View className="border border-g30 rounded-xl p-4">
            <View className="flex-row justify-between items-center border-b border-dashed border-g30 pb-3">
              <View className="flex-row justify-start items-center ">
                <Text className="text-base pr-2 font-medium text-g60">
                  Hilda Cobb
                </Text>
                <Text className="text-xs text-g50 py-0.5 px-1 bg-g20 border border-g30 rounded-md">
                  Main Address
                </Text>
              </View>
              <Pressable>
                <AntDesign name="sharealt" size={20} color="#3f3f3f" />
              </Pressable>
            </View>
            <View className="flex-row justify-start items-center  text-g50 text-xs pt-3">
              <View>
                <Feather name="map" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">
                701 7th Ave. New York, NY 10036, USA
              </Text>
            </View>
            <View className="flex-row justify-start items-center   pt-2">
              <View>
                <Feather name="phone" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">(+1111 467 378 399)</Text>
            </View>

            <View className="pt-3">
              <Pressable
                onPress={() => router.push("/AddressDetails" as any)}
                className="primaryButtonOutline w-full !bg-white !py-2 border border-g30 rounded-md"
              >
                <Text className="text-center text-g60 font-medium">
                  Change Address
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="border border-g30 rounded-xl p-4 mt-4">
            <View className="flex-row justify-between items-center border-b border-dashed border-g30 pb-3">
              <View className="flex-row justify-start items-center ">
                <Text className="text-base pr-2 font-medium text-g60">
                  Anny Hub
                </Text>
              </View>
              <Pressable>
                <AntDesign name="sharealt" size={20} color="#3f3f3f" />
              </Pressable>
            </View>
            <View className="flex-row justify-start items-center  text-g50 text-xs pt-3">
              <View>
                <Feather name="map" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">
                701 7th Ave. New York, NY 10036, USA
              </Text>
            </View>
            <View className="flex-row justify-start items-center   pt-2">
              <View>
                <Feather name="phone" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">(+1111 467 378 399)</Text>
            </View>

            <View className="pt-3 flex-row">
              <Pressable
                onPress={() => router.push("/AddressDetails" as any)}
                className="primaryButtonOutline flex-1 !bg-white !py-2 border border-g30 rounded-md"
              >
                <Text className="text-center text-g60 font-medium">
                  Change Address
                </Text>
              </Pressable>
              <Pressable className="bg-white py-2 border border-g30 rounded-md w-8 flex justify-center items-center ml-2">
                <Entypo name="dots-three-vertical" size={16} color="#3f3f3f" />
              </Pressable>
            </View>
          </View>
          <View className="border border-g30 rounded-xl p-4 mt-4">
            <View className="flex-row justify-between items-center border-b border-dashed border-g30 pb-3">
              <View className="flex-row justify-start items-center ">
                <Text className="text-base pr-2 font-medium text-g60">
                  Jessy Milan
                </Text>
              </View>
              <Pressable>
                <AntDesign name="sharealt" size={20} color="#3f3f3f" />
              </Pressable>
            </View>
            <View className="flex-row justify-start items-center  text-g50 text-xs pt-3">
              <View>
                <Feather name="map" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">
                701 7th Ave. New York, NY 10036, USA
              </Text>
            </View>
            <View className="flex-row justify-start items-center   pt-2">
              <View>
                <Feather name="phone" size={14} color="#3f3f3f" />
              </View>
              <Text className="text-g50 pl-1">(+1111 467 378 399)</Text>
            </View>

            <View className="pt-3 flex-row">
              <Pressable
                onPress={() => router.push("/AddressDetails" as any)}
                className="primaryButtonOutline flex-1 !bg-white !py-2 border border-g30 rounded-md"
              >
                <Text className="text-center text-g60 font-medium">
                  Change Address
                </Text>
              </Pressable>
              <Pressable className="bg-white py-2 border border-g30 rounded-md w-8 flex justify-center items-center ml-2">
                <Entypo name="dots-three-vertical" size={16} color="#3f3f3f" />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageAddress;

const styles = StyleSheet.create({});
