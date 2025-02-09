import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

type PropsType = {
  isTitle: boolean;
  title?: string;
  placeholder: string;
  secureTextEntry?: boolean; 
  otherStyle?: string;
  value?: string;
  onChangeText?: (text: string) => void; 
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
};

const FormField = ({
  isTitle,
  title = "field",
  placeholder,
  otherStyle,
  keyboardType = "default",
  value, // Pass value
  onChangeText,
}: PropsType) => {
  const { colorScheme } = useColorScheme();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`w-full   ${otherStyle}`}>
      {isTitle && <Text className="text-base font-medium ">{title}</Text>}
      <View
        className={`pl-4 pr-8 py-3  border rounded-lg w-full mt-2  bg-g20 border-g30 flex-row justify-between items-center`}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#4A4A4A"
          className="w-full text-n500  "
          secureTextEntry={
            [
              "Password",
              "Old Password",
              "New Password",
              "Confirm Password",
              "New password",
            ].includes(title) && !showPassword
          }
          keyboardType={keyboardType}
          value={value} 
          onChangeText={onChangeText}
        />
        {["Password", "Confirm Password", "New password"].includes(title) && (
          <Pressable onPress={() => setShowPassword((prev) => !prev)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={16}
              color={colorScheme === "dark" ? "#B6B6B6" : "#4A4A4A"}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;



// import { Pressable, Text, TextInput, View } from "react-native";
// import React, { useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { useColorScheme } from "nativewind";

// type PropsType = {
//   isTitle: boolean;
//   title?: string;
//   placeholder: string;
//   otherStyle?: string;
//   keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
// };

// const FormField = ({
//   isTitle,
//   title = "field",
//   placeholder,
//   otherStyle,
//   keyboardType = "default",
// }: PropsType) => {
//   const { colorScheme } = useColorScheme();
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <View className={`w-full   ${otherStyle}`}>
//       {isTitle && <Text className="text-base font-medium ">{title}</Text>}
//       <View
//         className={`pl-4 pr-8 py-3  border rounded-lg w-full mt-2  bg-g20 border-g30 flex-row justify-between items-center`}
//       >
//         <TextInput
//           placeholder={placeholder}
//           placeholderTextColor="#4A4A4A"
//           className="w-full text-n500  "
//           secureTextEntry={
//             [
//               "Password",
//               "Old Password",
//               "New Password",
//               "Confirm Password",
//               "New password",
//             ].includes(title) && !showPassword
//           }
//           keyboardType={keyboardType}
//         />
//         {["Password", "Confirm Password", "New password"].includes(title) && (
//           <Pressable onPress={() => setShowPassword((prev) => !prev)}>
//             <Ionicons
//               name={showPassword ? "eye-outline" : "eye-off-outline"}
//               size={16}
//               color={colorScheme === "dark" ? "#B6B6B6" : "#4A4A4A"}
//             />
//           </Pressable>
//         )}
//       </View>
//     </View>
//   );
// };

// export default FormField;
