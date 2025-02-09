import { Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

const TabIcon = ({
  focused,
  iconName,
}: {
  focused: boolean;
  iconName: string;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Text className={`p-3  `}>
        {iconName === "home" && (
          <View className="flex-col justify-center items-center ">
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color="white"
            />
            <Text className="text-white ">Home </Text>
          </View>
        )}
        {iconName === "heart" && (
          <View className="flex-col justify-center items-center ">
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={24}
              color="white"
            />
            <Text className="text-white ">Wishlist </Text>
          </View>
        )}
        {iconName === "document" && (
          <View className="flex-col justify-center items-center ">
            <Ionicons
              name={focused ? "document-text-sharp" : "document-text-outline"}
              size={24}
              color="white"
            />
            <Text className="text-white ">My Order </Text>
          </View>
        )}
        {iconName === "cart" && (
          <View className="flex-col justify-center items-center ">
            <Ionicons
              name={focused ? "cart-sharp" : "cart-outline"}
              size={24}
              color="white"
            />
            <Text className="text-white ">Cart </Text>
          </View>
        )}

        {iconName === "user" && (
          <View className="flex-col justify-center items-center ">
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={20}
              color="white"
            />
            <Text className="text-white ">Profile </Text>
          </View>
        )}
      </Text>
      {focused && (
        <View className="w-2 h-2 rounded-full bg-neutralColor absolute top-[50px] left-[18px] z-50"></View>
      )}
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#3F3F3F",
          height: 80,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="WishList"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="heart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyOrder"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="document" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="cart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="user" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
