import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsService() {
  return (
    <SafeAreaView>
      <ScrollView className="min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full py-6 ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">
            Terms of Service
          </Text>
        </View>
        <View className="px-4">
          <Text className="text-g60 font-medium text-sm">
            Effective Date: December 19, 2024
          </Text>
          <View className="mt-4 p-4 border border-g30 rounded-xl flex flex-col ">
            <View className="">
              <Text className="text-g60 font-medium text-sm">
                1. Acceptance of Terms:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                By using our services, you agree to abide by our terms and
                conditions outlined herein.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                2. User Conduct:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Follow community guidelines to maintain a positive and
                respectful environment.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                3. Account Responsibility:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Users are responsible for maintaining the security and
                confidentiality of accounts.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                4. Content Ownership:
              </Text>
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
                Your content remains yours; we respect your ownership and
                privacy rights.
              </Text>
            </View>
            <View className="pt-4">
              <Text className="text-g60 font-medium text-sm">
                5. Prohibited Activities:
              </Text>
              <Text className="pt-2 text-g50 text-sm">
                Engaging in fraudulent, illegal, or abusive behavior is strictly
                prohibited on our platform. Stay compliant.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
