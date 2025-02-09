import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CircleBg from "@/components/ui/CircleBg";
import { router } from "expo-router";

const SIZE = 100;
const COLOR = "#3f3f3f";

const ResetSuccessfully = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-6 my-8 items-center ">
          <View style={styles.dot} className=" items-center justify-center">
            <Feather
              name="check"
              size={48}
              color="white"
              style={{ zIndex: 100 }}
            />

            {[...Array(3).keys()].map((_, idx) => (
              <CircleBg key={idx} index={idx} />
            ))}
          </View>

          <View className="py-20">
            <Text className="text-2xl font-bold text-center  text-g60">
              Reset Successfully!
            </Text>
            <Text className="text-[14px] text-g50  text-center pt-3 px-6">
              Your password has been reset successfully. Please login with new
              credentials.
            </Text>
          </View>
          <View className="w-full pt-32">
            <Pressable
              onPress={() => router.push("/SignInPage")}
              className="w-full bg-g60 py-3 rounded-lg"
            >
              <Text className="text-center text-white text-base font-semibold">
                Verify
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetSuccessfully;

const styles = StyleSheet.create({
  dot: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR,
  },
});
