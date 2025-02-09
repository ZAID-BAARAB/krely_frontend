import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import refrigiratorSystemImg1 from "@/assets/design_images/system_refrige1.png";
import refrigiratorSystemImg2 from "@/assets/design_images/system_refrige2.png";
import refrigiratorSystemImg3 from "@/assets/design_images/system_refrige3.png";
import WaterSystemImg1 from "@/assets/design_images/water_system1.png";
import WaterSystemImg2 from "@/assets/design_images/water_system2.png";
import { router } from 'expo-router';
import BottomNavBar from'@/components/ui/bottomNavBar'; // Import TabLayout


const RefrigerantSystemScreen: React.FC = () => {
  const refrigerantPhotos = [refrigiratorSystemImg1, refrigiratorSystemImg2, refrigiratorSystemImg3];
  const waterSystemPhotos = [WaterSystemImg1, WaterSystemImg2];

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="space-y-6">
          {/* Refrigerant System Section */}
          <Text className="text-xl font-bold text-gray-800">Refrigerant System</Text>
          {refrigerantPhotos.map((img, index) => (
            <View key={index} className="bg-white p-3 border border-gray-300 rounded-lg shadow-sm">
                            {index === 0 ? (
                <TouchableOpacity onPress={() => router.push("/exploded_designs/RefrigSystemdesign1" as any)}>
                  <Image source={img} className="w-full h-80 rounded-lg" />
                </TouchableOpacity>
              ) : (
                <Image source={img} className="w-full h-80 rounded-lg" />
              )}
              {/* <Image source={img} className="w-full h-80 rounded-lg" /> */}
            </View>
          ))}

          {/* Water System Section */}
          <Text className="text-xl font-bold text-gray-800">Water System</Text>
          {waterSystemPhotos.map((img, index) => (
            <View key={index} className="bg-white p-3 border border-gray-300 rounded-lg shadow-sm">
              <Image source={img} className="w-full h-80 rounded-lg" />
            </View>
          ))}
        </View>

      </ScrollView>
                    {/* Bottom Navigation */}
                    <View className="absolute bottom-0 left-0 right-0">
          <BottomNavBar />
        </View>
    </SafeAreaView>
  );
};

export default RefrigerantSystemScreen;
  