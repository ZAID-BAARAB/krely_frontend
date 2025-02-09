import { helpSupportLinks } from "@/constants/data";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HelpSupport() {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">
            Help & Support
          </Text>
        </View>

        <View className="mx-4 mt-6 border border-g30 px-4 pb-4 rounded-xl">
          {helpSupportLinks.map(({ id, text, isLink, link }, idx) => (
            <Pressable
              onPress={() => {
                if (isLink) {
                  router.push(link as any);
                } else {
                  return null;
                }
              }}
              key={`${id}`}
              className={`${
                idx + 1 === helpSupportLinks.length
                  ? "pt-4"
                  : "py-4 border-b border-dashed border-g30"
              } flex-row justify-between items-center`}
            >
              <Text className="text-base text-g60 font-medium">{text}</Text>
              <Ionicons
                name="chevron-forward-sharp"
                size={16}
                color="#3f3f3f"
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
