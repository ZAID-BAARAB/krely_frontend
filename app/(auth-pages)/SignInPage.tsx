import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import { router } from "expo-router";

import google from "@/assets/images/google.png";
import apple from "@/assets/images/apple.png";
import { authenticateUser, sendVerificationCode, whoAmI } from "@/app/services/authService"; 
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    setIsLoading(true);
    try {
      const { access_token, refresh_token } = await authenticateUser(email, password);
      console.log("from SignIn comp : Login successful! Tokens:", access_token, refresh_token);
      // Fetch the current user's details using the whoAmI method
      const user = await whoAmI(access_token);
        // Check if the user's email is verified
        if (user.verified) {
          // Redirect to Home if verified
          router.replace("/Home");
        } else {
               const verificationResponse = await sendVerificationCode(email);
          
                // Check if the verification request was successful (status 200)
                if (verificationResponse.status === 200) {
                  // Redirect to verify screen
                  router.push("/VerifyEmail");
                }
          //router.replace("/VerifyEmail");
        }   
    } catch (error: any) {
      console.error("Login failed:", error.message);
      Alert.alert("Login Failed", error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueAsGuest = () => {
    router.replace("/Home");
  };


  return (
    <SafeAreaView>
      <ScrollView className="min-h-screen bg-white pt-6">
        <View className="text-center pt-8 px-6">
          <Text className=" font-semibold text-g60 text-center text-2xl">
            Sign In
          </Text>
          <Text className="text-base text-g50 pt-3 text-center">
            Stay connected, follow teams, and never miss thrilling Stay
            connected
          </Text>
        </View>
        <FormField
          isTitle={true}
          placeholder="Enter email"
          title="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View className="pt-4">
          <FormField
            isTitle={true}
            placeholder=" Password"
            title="Password"
            secureTextEntry={true} 
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable
          onPress={() => router.push("/ForgotPassword" as any)}
          className="w-full items-end pt-2 pr-6"
        >
          <Text className=" font-bold text-g50">Forget password?</Text>
        </Pressable>

        <View className="px-4 pt-8">
          <Pressable
              onPress={handleLogin}
              className="w-full bg-g60 py-3 rounded-lg"
              disabled={isLoading}
          >
              <Text className="text-center text-white text-base font-semibold">
                {isLoading ? "Signing In..." : "Sign In"}
              </Text>
          </Pressable>
        </View>

        {/* Continue as Guest Button */}
        <View className="px-4 pt-4">
          <Pressable
            onPress={handleContinueAsGuest}
            className="w-full bg-g20 py-3 rounded-lg border border-g30"
          >
            <Text className="text-center text-g60 text-base font-semibold">
              Continue as Guest
            </Text>
          </Pressable>
        </View>

        <View className="pt-6 px-6">
          <View className="pb-12">
            <Text className="text-base text-bodyText text-center ">
              Don't have an account?{" "}
              <Text
                className=" text-p1 font-medium"
                onPress={() => router.push("/SignUpPage" as any)}
              >
                Sign Up
              </Text>{" "}
              here
            </Text>
          </View>
          <View className="border-t border-dashed border-g30 flex justify-center items-center dark:border-blackN50">
            <Text className="text-[14px] font-semibold text-center -mt-[10px] bg-white text-g60  w-fit px-2  ">
              Or Continue With
            </Text>
          </View>

          <View className="flex flex-col pt-8">
            <View className="flex-row justify-center items-center  p-4 rounded-full bg-g20 border border-g30 cursor-pointer">
              <Image source={google} />
              <Text className="text-sm font-semibold text-g60 pl-3">
                Continue with Google
              </Text>
            </View>
            <View className="mt-4 flex-row justify-center items-center  p-4 rounded-full bg-g20 border border-g30 cursor-pointer">
              <Image source={apple} />
              <Text className="text-sm font-semibold text-g60 pl-3">
                Continue with Apple
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;

const styles = StyleSheet.create({});



// import {
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import FormField from "@/components/ui/FormField";
// import { router } from "expo-router";

// import google from "@/assets/images/google.png";
// import apple from "@/assets/images/apple.png";

// const SignInPage = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView className="min-h-screen bg-white pt-6">
//         <View className="text-center pt-8 px-6">
//           <Text className=" font-semibold text-g60 text-center text-2xl">
//             Sign In
//           </Text>
//           <Text className="text-base text-g50 pt-3 text-center">
//             Stay connected, follow teams, and never miss thrilling Stay
//             connected
//           </Text>
//         </View>
//         <View className="pt-8 px-6 ">
//           <FormField
//             isTitle={true}
//             placeholder="Enter email"
//             title="Email"
//             keyboardType="email-address"
//           />
//           <View className="pt-4">
//             <FormField
//               isTitle={true}
//               placeholder=" Password"
//               title="Password"
//             />
//           </View>
//         </View>
//         <Pressable
//           onPress={() => router.push("/ForgotPassword" as any)}
//           className="w-full items-end pt-2 pr-6"
//         >
//           <Text className=" font-bold text-g50">Forget password?</Text>
//         </Pressable>

//         <View className="px-4 pt-8">
//           <Pressable
//             onPress={() => router.push("/Home" as any)}
//             className="w-full bg-g60 py-3 rounded-lg"
//           >
//             <Text className="text-center text-white text-base font-semibold">
//               Sign In
//             </Text>
//           </Pressable>
//         </View>

//         <View className="pt-6 px-6">
//           <View className="pb-12">
//             <Text className="text-base text-bodyText text-center ">
//               Don't have an account?{" "}
//               <Text
//                 className=" text-p1 font-medium"
//                 onPress={() => router.push("/SignUpPage" as any)}
//               >
//                 Sign Up
//               </Text>{" "}
//               here
//             </Text>
//           </View>
//           <View className="border-t border-dashed border-g30 flex justify-center items-center dark:border-blackN50">
//             <Text className="text-[14px] font-semibold text-center -mt-[10px] bg-white text-g60  w-fit px-2  ">
//               Or Continue With
//             </Text>
//           </View>

//           <View className="flex flex-col pt-8">
//             <View className="flex-row justify-center items-center  p-4 rounded-full bg-g20 border border-g30 cursor-pointer">
//               <Image source={google} />
//               <Text className="text-sm font-semibold text-g60 pl-3">
//                 Continue with Google
//               </Text>
//             </View>
//             <View className="mt-4 flex-row justify-center items-center  p-4 rounded-full bg-g20 border border-g30 cursor-pointer">
//               <Image source={apple} />
//               <Text className="text-sm font-semibold text-g60 pl-3">
//                 Continue with Apple
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignInPage;

// const styles = StyleSheet.create({});
