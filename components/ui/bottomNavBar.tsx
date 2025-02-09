import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";

const BottomNavBar = () => {
  return (
    <View className="flex-row justify-around items-center bg-[#3F3F3F] h-20 border-t-0 rounded-t-xl">
      {/* Home */}
      <TouchableOpacity 
        className="items-center"
        onPress={() => router.push("/(tabs)/Home" as any)}
      >
        <Ionicons name="home-outline" size={24} color="white" />
        <Text className="text-white text-xs mt-1">Home</Text>
      </TouchableOpacity>

      {/* Wishlist */}
      <TouchableOpacity 
        className="items-center"
        onPress={() => router.push("/(tabs)/WishList" as any)}
      >
        <AntDesign name="hearto" size={24} color="white" />
        <Text className="text-white text-xs mt-1">Wishlist</Text>
      </TouchableOpacity>

      {/* My Order */}
      <TouchableOpacity 
        className="items-center"
        onPress={() => router.push("/(tabs)/MyOrder" as any)}
      >
        <Ionicons name="document-text-outline" size={24} color="white" />
        <Text className="text-white text-xs mt-1">My Order</Text>
      </TouchableOpacity>

      {/* Cart */}
      <TouchableOpacity 
        className="items-center"
        onPress={() => router.push("/(tabs)/Cart" as any)}
      >
        <Ionicons name="cart-outline" size={24} color="white" />
        <Text className="text-white text-xs mt-1">Cart</Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity 
        className="items-center"
        onPress={() => router.push("/(tabs)/Profile" as any)}
      >
        <FontAwesome5 name="user" size={20} color="white" />
        <Text className="text-white text-xs mt-1">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;