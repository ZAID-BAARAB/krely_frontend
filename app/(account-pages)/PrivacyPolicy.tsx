import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicy() {
  return (
    <SafeAreaView>
      <ScrollView className="min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full py-6 ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">
            Privacy Policy
          </Text>
        </View>
        <View className="px-4">
          <Text className="text-g60 font-medium text-sm">
            Effective Date: December 19, 2024
          </Text>
          <View className="mt-4 p-4 border border-g30 rounded-xl flex flex-col">
            <View className="">
              <Text className="text-g60 font-medium text-sm">
                1. Personal Information:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Provide your name, email, and contact details for account setup
                and communication.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                2. Data Usage:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Data is used to improve services, personalize experience, and
                ensure security.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                3. Third-Party Services:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Explore our trusted partners offering complementary services for
                enhanced convenience.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">4. Cookies:</Text>
              <Text className="pt-2 text-g50 text-sm">
                Cookies help personalize your experience and improve site
                functionality. Learn more.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                4. Security Measures:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Our app employs encryption, secure payments, and data protection
                for safety.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
