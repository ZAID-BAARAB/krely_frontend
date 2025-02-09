import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import OtpInputField from "@/components/ui/OtpInputField";

const VerifyOTP = () => {
  const [otpCode, setOtpCode] = useState<string>("");
  
  return (
    <SafeAreaView>
      <ScrollView className="min-h-screen bg-white">
        <View className="text-center pt-8 px-6">
          <Text className=" font-semibold text-g60 text-center text-2xl">
            Forget Password
          </Text>
          <Text className="text-base text-g50 pt-3 text-center">
            Reset your access effortlessly and regain control with our password
            recovery service.
          </Text>
        </View>

        <View className="w-full pt-8 pb-4 ">
          <OtpInputField disabled={false} onCodeChange={setOtpCode} />
        </View>

        <View className=" pb-32">
          <Text className="text-base text-bodyText text-center  ">
            Didn’t receive email?{" "}
            <Text
              className=" text-p1"
              onPress={() => router.push("/SignUpPage" as any)}
            >
              Resend
            </Text>
          </Text>
        </View>

        <View className="px-4 pt-8">
          <Pressable
            onPress={() => router.push("/ResetSuccessfully" as any)}
            className="w-full bg-g60 py-3 rounded-lg"
          >
            <Text className="text-center text-white text-base font-semibold">
              Verify
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({});


// import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { router } from "expo-router";
// import OtpInputField from "@/components/ui/OtpInputField";

// const VerifyOTP = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView className="min-h-screen bg-white">
//         <View className="text-center pt-8 px-6">
//           <Text className=" font-semibold text-g60 text-center text-2xl">
//             Forget Password
//           </Text>
//           <Text className="text-base text-g50 pt-3 text-center">
//             Reset your access effortlessly and regain control with our password
//             recovery service.
//           </Text>
//         </View>

//         <View className="w-full pt-8 pb-4 ">
//           <OtpInputField disabled={false} />
//         </View>

//         <View className=" pb-32">
//           <Text className="text-base text-bodyText text-center  ">
//             Didn’t receive email?{" "}
//             <Text
//               className=" text-p1"
//               onPress={() => router.push("/SignUpPage" as any)}
//             >
//               Resend
//             </Text>
//           </Text>
//         </View>

//         <View className="px-4 pt-8">
//           <Pressable
//             onPress={() => router.push("/ResetSuccessfully" as any)}
//             className="w-full bg-g60 py-3 rounded-lg"
//           >
//             <Text className="text-center text-white text-base font-semibold">
//               Verify
//             </Text>
//           </Pressable>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default VerifyOTP;

// const styles = StyleSheet.create({});
