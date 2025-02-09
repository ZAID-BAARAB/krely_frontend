import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Room } from '@/app/services/roomService';

type RoomItemProps = {
  room: Room;
  isFavourite?: boolean;
};

const RoomItem = ({ room, isFavourite }: RoomItemProps) => {
  const handlePress = () => {
    // router.push({
    //   pathname: '/RoomDetails',
    //   params: { roomId: room.roomId }
    // });
  };

  return (
    <Pressable
      // onPress={handlePress}
      onPress={() => router.push(`/(screens)/RoomDetails?roomId=${room.roomId}`)}
      className="pt-4 relative w-[48%]"
    >
      {/* Image Container */}
      <View className="rounded-xl relative overflow-hidden block">
        {room.photoBase64 ? (
          <Image 
            source={{ uri: `data:image/png;base64,${room.photoBase64}` }} 
            className="w-full h-40"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-40 bg-gray-200 flex items-center justify-center">
            <Text className="text-gray-500">No Image Available</Text>
          </View>
        )}
      </View>

      {/* Favourite Button */}
      <View className="absolute top-7 right-3 shadow-1 bg-white p-1.5 rounded-full flex justify-center items-center cursor-pointer favouriteButton">
        <FontAwesome
          name={isFavourite ? "heart" : "heart-o"}
          size={14}
          color="#3F3F3F"
        />
      </View>

      {/* Room Details */}
      <View className="pt-2">
        <Text className="text-g60 text-base font-semibold">{room.name}</Text>
        <Text className="text-g40 text-sm">{room.city}, {room.address}</Text>
        
        {/* Room Type */}
        <View className="flex flex-row items-center py-1">
          <MaterialCommunityIcons name="home-city" size={14} color="#3F3F3F" />
          <Text className="text-g60 text-sm pl-1">{room.roomType}</Text>
        </View>

        {/* Features */}
        <View className="flex-row items-center space-x-2 mt-1">
          {room.pet_friendliness && (
            <View className="flex-row items-center">
              <FontAwesome name="paw" size={12} color="#3F3F3F" />
              <Text className="text-g40 text-xs pl-1">Pet Friendly</Text>
            </View>
          )}

          {room.child_friendly_atmosphere && (
            <View className="flex-row items-center">
              {/* <Entypo name="child" size={14} color="#3F3F3F" /> */}
              <Text className="text-g40 text-xs pl-1">Child Friendly</Text>
            </View>
          )}
        </View>

        {/* Amenities */}
        <View className="flex-row items-center space-x-2 mt-1">
          {room.kitchen && (
            <MaterialCommunityIcons name="fridge" size={14} color="#3F3F3F" />
          )}
          {room.bathRoom && (
            <MaterialCommunityIcons name="shower" size={14} color="#3F3F3F" />
          )}
          {room.tv && (
            <MaterialCommunityIcons name="television" size={14} color="#3F3F3F" />
          )}
        </View>

        {/* Price */}
        <Text className="text-g60 font-semibold text-lg pt-2">
          ${room.price}/night
        </Text>
      </View>
    </Pressable>
  );
};

export default RoomItem;

const styles = StyleSheet.create({
  // Add any custom styles here if needed
});