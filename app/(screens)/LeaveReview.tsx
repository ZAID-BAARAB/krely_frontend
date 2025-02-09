import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import porductImg from "@/assets/images/product-img-1.png";
import reviewImg1 from "@/assets/images/review-img-1.png";
import reviewImg2 from "@/assets/images/review-img-2.png";
import reviewImg3 from "@/assets/images/review-img-3.png";
import reviewImg4 from "@/assets/images/review-img-4.png";

const LeaveReview = () => {
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-screen bg-white">
        <View className="flex-row justify-start items-center  px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">
            Leave a Review
          </Text>
        </View>
        <View className="pt-2">
          <View className="flex flex-col  pt-4 px-4">
            <View className="p-4 rounded-xl border border-g30 flex-row justify-start items-center ">
              <View className="rounded-lg overflow-hidden">
                <Image source={porductImg} className="w-28 h-32" />
              </View>
              <View className=" pl-4">
                <Text className="text-base font-medium text-g60">
                  Estelle Novelty Crossbody
                </Text>
                <Text className="text-g50 text-sm pt-1">Stock : 160</Text>
                <Text className="text-g50 text-sm pt-1">3+ other products</Text>

                <View className="flex-row justify-start items-center pt-2 text-sm pb-2">
                  <Text className="text-g60 font-semibold pr-2 text-lg">
                    $116.00
                  </Text>
                  <Text className="text-g40 line-through font-semibold text-lg">
                    $156.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 pt-6">
          <View className="border border-g30 rounded-xl p-4 flex justify-center items-center flex-col">
            <Text className="text-center text-g60 text-base font-semibold">
              How was your order?
            </Text>
            <View className="flex-row gap-1 justify-center items-center pt-1">
              <AntDesign name="star" size={18} color="#d9d9d9" />
              <AntDesign name="star" size={18} color="#d9d9d9" />
              <AntDesign name="star" size={18} color="#d9d9d9" />
              <AntDesign name="star" size={18} color="#d9d9d9" />
              <AntDesign name="star" size={18} color="#d9d9d9" />
            </View>
          </View>
        </View>
        <View className="px-4 pt-8">
          <View className="flex-row justify-between items-center pb-4">
            <Text className="text-base font-semibold text-g60">
              Leave a Review
            </Text>
            <Text className="text-sm  text-g50 ">Max 250 words</Text>
          </View>
          <TextInput
            placeholder="Write your review..."
            numberOfLines={4}
            className="border border-g30 p-4 rounded-xl "
            multiline
          />
          <View className="flex-row justify-start items-center gap-2 pt-4">
            <Image source={reviewImg1} className="w-16 h-16 rounded-md" />
            <Image source={reviewImg2} className="w-16 h-16 rounded-md" />
            <Image source={reviewImg3} className="w-16 h-16 rounded-md" />
            <Image source={reviewImg4} className="w-16 h-16 rounded-md" />
            <View className="w-16 h-16 rounded-md bg-g20 flex justify-center items-center border border-g30">
              <Feather name="camera" size={24} color="#3f3f3f" />
            </View>
          </View>
        </View>

        <View className="px-4 pt-8 justify-between items-center flex-row ">
          <Pressable
            onPress={() => router.push("/ReviewPostedSuccessfully" as any)}
            className="w-[48%] bg-g60 py-3 rounded-lg"
          >
            <Text className="text-center text-white text-base font-semibold">
              Submit Review
            </Text>
          </Pressable>
          <Pressable className="w-[48%] border border-g60 py-3  rounded-lg">
            <Text className="text-center text-g60 text-base font-semibold">
              Maybe Latter
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveReview;
