import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import userImg from "@/assets/images/user-img.jpg";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OfferSliderCard from "@/components/OfferSliderCard";
import { productCategory, productItems } from "@/constants/data";
import ProductItem from "@/components/ui/ProductItem";
import RoomItem from "@/components/ui/RoomItem";

import { router } from "expo-router";
import { Room, RoomService } from "../services/roomService";

const HomePage = () => {
  const [activeProductCategory, setActiveProductCategory] = useState(0);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTopRooms = async () => {
      try {
        const data = await RoomService.getTop10Rooms();
        setRooms(data);
        //console.log(data);
      } catch (err) {
        setError('Failed to fetch rooms');
      } finally {
        setLoading(false);
      }
    };

    fetchTopRooms();
  }, []);

      if (loading) {
        return (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView>
      <ScrollView className="pb-6 pt-6 bg-white">
        <View className="px-4 flex-row w-full justify-between items-center">
          <Image source={userImg} className="w-14 h-14 rounded-full" />
          <Text className="text-3xl font-bold text-g60">Krely</Text>
          <MaterialCommunityIcons name="bell-badge" size={28} color="#696969" />
        </View>
        {/* Search Section Start */}
        <Pressable
          onPress={() => router.push("/Search" as any)}
          className="pt-6 px-4 flex-row justify-between items-center"
        >
          <View className="w-[83%] border border-g30 p-4 rounded-xl">
            <View className="flex-row justify-start items-center">
              <AntDesign name="search1" size={16} color="#696969" />
              <Text className="text-g50 pl-2">Search Here</Text>
            </View>
          </View>
          <View className="flex-1 bg-g60 justify-center items-center ml-3 py-4 rounded-xl">
            <AntDesign name="search1" size={20} color="white" />
          </View>
        </Pressable>
        {/* Search Section End */}

        {/* Offer Slider Start */}
        <OfferSliderCard />
        {/* Offer Slider End */}

        {/* Product Category Slider Start */}
        <View className="pt-2 pl-4  justify-start items-start">
          <FlatList
            horizontal
            contentContainerStyle={{ gap: 12 }}
            showsHorizontalScrollIndicator={false}
            data={productCategory}
            keyExtractor={(_, index) => "key" + index}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => setActiveProductCategory(index)}
                className={`${
                  productCategory.length === index + 1 ? "pr-6" : ""
                }`}
              >
                <View
                  className={` px-5 py-2 justify-center items-center rounded-md  ${
                    activeProductCategory === index ? "bg-g60" : "bg-g30"
                  } `}
                >
                  <Text
                    className={`text-base font-medium  ${
                      index === activeProductCategory
                        ? "text-white"
                        : "text-g50 "
                    } `}
                  >
                    {item}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        {/* Product Category Slider End */}

        <View className="px-4 pt-6 flex-row justify-between items-center">
          <Text className="text-base font-semibold text-g60 ">
            Most Popular
          </Text>
          <Text
            onPress={() => router.push("/AllProducts" as any)}
            className="text-xs font-semibold text-g60 "
          >
            View All
          </Text>
        </View>
        
        {/* Rooms List */}
        <View className="px-4 flex flex-wrap flex-row justify-between pb-10">
          {rooms.slice(0, 10).map((room) => (
            <RoomItem key={room.roomId} room={room} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
