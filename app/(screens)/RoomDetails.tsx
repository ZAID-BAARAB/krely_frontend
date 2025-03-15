import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import {
    AntDesign,
    Entypo,
    FontAwesome,
    MaterialCommunityIcons,
    Octicons,
  } from "@expo/vector-icons";
  import { availableVouchersData, productReviewData } from "@/constants/data";
  import { router, useLocalSearchParams } from "expo-router";
  import ProductImagesSlider from "@/components/ProductImagesSlider";
  import ReviewItem from "@/components/ui/ReviewItem";
  import { GalleryItem, Room, RoomService } from "@/app/services/roomService";
import RoomImagesSlider from "@/components/ui/RoomImagesSlider";
import RoomLocation from "@/components/RoomLocation";
  
  const RoomDetails = () => {
    const { roomId } = useLocalSearchParams(); // Access roomId from route params
    const [room, setRoom] = useState<Room | null>(null);
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isFavourite, setIsFavourite] = useState(false);
  
    // Fetch room details based on roomId
    useEffect(() => {
      const fetchRoomDetails = async () => {
        if (!roomId) return;
  
        try {
          const data = await RoomService.getRoomById(Number(roomId)); // Assuming you have a getRoomById method
          setRoom(data);

          const galleryData = await RoomService.getGalleryItemsByRoomId(Number(roomId));
          if (galleryData) {
            setGalleryItems(galleryData);
          }
        } catch (err) {
          setError("Failed to fetch room details or gallery items");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRoomDetails();
    }, [roomId]);
  
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }
  
    if (!room) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Room not found</Text>
        </View>
      );
    }
  
    return (
      <SafeAreaView>
        <ScrollView className="pt-6 bg-g20 min-h-full">
          {/* Header Section */}
          <View className="flex-row justify-between items-center gap-4 px-4 w-full">
            <Pressable onPress={() => router.back()} className="">
              <Entypo name="chevron-with-circle-left" size={32} color="#3f3f3f" />
            </Pressable>
            <Text className="text-2xl font-bold text-g60">{room.name}</Text>
            <Pressable className="shareOpenButton">
              <AntDesign name="sharealt" size={24} color="#3f3f3f" />
            </Pressable>
          </View>
  
          {/* Room Image */}
          <View className=""> 
            <RoomImagesSlider
              images={[
                `data:image/png;base64,${room.photoBase64}`,
                ...galleryItems.map(item => `data:image/png;base64,${item.photoBase64}`)
              ]}
            />
          </View>

          {/* <View className="">
            <Image
              source={{ uri: `data:image/png;base64,${room.photoBase64}` }}
              className="w-full h-64"
              resizeMode="cover"
            />
          </View> */}
  
          {/* Room Details */}
          <View className="px-4 pt-4 bg-white rounded-t-xl pb-24">
            <View className="flex-row justify-between items-center">
              <View className="">
                <Text className="text-xl font-bold text-g60">{room.name}</Text>
                <View className="flex-row justify-start items-center mt-2">
                  <View className="flex-row justify-start items-center gap-2">
                    <AntDesign name="star" size={16} color="#FF8000" />
                    <Text className="text-g60 font-semibold text-xs">
                      4.5 <Text className="font-normal text-g40">(64)</Text>
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={16}
                    color="#3f3f3f"
                    style={{ marginHorizontal: 8 }}
                  />
                  {/* <View className="leading-none h-1.5 w-1.5 rounded-full bg-g60 mx-2"></View> */}
                  <Text className="text-g60 font-semibold text-xs">
                    {room.city}, {room.address}
                  </Text>
                </View>
              </View>
  
              <Pressable
                onPress={() => setIsFavourite((prev) => !prev)}
                className="h-8 w-8 border border-g60 rounded-full flex-row justify-center items-center !leading-none cursor-pointer"
              >
                <AntDesign
                  name={isFavourite ? "heart" : "hearto"}
                  size={16}
                  color="#3f3f3f"
                />
              </Pressable>
            </View>
  
            {/* Price Section */}
            <View className="flex-row justify-start items-center pt-4 border-b border-dashed border-g30 pb-4">
              <Text className="text-xl font-semibold text-g60 pr-3">
                ${room.price}/night
              </Text>
            </View>
  
            {/* Amenities Section */}
            <View className="pt-4">
              <Text className="text-g60 font-semibold text-xl">Amenities</Text>
              <View className="flex-row justify-start items-center flex-wrap gap-3 pt-3">
                {room.pet_friendliness && (
                  <View className="flex-row items-center">
                    <FontAwesome name="paw" size={16} color="#3f3f3f" />
                    <Text className="text-g50 pl-1">Pet Friendly</Text>
                  </View>
                )}
                {room.bathRoom && (
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons name="pool" size={16} color="#3f3f3f" />
                    <Text className="text-g50 pl-1">Bathroom</Text>
                  </View>
                )}
                {room.kitchen && (
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons name="silverware-fork-knife" size={16} color="#3f3f3f" />
                    <Text className="text-g50 pl-1">Kitchen</Text>
                  </View>
                )}
                {room.tv && (
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons name="television" size={16} color="#3f3f3f" />
                    <Text className="text-g50 pl-1">TV</Text>
                  </View>
                )}
              </View>
            </View>
  
            {/* Room Description */}
            <View className="pt-4">
              <Text className="text-g60 font-semibold text-base">Description</Text>
              <Text className="text-sm text-g50 pt-2">{room.description}</Text>
            </View>

            {/* Room Location */}
            <RoomLocation
              latitude={room.latitude}
              longitude={room.longitude}
              address={`${room.city}, ${room.address}`}
            />
  
            {/* Reviews Section (Kept from ProductDetails) */}
            <View className="pt-6">
              <View className="flex-row justify-between items-center pb-4">
                <Text className="text-g60 font-semibold text-lg">
                  Rating & Reviews
                </Text>
                <Text
                  onPress={() => router.push("/RatingReviews" as any)}
                  className="text-g60 text-sm font-semibold"
                >
                  View All
                </Text>
              </View>
              <View className="flex-row justify-between items-center pb-3 border-b border-g30">
                <View className="flex flex-col justify-center items-center border-r border-g30 w-[45%]">
                  <Text className="text-3xl font-bold text-g60">4.8</Text>
                  <View className="flex-row justify-center items-center text-g40">
                    <FontAwesome name="star" size={16} color="#9d9d9d" />
                    <FontAwesome name="star" size={16} color="#9d9d9d" />
                    <FontAwesome name="star" size={16} color="#9d9d9d" />
                    <FontAwesome name="star" size={16} color="#9d9d9d" />
                    <FontAwesome name="star" size={16} color="#9d9d9d" />
                  </View>
                  <View className="flex-row justify-center items-center pt-2">
                    <Text className="text-sm text-g50">563 ratings</Text>
                    <Text className="w-1 h-1 rounded-full bg-g40 mx-1"></Text>
                    <Text className="text-sm text-g50">85 reviews</Text>
                  </View>
                </View>
                <View className="w-[55%] pl-4 flex flex-col">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <View key={rating} className="flex-row justify-start items-center">
                      <Text className="text-sm font-medium text-g50">{rating}</Text>
                      <View className="flex-1 h-2 bg-g30 rounded-full ml-4"></View>
                      <View className="absolute left-0 h-2 right-0 bg-g60 after:rounded-full ml-4"></View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
  
            {/* Review Items */}
            <View className="flex flex-col pb-8">
              {productReviewData.slice(0, 2).map(({ id, ...props }) => (
                <ReviewItem islikeSection={false} key={`${id}`} {...props} />
              ))}
            </View>
          </View>
        </ScrollView>
  
        {/* Footer Buttons */}
        <View className="absolute bottom-0 left-0 right-0 bg-white py-4">
          <View className="px-4 pt-4 justify-between items-center flex-row">
            <Pressable
              onPress={() => router.push("/Checkout")}
              className="w-[48%] bg-g60 py-3 rounded-lg"
            >
              <Text className="text-center text-white text-base font-semibold">
                Book Now
              </Text>
            </Pressable>
            <Pressable className="w-[48%] border border-g60 py-3 rounded-lg">
              <Text className="text-center text-g60 text-base font-semibold">
                Add to Favorites
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default RoomDetails;
  
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