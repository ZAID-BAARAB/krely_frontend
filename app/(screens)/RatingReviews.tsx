import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { productReviewData } from "@/constants/data";
import ReviewItem from "@/components/ui/ReviewItem";

const RatingReviews = () => {
  const [sortModal, setSortModal] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView className="min-h-full bg-white pt-6">
        <View className="flex-row justify-start items-center px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">
            Rating & Reviews
          </Text>
        </View>

        <View className="pt-6 px-4 ">
          <View className="flex-row justify-between items-center pb-3 border-b border-g30">
            <View className="flex flex-col justify-center items-center  border-r border-g30 w-[45%]">
              <Text className="text-3xl font-bold text-g60">4.8</Text>
              <View className="flex-row justify-center items-center  text-g40">
                <FontAwesome name="star" size={16} color="#9d9d9d" />
                <FontAwesome name="star" size={16} color="#9d9d9d" />
                <FontAwesome name="star" size={16} color="#9d9d9d" />
                <FontAwesome name="star" size={16} color="#9d9d9d" />
                <FontAwesome name="star" size={16} color="#9d9d9d" />
              </View>
              <View className="flex-row justify-center items-center  pt-2 ">
                <Text className="text-sm text-g50">563 rating</Text>
                <Text className="w-1 h-1 rounded-full bg-g40 mx-1"></Text>
                <Text className="text-sm text-g50">85 reviews</Text>
              </View>
            </View>
            <View className="w-[55%] pl-4 flex flex-col">
              <View className="flex-row justify-start items-center ">
                <Text className="text-sm font-medium text-g50 ">5</Text>
                <View className="flex-1 h-2 bg-g30 rounded-full ml-4 "></View>
                <View className="absolute left-0 h-2 right-0  bg-g60 after:rounded-full ml-4"></View>
              </View>
              <View className="flex-row justify-start items-center ">
                <Text className="text-sm font-medium text-g50 ">4</Text>
                <View className="flex-1 h-2 bg-g30 rounded-full ml-4 "></View>
                <View className="absolute left-0 h-2 right-10  bg-g60 after:rounded-full ml-4"></View>
              </View>
              <View className="flex-row justify-start items-center ">
                <Text className="text-sm font-medium text-g50 ">3</Text>
                <View className="flex-1 h-2 bg-g30 rounded-full ml-4 "></View>
                <View className="absolute left-0 h-2 right-20  bg-g60 after:rounded-full ml-4"></View>
              </View>
              <View className="flex-row justify-start items-center ">
                <Text className="text-sm font-medium text-g50 ">2</Text>
                <View className="flex-1 h-2 bg-g30 rounded-full ml-4 "></View>
                <View className="absolute left-0 h-2 right-28  bg-g60 after:rounded-full ml-4"></View>
              </View>
              <View className="flex-row justify-start items-center ">
                <Text className="text-sm font-medium text-g50 ">1</Text>
                <View className="flex-1 h-2 bg-g30 rounded-full ml-4 "></View>
                <View className="absolute left-0 h-2 right-40  bg-g60 after:rounded-full ml-4"></View>
              </View>
            </View>
          </View>
        </View>

        <View className="pt-4 pl-6">
          <FlatList
            horizontal
            contentContainerStyle={{ gap: 12 }}
            showsHorizontalScrollIndicator={false}
            data={["All (365)", "Photos (40)", "Good Products (23)"]}
            keyExtractor={(_, index) => "key" + index}
            renderItem={({ item, index }) => (
              <Pressable
                key={item}
                className={`py-2 px-3 rounded-md flex-row text-base justify-center items-center bg-g20 text-g50`}
              >
                <Text className={`text-base text-g60`}>{item}</Text>
              </Pressable>
            )}
          />
        </View>

        <View className="pt-4 pl-6">
          <FlatList
            horizontal
            contentContainerStyle={{ gap: 12 }}
            showsHorizontalScrollIndicator={false}
            data={[
              "1.0 (52)",
              "1.5 (68)",
              "2.0 (245)",
              "2.5 (654)",
              "3.0 (187)",
              "3.5 (258)",
              "4.0 (357)",
              "4.5 (159)",
              "5.0 (852)",
            ]}
            keyExtractor={(_, index) => "key" + index}
            renderItem={({ item, index }) => (
              <Pressable
                key={item}
                className={`py-2 px-3 rounded-md flex-row text-base justify-center items-center bg-g20 text-g50`}
              >
                <Text className="mr-2">
                  <AntDesign name="star" size={16} color="#696969" />
                </Text>
                <Text className={`text-base text-g60`}>{item}</Text>
              </Pressable>
            )}
          />
        </View>

        <View className="px-6 flex-row justify-end items-end pt-4">
          <View>
            <MaterialCommunityIcons
              name="sort-ascending"
              size={20}
              color="#696969"
            />
          </View>
          <Pressable
            onPress={() => setSortModal((prev) => !prev)}
            className="flex-row justify-center items-center"
          >
            <Text className="text-base font-medium text-g50 px-2">
              Short By
            </Text>
            <Text>
              <Feather name="chevron-down" size={20} color="#696969" />
            </Text>
          </Pressable>

          <View
            style={{ zIndex: 1 }}
            className={` top-12 right-6 bg-white p-4 border border-g30 rounded-lg ${
              sortModal ? "absolute" : "hidden"
            }`}
          >
            <Text className="text-base text-g50 pb-2 border-b border-dashed border-g30">
              <Feather name="check" size={20} color="#696969" /> Most recent
            </Text>
            <Text className="text-base text-g50 pl-6 pt-2">Most relevant</Text>
          </View>
        </View>

        <View className=" flex flex-col pb-12 px-4">
          {productReviewData.slice(0, 2).map(({ id, ...props }) => (
            <ReviewItem islikeSection={true} key={`${id}`} {...props} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatingReviews;

const styles = StyleSheet.create({});
