import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import mapImg from "@/assets/images/show-on-map-bg.png";
import porductImg from "@/assets/images/product-img-1.png";

const OrderDetails = () => {
  const [cancelModal, setCancelModal] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView className="pt-6 min-h-screen bg-white">
        <View className="flex-row justify-start items-center  px-4 w-full ">
          <Pressable onPress={() => router.back()} className="">
            <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
          </Pressable>
          <Text className="text-2xl font-bold text-g60 pl-4">
            Order Details
          </Text>
        </View>
        <View className="px-4 pt-8">
          <View className="border border-g30 rounded-xl p-4">
            <View className="flex-row justify-between items-center border-b border-dashed border-g30 pb-3">
              <View className="flex-row justify-start items-start ">
                <View className="w-8 h-8 flex-row justify-center items-center bg-g60 text-white rounded-full">
                  <Feather name="map-pin" size={18} color="white" />
                </View>
                <View className="pl-2">
                  <View className="flex-row justify-start items-center">
                    <Text className="text-sm font-medium text-g60 pr-2">
                      Jenny Wilson
                    </Text>
                    <Text className="text-xs text-g50 py-0.5 px-1 bg-g20 border border-g30 rounded-md">
                      Apartment
                    </Text>
                  </View>

                  <Text className="flex-row justify-start items-center  text-g50 text-xs pt-3">
                    701 7th Ave. New York, NY 10036, USA
                  </Text>
                </View>
              </View>

              <View>
                <Feather name="edit" size={18} color="#3f3f3f" />
              </View>
            </View>

            <View className="py-3">
              <Image source={mapImg} className="w-full" />

              <View className="flex-row justify-start items-center  text-white -mt-9 pl-3">
                <Feather name="map-pin" size={16} color="white" />

                <Text className="text-white pl-1">Show on map</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="pt-4 px-4">
          <View className="flex flex-col pt-4">
            <View className="p-4 rounded-xl border bg-g20 border-g30">
              <View className="flex-row justify-start items-center ">
                <View className="rounded-lg overflow-hidden">
                  <Image source={porductImg} className="w-24 h-32" />
                </View>
                <View className=" pl-4 flex-1">
                  <View
                    style={{ zIndex: 1 }}
                    className="flex-row justify-between items-center"
                  >
                    <Text className="text-lg font-medium text-g60">
                      Blue Finger Watch
                    </Text>
                    <View className=" ">
                      <Pressable>
                        <Entypo
                          name="dots-three-vertical"
                          size={14}
                          color="#3f3f3f"
                        />
                      </Pressable>
                    </View>
                  </View>

                  <Text className="text-g50 pt-1">Size: L</Text>
                  <Text className="text-g50 pt-1">Color: Black</Text>
                  <Text className="text-g50 pt-1">Qty: 1</Text>
                  <View className="flex-row justify-start items-center  pt-2  pb-2">
                    <Text className="text-g60 font-semibold pr-2">$116.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="pt-4 px-4">
          <View className="flex-row justify-between items-center pb-4">
            <Text className="text-g60 text-base font-semibold">
              Available Vouchers
            </Text>
            <Feather name="chevron-right" size={20} color="#3f3f3f" />
          </View>
          <View className="p-4 rounded-xl border border-g30 bg-g20">
            <View className="flex-row justify-between items-center">
              <View className="flex-row justify-start items-center">
                <MaterialCommunityIcons
                  name="label-percent-outline"
                  size={24}
                  color="#3f3f3f"
                />

                <Text className="text-base font-medium text-g60 pl-2">
                  Best Deal: 20% OFF
                </Text>
              </View>
              <Ionicons name="close-outline" size={20} color="#3f3f3f" />
            </View>
            <View className="flex-row justify-start items-center text-xs  pt-1">
              <Text className="text-g50">20DEALS</Text>
              <Entypo name="dot-single" size={24} color="#3f3f3f" />

              <Text className="text-g50">Min spend $150</Text>
              <Entypo name="dot-single" size={24} color="#3f3f3f" />

              <Text className="text-g50">Valid til 12/12/2024</Text>
            </View>
          </View>
        </View>

        <View className="pt-3 px-4">
          <Text className="text-g60 pb-3 font-semibold text-base">
            Delivery
          </Text>
          <Pressable
            onPress={() => router.push("/ChooseDelivery")}
            className="flex-row justify-between items-center p-4 rounded-md bg-g20 border border-g30"
          >
            <Text className="text-sm">Choose Delivey</Text>

            <Feather name="chevron-right" size={24} color="#3f3f3f" />
          </Pressable>
        </View>
        <View className="pt-6 px-4">
          <Text className="text-g60 pb-3 font-semibold text-base">
            Select Payment Method
          </Text>
          <Pressable
            onPress={() => router.push("/PaymentMethods")}
            className="flex-row justify-between items-center p-4 rounded-md bg-g20 border border-g30"
          >
            <Text className="text-sm">Choose Payment Method</Text>
            <Feather name="chevron-right" size={24} color="#3f3f3f" />
          </Pressable>
        </View>
        <View className="pt-6 px-4">
          <Text className="text-g60 font-semibold pb-3 text-base">
            Order Summary
          </Text>
          <View className="p-4 border border-g30 rounded-xl">
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed pb-4">
              <Text className="text-sm text-g50">Subtotal (3 items)</Text>
              <Text className="text-sm text-g60 font-medium">$316.00</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed py-4">
              <Text className="text-sm text-g50">Delivery Fee</Text>
              <Text className="text-sm text-g60 font-medium">$6.00</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed py-4">
              <Text className="text-sm text-g50">Tax</Text>
              <Text className="text-sm text-g60 font-medium">$3.00</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed py-4">
              <Text className="text-sm text-g50">Promo</Text>
              <Text className="text-sm text-g60 font-medium">$36.00</Text>
            </View>
            <View className="flex-row justify-between items-center pt-4 font-medium">
              <Text className="text-sm text-g60">Total Payment</Text>
              <Text className="text-sm text-g60 font-semibold">$424.00</Text>
            </View>
          </View>
        </View>
        <View className="pt-6 px-4">
          <Text className="text-g60 font-semibold pb-3 text-base">
            Information Details
          </Text>
          <View className="p-4 border border-g30 rounded-xl">
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed pb-4">
              <Text className="text-sm text-g50">Purchase Date</Text>
              <Text className="text-sm text-g60 font-medium">Dec 22, 2024</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed py-4">
              <Text className="text-sm text-g50">Purchase Hours</Text>
              <Text className="text-sm text-g60 font-medium">09:41 AM</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-g30 border-dashed py-4">
              <Text className="text-sm text-g50">Invoice Number</Text>
              <Text className="text-sm text-g60 font-medium">
                INV122224TRX
                {/* <i className="ph ph-copy"></i> */}
              </Text>
            </View>
            <View className="flex-row justify-between items-center  pt-4">
              <Text className="text-sm text-g50">Receipt Number</Text>
              <Text className="text-sm text-g60 font-medium">
                RCP030941RNV
                {/* <i className="ph ph-copy"></i> */}
              </Text>
            </View>
          </View>
        </View>
        <View className="pb-20 px-4 pt-8">
          <Pressable className=" bg-g60 py-3 rounded-lg">
            <Text className="text-center text-white text-base font-semibold">
              Generate Invoice
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
