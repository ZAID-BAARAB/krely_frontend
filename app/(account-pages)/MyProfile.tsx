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
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import userImg from "@/assets/images/user-img.jpg";
import FormField from "@/components/ui/FormField";

const MyProfile = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-full bg-white">
        <View className="flex-row justify-start items-center gap-4 px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-3">My Profile</Text>
        </View>

        <View className="pt-8 px-4 flex justify-center items-center">
          <View className="relative">
            <Image source={userImg} className="w-28 h-28 rounded-full" />
            <View className="absolute right-0 bottom-2 p-1.5 rounded-md bg-g60 text-white flex justify-center items-center">
              <FontAwesome6 name="edit" size={16} color="white" />
            </View>
          </View>
        </View>

        <View className="pt-8 px-6 ">
          <FormField
            isTitle={true}
            placeholder="First Name"
            title="First Name"
          />

          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Last Name"
              title="Last Name"
            />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Enter email"
              title="Email"
              keyboardType="email-address"
            />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="+65424 65464"
              title="Recipient's Phone Number"
            />
          </View>
          <View className="pt-4">
            <FormField isTitle={true} placeholder="Male" title="Gender" />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="24/25/2024"
              title="Date of Birth"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
