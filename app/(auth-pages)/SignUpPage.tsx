import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import { router } from "expo-router";
import { registerUser, sendVerificationCode } from "@/app/services/authService";
import { Picker } from "@react-native-picker/picker";
import google from "@/assets/images/google.png";
import apple from "@/assets/images/apple.png";


const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("CLIENT");

  const handleSignUp = async () => {
    // Check if any field is empty
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const result = await registerUser(firstname, lastname, email, password, userType);
      Alert.alert("Success", "User registered successfully!");
      // Send verification code
      const verificationResponse = await sendVerificationCode(email);

      // Check if the verification request was successful (status 200)
      if (verificationResponse.status === 200) {
        // Redirect to verify screen
        router.push("/VerifyEmail");
      } else {
        // If the verification request failed, show an error alert
        Alert.alert("Error", "Failed to send verification code");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <SafeAreaView>
      <ScrollView className="min-h-screen bg-white">
        <View className="text-center pt-8 px-6">
          <Text className=" font-semibold text-g60 text-center text-2xl">
            Sign Up
          </Text>
          <Text className="text-base text-g50 pt-3 text-center">
            Stay connected, follow teams, and never miss thrilling Stay
            connected
          </Text>
        </View>
        <View className="pt-8 px-6 ">
          <FormField
            isTitle={true}
            placeholder="First Name"
            title="First Name"
            value={firstname} 
            onChangeText={setFirstname}
          />

          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Last Name"
              title="Last Name"
              value={lastname} 
              onChangeText={setLastname}
            />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Enter email"
              title="Email"
              keyboardType="email-address"
              value={email} 
              onChangeText={setEmail}
            />
          </View>

          <View className="pt-4">
            <Text className="text-lg font-semibold">Select User Type</Text>
            <Picker selectedValue={userType} onValueChange={(itemValue: React.SetStateAction<string>) => setUserType(itemValue)}>
              <Picker.Item label="Client" value="CLIENT" />
              <Picker.Item label="Gastro" value="GASTRO" />
            </Picker>
          </View>

          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder=" Password"
              title="Password"
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry={true} 
            />
          </View>
          <View className="pt-4">
            <FormField
              isTitle={true}
              placeholder="Confirm Password"
              title="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
        <View className="px-4 pt-8">
          <Pressable 
            onPress={handleSignUp} 
            className="w-full bg-g60 py-3 rounded-lg flex-row justify-center items-center">
            {loading ? <ActivityIndicator color="#fff" /> : <Text className="text-center text-white text-base font-semibold">Sign Up</Text>}
          </Pressable>
          {/* <Pressable
            // onPress={() => router.push("/SignInPage")}
            onPress={handleSignUp}
            className="w-full bg-g60 py-3 rounded-lg"
          >
            <Text className="text-center text-white text-base font-semibold">
              Sign Up
            </Text>
          </Pressable> */}
        </View>

        <View className="pt-6 px-6">
          <View className="pb-12">
            <Text className="text-base text-bodyText text-center ">
              Have an account?{" "}
              <Text
                className=" text-p1 font-medium"
                onPress={() => router.push("/SignInPage" as any)}
              >
                Sign In
              </Text>{" "}
              here
            </Text>
          </View>
          <View className="border-t border-dashed border-g30 flex justify-center items-center dark:border-blackN50">
            <Text className="text-[14px] font-semibold text-center -mt-[10px] bg-white text-g60  w-fit px-2  ">
              Or Continue With
            </Text>
          </View>

          <View className="flex flex-col pt-8 pb-24">
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

export default SignUpPage;

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

// const SignUpPage = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView className="min-h-screen bg-white">
//         <View className="text-center pt-8 px-6">
//           <Text className=" font-semibold text-g60 text-center text-2xl">
//             Sign Up
//           </Text>
//           <Text className="text-base text-g50 pt-3 text-center">
//             Stay connected, follow teams, and never miss thrilling Stay
//             connected
//           </Text>
//         </View>
//         <View className="pt-8 px-6 ">
//           <FormField
//             isTitle={true}
//             placeholder="First Name"
//             title="First Name"
//           />

//           <View className="pt-4">
//             <FormField
//               isTitle={true}
//               placeholder="Last Name"
//               title="Last Name"
//             />
//           </View>
//           <View className="pt-4">
//             <FormField
//               isTitle={true}
//               placeholder="Enter email"
//               title="Email"
//               keyboardType="email-address"
//             />
//           </View>

//           <View className="pt-4">
//             <FormField
//               isTitle={true}
//               placeholder=" Password"
//               title="Password"
//             />
//           </View>
//           <View className="pt-4">
//             <FormField
//               isTitle={true}
//               placeholder="Confirm Password"
//               title="Confirm Password"
//             />
//           </View>
//         </View>
//         <View className="px-4 pt-8">
//           <Pressable
//             onPress={() => router.push("/SignInPage")}
//             className="w-full bg-g60 py-3 rounded-lg"
//           >
//             <Text className="text-center text-white text-base font-semibold">
//               Sign Up
//             </Text>
//           </Pressable>
//         </View>

//         <View className="pt-6 px-6">
//           <View className="pb-12">
//             <Text className="text-base text-bodyText text-center ">
//               Have an account?{" "}
//               <Text
//                 className=" text-p1 font-medium"
//                 onPress={() => router.push("/SignInPage" as any)}
//               >
//                 Sign In
//               </Text>{" "}
//               here
//             </Text>
//           </View>
//           <View className="border-t border-dashed border-g30 flex justify-center items-center dark:border-blackN50">
//             <Text className="text-[14px] font-semibold text-center -mt-[10px] bg-white text-g60  w-fit px-2  ">
//               Or Continue With
//             </Text>
//           </View>

//           <View className="flex flex-col pt-8 pb-24">
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

// export default SignUpPage;

// const styles = StyleSheet.create({});
