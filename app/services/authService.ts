import axios from "axios";
import { SERVER_IP } from "@/constants/constants"; // Import server IP
import { store } from "@/app/redux/store";
import { setAuthTokens } from "@/app/redux/slices/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

//<=== authentication function =======>
  export const authenticateUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${SERVER_IP}/api/v1/auth/authenticate`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        const access_token = response.data.access_token ;
        const refresh_token = response.data.refresh_token;
        console.log("Access Token:", response.data.access_token);
        store.dispatch(setAuthTokens({ accessToken: access_token, refreshToken: refresh_token , email }));

        return { access_token, refresh_token };
      }

      throw new Error("Authentication failed");
    } catch (error: any) {
      console.error("Authentication Error:", error.response?.data || error.message);
      throw error.response?.data || { message: "Something went wrong" };
    }
  };

//<=== Register function =======>

export const registerUser = async (firstname: string, lastname: string, email: string, password: string, userType: string = "CLIENT") => {
  try {
    const response = await axios.post(
      `${SERVER_IP}/api/v1/auth/register`,
      { firstname, lastname, email, password, userType },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      const access_token = response.data.access_token;
      const refresh_token = response.data.refresh_token;
      console.log("Access Token:", access_token);
      // Store tokens and email in Redux
      store.dispatch(setAuthTokens({ accessToken: access_token, refreshToken: refresh_token, email }));
      return { access_token, refresh_token };
    }

    throw new Error("Registration failed");
  } catch (error: any) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

//<===== send Verification code =======>
export const sendVerificationCode = async (email: string) => {
  try {
    // Retrieve the access token from the Redux store
    const access_token = store.getState().auth.accessToken;

    if (!access_token) {
      throw new Error("No access token found in Redux  store. Please log in.");
    }

    // Make the POST request with the access token in the Authorization header
    const response = await axios.post(
      `${SERVER_IP}/api/v1/email-verification/send-code?email=${encodeURIComponent(email)}`,
      {}, // Empty body since the email is passed as a query parameter
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`, // Include the access token
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      return response; // Return the response object
    }

    throw new Error("Failed to send verification code");
  } catch (error: any) {
    console.error("Verification Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

//<=== WhoAmI function =======>
export const whoAmI = async (access_token: string) => {
  try {
    const response = await axios.get<{
      firstname: string;
      lastname: string;
      email: string;
      role: string;
      verified: boolean;
    }>(`${SERVER_IP}/api/v1/users/whoami`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Check if the response is successful
    if (response.status === 200) {
      return response.data; // Return the user data
    }

    throw new Error("Failed to fetch user details");
  } catch (error: any) {
    console.error("WhoAmI Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

//<======== Verify Email Code ==============>

export const verifyEmailCode = async (code: string) => {
  try {
    // Retrieve the access token and email from AsyncStorage
    const access_token = store.getState().auth.accessToken;

    const email = await AsyncStorage.getItem("currentUserEmail");
    console.log("retrieved code in verifyEmailCode ", code)

    console.log("retrieved Email from Redux is", email)
    if (!access_token) {
      throw new Error("No access token found in Redux store. Please log in.");
    }

    if (!email) {
      throw new Error("No email found in AsyncStorage. Please register or log in.");
    }

    // Make the POST request with the access token in the Authorization header
    const response = await axios.post(
      `${SERVER_IP}/api/v1/email-verification/verify?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`,
      {}, // Empty body since the email and code are passed as query parameters
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`, // Include the access token
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      return response.data; // Return the response data
    }

    throw new Error("Email verification failed");
  } catch (error: any) {
    console.error("Email Verification Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};


