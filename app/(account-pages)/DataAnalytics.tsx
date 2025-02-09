import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Entypo, Feather } from "@expo/vector-icons";

const DataAnalytics = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">
            Data Analytics
          </Text>
        </View>

        <View className="px-4 pt-8 flex flex-col gap-4">
          <View className="border border-g30 p-4 rounded-xl">
            <View className="flex-row justify-between items-center">
              <Text className="text-g60 text-base font-medium">Data Usage</Text>
              <Feather name="chevron-right" size={24} color="#3f3f3f" />
            </View>
            <Text className="text-g50 pt-2 text-sm pr-7">
              Data usage includes collecting, storing, and analyzing user
              information for improved services.
            </Text>
          </View>
          <View className="border border-g30 p-4 rounded-xl">
            <View className="flex-row justify-between items-center">
              <Text className="text-g60 text-base font-medium">
                Ad Preference
              </Text>
              <Feather name="chevron-right" size={24} color="#3f3f3f" />
            </View>
            <Text className="text-g50 pt-2 text-sm pr-7">
              Customize your ad preferences to see relevant and personalized
              advertisements tailored for you.
            </Text>
          </View>
          <View className="border border-g30 p-4 rounded-xl">
            <View className="flex-row justify-between items-center">
              <Text className="text-g60 text-base font-medium">
                Download My Data
              </Text>
              <Feather name="chevron-right" size={24} color="#3f3f3f" />
            </View>
            <Text className="text-g50 pt-2 text-sm pr-7">
              Securely download your personal data in a few easy steps for
              safekeeping.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataAnalytics;

const styles = StyleSheet.create({});
