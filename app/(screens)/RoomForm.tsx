import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
//import * as Location from "expo-location";
import MapView, { Marker, Region } from "react-native-maps";
import * as ImagePicker from 'expo-image-picker';
import { RoomService } from "../services/roomService";
import { DashboardService, FileData, RoomRequest } from "../services/dashboardService";
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAPS_API_KEY } from "@/constants/constants";


// Geocoder.init("AIzaSyCLkYwaxzfcGDX-OKWMV9LzOWqkrNGT7J8", { provider: "nominatim" });

Geocoder.init(GOOGLE_MAPS_API_KEY);
interface RoomData {
    // Basic Information
    name: string;
    roomType: string;
    city: string;
    price: number;
    description: string;
    length: string;
    width: string;
    special_offers: string;
    bank_account_info: string;
  
    // Location
    latitude: number | null; 
    longitude: number | null; 
  
    // Amenities
    kitchen: boolean;
    bathRoom: boolean;
    tv: boolean;
    heating: boolean;
    wifi: boolean;
    //ac: boolean;
  
    // Contact Information
    address: string;
    contact_number: string;
    website: string;
  
    // Additional Features
    pet_friendliness: boolean;
    child_friendly_atmosphere: boolean;
    roomEmpty: boolean;
  }

const RoomForm = () => {
    const [locationError, setLocationError] = useState("");
    const [photoFile, setPhotoFile] = useState<FileData | null>(null);
    const [searchQuery, setSearchQuery] = useState(""); 

    const [roomData, setRoomData] = useState<RoomData>({
        // Basic Information
        name: "",
        roomType: "",
        city: "",
        price: 0,
        description: "",
        length: "",
        width: "",
        special_offers: "",
        bank_account_info: "",
    
        // Location
        latitude: null,
        longitude: null,
    
        // Amenities
        kitchen: false,
        bathRoom: false,
        tv: false,
        heating: false,
        wifi: false,
        //ac: false,
    
        // Contact Information
        address: "",
        contact_number: "",
        website: "",
    
        // Additional Features
        pet_friendliness: false,
        child_friendly_atmosphere: false,
        roomEmpty: true,
      });

      const [mapRegion, setMapRegion] = useState<Region>({
        latitude: 37.78825, // Default latitude
        longitude: -122.4324, // Default longitude
        latitudeDelta: 0.0922, // Zoom level
        longitudeDelta: 0.0421, // Zoom level
      });


      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          // aspect: isSquareCrop ? [1, 1] : undefined,
          quality: 1,
        });
      
        if (!result.canceled) {
          const { uri } = result.assets[0];
          const fileName = uri.split('/').pop();
          const fileType = uri.split('.').pop();
      
          setPhotoFile({
            uri,
            name: fileName || 'photo.jpg',
            type: `image/${fileType}`,
          });

        }
      };



      const handleMapPress = async (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setRoomData((prev) => ({
          ...prev,
          latitude,
          longitude,
        }));
        setMapRegion((prev) => ({
          ...prev,
          latitude,
          longitude,
          latitudeDelta: prev.latitudeDelta, // Preserve zoom level
          longitudeDelta: prev.longitudeDelta, // Preserve zoom level
        }));
        const address = await getAddressFromCoordinates(latitude, longitude);
        if (address) {
          setRoomData((prev) => ({
            ...prev,
            address,
          }));
        }
      };

  // Handle location search
  const handleSearch = () => {
    Geocoder.from(searchQuery)
      .then((json) => {
        console.log("Geocoding response:", json); // Log the response
        if (json.results && json.results.length > 0) {
          const location = json.results[0].geometry.location;
          setRoomData((prev) => ({
            ...prev,
            latitude: location.lat,
            longitude: location.lng,
          }));
          setMapRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        } else {
          console.warn("No results found for the query:", searchQuery);
          alert("Location not found. Please try again.");
        }
      })
      .catch((error) => {
        console.warn("Geocoding error:", error);
        alert("Location not found. Please try again.");
      });
  };

  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const apiKey = GOOGLE_MAPS_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        console.log("Full Address:", address);
        return address;
      } else {
        console.error("Error fetching address:", data.status);
        return null;
      }
    } catch (error) {
      console.error("Geocoding API error:", error);
      return null;
    }
  };
        

  const handleSubmit = async () => {
    

    if (roomData.latitude === null || roomData.longitude === null) {
      alert('Please select a location on the map');
      return;
    }

    if (!photoFile) {
      alert('Please select a room photo');
      return;
    }

    try {
      const roomRequest: RoomRequest = {
        name: roomData.name,
        address: roomData.address,
        latitude: roomData.latitude,
        longitude: roomData.longitude,
        city: roomData.city,
        price: roomData.price,
        menuPath: "",
        website: roomData.website,
        roomEmpty: roomData.roomEmpty,
        length: roomData.length,
        width: roomData.width,
        roomType: roomData.roomType,
        contact_number: roomData.contact_number,
        special_offers: roomData.special_offers,
        bank_account_info: roomData.bank_account_info,
        pet_friendliness: roomData.pet_friendliness,
        child_friendly_atmosphere: roomData.child_friendly_atmosphere,
        kitchen: roomData.kitchen,
        bathRoom: roomData.bathRoom,
        tv: roomData.tv,
        wifi: roomData.wifi,
        heating: roomData.heating,
        description: roomData.description,
      };

      const createdRoom = await DashboardService.createRoom(roomRequest, photoFile);
      console.log("Room created successfully:", createdRoom);

      alert('Room created successfully!');

      setRoomData({
        name: "",
        roomType: "",
        city: "",
        price: 0,
        description: "",
        length: "",
        width: "",
        special_offers: "",
        bank_account_info: "",
        latitude: null,
        longitude: null,
        kitchen: false,
        bathRoom: false,
        tv: false,
        heating: false,
        wifi: false,
        address: "",
        contact_number: "",
        website: "",
        pet_friendliness: false,
        child_friendly_atmosphere: false,
        roomEmpty: true,
      });
      setPhotoFile(null);
    } catch (error) {
      console.error('Room creation failed:', error);
      alert('Failed to create room. Please try again.');
    }
  };

  const handleChange = (field: keyof RoomData, value: string) => {
    setRoomData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (field: keyof RoomData) => {
    setRoomData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <ScrollView className="bg-gray-50 flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-4 py-6">
                {/* Add Photo Upload Section */}
                <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-gray-800">Room Photo</Text>
          <Pressable
            onPress={pickImage}
            className="bg-blue-500 p-4 rounded-lg items-center"
          >
            <Text className="text-white font-semibold">
              {photoFile ? 'Change Photo' : 'Select Photo'}
            </Text>
          </Pressable>
          {photoFile && (
            <Text className="mt-2 text-gray-600 text-sm">
              Selected: {photoFile.name}
            </Text>
          )}
        </View>

        {/* Room Information Section */}
        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-gray-800">Room Information</Text>
          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Room Name"
            value={roomData.name}
            onChangeText={(text) => handleChange('name', text)}
          />

          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Price"
            value={roomData.price.toString()}
            onChangeText={(text) => handleChange('price', text)}
          />
          
          <View className="flex-row gap-4">
            <TextInput
              className="bg-white p-3 rounded-lg border border-gray-200 flex-1 mb-4"
              placeholder="Length"
              value={roomData.length}
              onChangeText={(text) => handleChange('length', text)}
            />
            <TextInput
              className="bg-white p-3 rounded-lg border border-gray-200 flex-1 mb-4"
              placeholder="Width"
              value={roomData.width}
              onChangeText={(text) => handleChange('width', text)}
            />
          </View>

          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Special Offers"
            value={roomData.special_offers}
            onChangeText={(text) => handleChange('special_offers', text)}
          />
        </View>

        {/* Amenities Grid */}
        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-gray-800">Amenities</Text>
          <View className="flex-row flex-wrap -mx-2">
            {['kitchen', 'bathRoom', 'tv', 'heating', 'wifi', 'ac'].map((feature) => (
              <Pressable
                key={feature}
                onPress={() => toggleFeature(feature)}
                className="w-1/3 items-center p-2"
              >
                <View className={`items-center p-3 rounded-xl ${roomData[feature] ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50 border-2 border-gray-100"}`}>
                  {feature === 'tv' && <FontAwesome name="tv" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />}
                  {feature === 'bathRoom' && <MaterialCommunityIcons name="shower" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />}
                  {feature === 'kitchen' && <MaterialCommunityIcons name="stove" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />}
                  {feature === 'heating' && <MaterialCommunityIcons name="radiator" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />}
                  {feature === 'wifi' && <FontAwesome name="wifi" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />}
                  {/* {feature === 'ac' && <MaterialCommunityIcons name="air-conditioner" size={24} color={roomData[feature] ? "#3b82f6" : "#9ca3af"} />} */}
                  <Text className={`mt-2 text-sm ${roomData[feature] ? "text-blue-600" : "text-gray-500"}`}>
                    {feature === 'bathRoom' ? 'Bathroom' : feature.charAt(0).toUpperCase() + feature.slice(1)}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Location Section */}
        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-gray-800">Location</Text>
                    {/* Search Input */}
                    <View className="mb-4">
            <TextInput
              className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
              placeholder="Search for a location"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Pressable
              onPress={handleSearch}
              className="bg-blue-500 p-3 rounded-lg items-center"
            >
              <Text className="text-white font-semibold">Search</Text>
            </Pressable>
          </View>

          <View style={{ height: 300, borderRadius: 10, overflow: "hidden" }}>
            <MapView
              style={{ flex: 1 }}
              region={mapRegion}
              onPress={handleMapPress} // Handle map press to select location
            >
              {roomData.latitude !== null && roomData.longitude !== null && (
                <Marker
                  coordinate={{
                    latitude: roomData.latitude,
                    longitude: roomData.longitude,
                  }}
                  title="Selected Location"
                />
              )}
            </MapView>
          </View>

          {roomData.latitude !== null && roomData.longitude !== null && (
            <View className="mt-4">
              <Text className="text-gray-600">
                Latitude: {roomData.latitude.toFixed(6)}
              </Text>
              <Text className="text-gray-600">
                Longitude: {roomData.longitude.toFixed(6)}
              </Text>
            </View>
          )}
        </View>

        {/* Contact Information */}
        <View className="mb-8">
          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Full Address"
            value={roomData.address}
            onChangeText={(text) => handleChange('address', text)}
          />

          <Text className="text-lg font-bold mb-4 text-gray-800">Contact Details</Text>
          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Contact Number"
            value={roomData.contact_number}
            onChangeText={(text) => handleChange('contact_number', text)}
          />
          <TextInput
            className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            placeholder="Website"
            value={roomData.website}
            onChangeText={(text) => handleChange('website', text)}
          />
        </View>

        {/* Additional Features */}
        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-gray-800">Additional Features</Text>
          <View className="flex-row justify-between">
            {/* Pet Friendly */}
            <Pressable
              onPress={() => toggleFeature("pet_friendliness")}
              className="flex-1 items-center p-4 rounded-lg bg-gray-50 border border-gray-100 mr-2"
            >
              <FontAwesome
                name="paw"
                size={32} // Increased icon size
                color={roomData.pet_friendliness ? "#3b82f6" : "#9ca3af"}
              />
              <Text className="mt-2 text-sm text-gray-600">Pet Friendly</Text>
            </Pressable>

            {/* Child Friendly Atmosphere */}
            <Pressable
              onPress={() => toggleFeature("child_friendly_atmosphere")}
              className="flex-1 items-center p-4 rounded-lg bg-gray-50 border border-gray-100 ml-2"
            >
              <MaterialCommunityIcons
                name="account-child"
                size={32} // Increased icon size
                color={roomData.child_friendly_atmosphere ? "#3b82f6" : "#9ca3af"}
              />
              <Text className="mt-2 text-sm text-gray-600">Child Friendly</Text>
            </Pressable>
          </View>

          <Pressable onPress={() => toggleFeature('roomEmpty')} className="mb-4 mt-3">
            <View className="flex-row items-center">
              <Text className="mr-2">Room Availability:</Text>
              <Text className={roomData.roomEmpty ? "text-green-500" : "text-red-500"}>
                {roomData.roomEmpty ? "Available" : "Occupied"}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          className="bg-blue-500 p-4 rounded-lg items-center shadow-sm"
        >
          <Text className="text-white font-semibold text-base">Create Room Listing</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default RoomForm;