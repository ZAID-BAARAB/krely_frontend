import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { notificationData } from "@/constants/data";
import CustomSwitch from "@/components/ui/CustomSwitch";

const NotificationSetting = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">
            Notifications
          </Text>
        </View>

        <View className="px-4 pt-8">
          <View className="border border-g30 rounded-xl px-4 pb-4">
            {notificationData.map(({ id, name }, idx) => (
              <View
                key={`${id}`}
                className={`flex-row justify-between items-center pt-4 ${
                  idx + 1 === notificationData.length
                    ? ""
                    : "border-b border-g30 border-dashed pb-4"
                }`}
              >
                <Text className="text-g60">{name}</Text>
                <CustomSwitch />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({});
