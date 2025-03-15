import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";                            
import { AntDesign, Feather } from "@expo/vector-icons";
import { productItems } from "@/constants/data";
import ProductItem from "@/components/ui/ProductItem";
import { Room, RoomService } from "../services/roomService";
import RoomItem from "@/components/ui/RoomItem";

const popolarSearch = ["Hoodie for Men", "Nike", "Polo Shirt", "Adidas Shoes"];

const Search = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState<Room[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    Keyboard.dismiss();
    try {
      setSearching(true);
      if (value.trim()) {
        const results = await RoomService.searchRoomByCity(value);
        setSearchResults(results);
        console.log(searchResults)
      }

    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setSearching(false);
      // Hide spinner after search
    }
  };
  
  return (
    <SafeAreaView>
      <ScrollView className="">
        {/* Search Section Start */}
        <Pressable
          className="pt-6 px-4 flex-row justify-between items-center"
        >
          <View className="w-[83%] border border-g30 px-4 py-3 rounded-xl">
            <View className="flex-row justify-between items-center">
              <View className="flex-row justify-start items-center">
                <AntDesign name="search1" size={16} color="#696969" />
                <TextInput
                  value={value}
                  onChangeText={(e) => setValue(e)}
                  placeholder="Search Here"
                  className="text-g50 px-3 rounded-xl w-[80%] "
                  //onSubmitEditing={handleSearch}
                />
              </View>
              <Pressable onPress={() => router.push("/CameraViewPage" as any)}>
                <Feather name="camera" size={16} color="#696969" />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={handleSearch}
            className="flex-1 bg-g60 justify-center items-center ml-3 py-4 rounded-xl"
          >
            {searching ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <AntDesign name="search1" size={20} color="white" />
            )}
          </Pressable>
        </Pressable>
        {/* Search Section End */}

        <View className="px-4 pt-6">
          <Text className="text-base font-semibold text-g60 border-b border-dashed border-g30 pb-2">
            Popular Search
          </Text>

          <View>
            {popolarSearch.map((item, idx) => (
              <View
                key={item}
                className="flex-row justify-between items-center"
              >
                <Text className="text-base pt-4 text-g50">{item}</Text>
                <Feather name="chevron-right" size={20} color="#3f3f3f" />
              </View>
            ))}
          </View>
        </View>

        <View className="px-4 pt-6 flex-row justify-between items-center">
          <Text className="text-base font-semibold text-g60 ">
            Hot Deals This Week
          </Text>
          <Text
            onPress={() => router.push("/AllProducts" as any)}
            className="text-xs font-semibold text-g60 "
          >
            View All
          </Text>
        </View>

        {/* Products List Start */}
        <View className="px-4 flex flex-wrap flex-row justify-between pb-10">
          {searchResults.slice(0, 10).map((room) => (
              <RoomItem key={room.roomId} room={room} />
          ))}
        </View>
        {/* Products List End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
