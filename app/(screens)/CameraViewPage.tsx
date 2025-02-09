 import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraViewPage() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex justify-center items-center h-full">
        <Text className="pb-3">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View
      className="absolute top-0 bottom-0 left-0 right-0"
      style={{ zIndex: 2 }}
    >
      <CameraView className="h-full" facing={facing}>
        <View>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
