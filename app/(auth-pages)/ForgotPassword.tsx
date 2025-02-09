import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import { router } from "expo-router";

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <ScrollView className="min-h-screen bg-white">
        <View className="text-center pt-8 px-6">
          <Text className=" font-semibold text-g60 text-center text-2xl">
            Forget Password
          </Text>
          <Text className="text-base text-g50 pt-3 text-center">
            Reset your access effortlessly and regain control with our password
            recovery service.
          </Text>
        </View>
        <View className="pt-8 px-6 ">
          <FormField isTitle={true} placeholder="Email" title="Enter email" />
        </View>

        <View className="px-4 pt-8">
          <Pressable
            onPress={() => router.push("/VerifyOTP" as any)}
            className="w-full bg-g60 py-3 rounded-lg"
          >
            <Text className="text-center text-white text-base font-semibold">
              Send OTP
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
