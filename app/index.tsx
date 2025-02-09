import React, { useEffect, useState } from "react";
import OnBoardingSlider from "./(screens)/OnBoardingSlider";
import { setAuthTokens } from "./redux/slices/authSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";

const Index = () => {
  const dispatch = useDispatch();
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  // Check if it's the first time the app is running
  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const firstTime = await AsyncStorage.getItem("isFirstTime");

        if (firstTime === null) {
          // First time running the app
          setIsFirstTime(true);
          await AsyncStorage.setItem("isFirstTime", "false"); // Mark as first time completed
        } else {
          // Not the first time
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error("Failed to check first time status:", error);
        setIsFirstTime(false); // Default to not first time in case of error
      }
    };

    checkFirstTime();
  }, []);

  // Load tokens from AsyncStorage when the app starts
  useEffect(() => {
    const loadTokens = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshToken = await AsyncStorage.getItem("refreshToken");

        if (accessToken && refreshToken) {
          // Dispatch action to set tokens in Redux store
          dispatch(setAuthTokens({ accessToken, refreshToken }));
        }
      } catch (error) {
        console.error("Failed to load tokens from AsyncStorage:", error);
      }
    };

    loadTokens();
  }, [dispatch]);

  // Render logic based on first-time status
  if (isFirstTime === null) {
    // Show a loading indicator or nothing while checking
    return null;
  }

  if (isFirstTime) {
    // Show OnBoardingSlider for first-time users
    return <OnBoardingSlider />;
  } else {
    // Redirect to Login for returning users
    return <Redirect href="/SignInPage" />;
  }
};

export default Index;

// import React from "react";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import OnBoardingSlider from "./(screens)/OnBoardingSlider";

// const Index = () => {
//   return (
//     <Provider store={store}>
//       <OnBoardingSlider />
//     </Provider>
//   );
// };

// export default Index;



