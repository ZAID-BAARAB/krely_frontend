import React, { useRef } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

type Nullable<T> = T | null;

interface OtpInputFieldProps {
  disabled: boolean;
  onCodeChange: (code: string) => void;
}

const OtpInputField: React.FC<OtpInputFieldProps> = ({ disabled, onCodeChange }) => {
  const inputRefs = useRef<Array<Nullable<TextInput>>>([]);
  const [code, setCode] = React.useState<string[]>(new Array(6).fill(""));

  const handleChange = (text: string, idx: number) => {
    const newCode = [...code];
    newCode[idx] = text;
    setCode(newCode);

    if (text.length !== 0 && idx < inputRefs.current.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
    if (text.length === 0 && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }

    onCodeChange(newCode.join(""));
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    idx: number
  ) => {
    if (event.nativeEvent.key === "Backspace" && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  return (
    <View className="flex flex-row justify-center items-center gap-2">
      {code.map((digit, idx) => (
        <View
          key={idx}
          className="border rounded-lg bg-g20 py-3 px-4 border-g30 flex-row justify-between items-center"
        >
          <TextInput
            ref={(ref) => {
              if (ref) {
                inputRefs.current[idx] = ref;
              }
            }}
            className="text-center text-xl font-semibold"
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!disabled}
            keyboardType="number-pad"
            testID={`OTPInput-${idx}`}
            onChangeText={(text) => handleChange(text, idx)}
            onKeyPress={(event) => handleBackspace(event, idx)}
            value={digit}
          />
        </View>
      ))}
    </View>
  );
};

export default OtpInputField;

// import {
//   NativeSyntheticEvent,
//   TextInput,
//   TextInputKeyPressEventData,
//   View,
// } from "react-native";
// import React, { useRef } from "react";

// type Nullable<T> = T | null;

// const OtpInputField = ({ disabled }: { disabled: boolean }) => {
//   const inputRefs = useRef<Array<Nullable<TextInput>>>([]);

//   const handleChange = (text: string, idx: number) => {
//     if (text.length !== 0 && idx < inputRefs.current.length - 1) {
//       inputRefs?.current[idx + 1]?.focus();
//     }
//     if (text.length === 0 && idx > 0) {
//       inputRefs?.current[idx - 1]?.focus();
//     }
//   };

//   const handleBackspace = (
//     event: NativeSyntheticEvent<TextInputKeyPressEventData>,
//     idx: number
//   ) => {
//     if (event.nativeEvent.key === "Backspace" && idx > 0) {
//       inputRefs?.current[idx - 1]?.focus();
//     }
//   };

//   return (
//     <View className="flex flex-row justify-center items-center gap-2">
//       {[...new Array(6)].map((_, idx) => (
//         <View
//           key={idx}
//           className="border rounded-lg bg-g20 py-3 px-4 border-g30 flex-row justify-between items-center"
//         >
//           <TextInput
//             ref={(ref) => {
//               if (ref) {
//                 inputRefs.current[idx] = ref;
//               }
//             }}
//             className="text-center text-xl font-semibold"
//             maxLength={1}
//             contextMenuHidden
//             selectTextOnFocus
//             editable={!disabled}
//             keyboardType="number-pad"
//             testID={`OTPInput-${idx}`}
//             onChangeText={(text) => handleChange(text, idx)}
//             onKeyPress={(event) => handleBackspace(event, idx)}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default OtpInputField;


