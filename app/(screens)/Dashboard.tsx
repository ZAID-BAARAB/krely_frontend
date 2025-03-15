import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


interface LowStockPart {
  id: string;
  name: string;
  stock: number;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [lowStockParts, setLowStockParts] = useState<LowStockPart[]>([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
  });



  useEffect(() => {
  //something
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView className="flex-1 bg-white p-4 ">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</Text>

      {/* Analytics Section */}
      <View className="bg-blue-500 p-4 rounded-lg mb-6 shadow-lg">
        {/* <Text className="text-white text-lg">📦 Total Orders: {stats.totalOrders}</Text> */}
        <Text className="text-white text-lg">💰 Total Revenue: ${stats.totalRevenue}</Text>
      </View>

      {/* Navigation Buttons */}
      <View className="space-y-4">
        <TouchableOpacity 
          className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between"
          onPress={() => router.push("/(screens)/RoomForm" as any)}
        >
          <Text className="text-white text-lg font-semibold">Add New Room</Text>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-yellow-500 p-4 rounded-lg flex-row items-center justify-between"
        //   onPress={() => router.push("/(screens)/ManageParts" as any)}
        >
          <Text className="text-white text-lg font-semibold">Manage Rooms</Text>
          <Ionicons name="construct" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-red-500 p-4 rounded-lg flex-row items-center justify-between"
        //   onPress={() => navigation.navigate("Users")}
        >
          <Text className="text-white text-lg font-semibold">Manage Users</Text>
          <Ionicons name="people" size={24} color="white" />
        </TouchableOpacity>
      </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
