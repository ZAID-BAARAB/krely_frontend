import { SERVER_IP } from "@/constants/constants";
import axios, { AxiosError } from "axios";
import { store } from "../redux/store";
import { setAuthTokens } from "@/app/redux/slices/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Owner } from "./roomService";

export interface Room {
  roomId: number;
  name: string;
  address: string;
  status: string;
  photoBase64: string;
  menuPath: string;
  website: string;
  contact_number: string;
  special_offers: string;
  bank_account_info: string;
  pet_friendliness: boolean;
  child_friendly_atmosphere: boolean;
  roomEmpty: boolean;
  length: string;
  city: string;
  width: string;
  price: number;
  roomType: string;
  kitchen: boolean;
  bathRoom: boolean;
  tv: boolean;
  latitude: number;
  longitude: number;
  description: string;
  owner: Owner;
}

export interface RoomRequest {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    city: string;
    price: number;
    menuPath: string;
    website: string;
    roomEmpty: boolean;
    length: string;
    width: string;
    roomType: string;
    contact_number: string;
    special_offers: string;
    bank_account_info: string;
    pet_friendliness: boolean;
    child_friendly_atmosphere: boolean;
    kitchen: boolean;
    bathRoom: boolean;
    tv: boolean;
    wifi: boolean;
    heating: boolean;
    description: string;
  }

export interface FileData {
  uri: string;
  name: string;
  type: string;
}

export const DashboardService = {

 //<======== Create Room =================>
async createRoom(roomRequest: RoomRequest, 
    photoFile: FileData | null, ): Promise<Room> {
    try {
      const accessToken = store.getState().auth.accessToken;

      const formData = new FormData();

      // Convert roomRequest to a JSON string and append it to formData
      const roomDataString = JSON.stringify(roomRequest);
      formData.append('roomData', roomDataString);
      // Add photo file if present
      if (photoFile) {
        formData.append('photoFile', {
          uri: photoFile.uri,
          name: photoFile.name,
          type: photoFile.type,
        } as any);
      }

      // Add menu PDF file if present
      // if (menuPDF) {
      //   formData.append('menuPDF', {
      //     uri: menuPDF.uri,
      //     name: menuPDF.name,
      //     type: menuPDF.type,
      //   } as any);
      // }
      console.log("FormData in Dashboard service is ++++++++++++++ ", formData)

      const response = await axios.post(
        `${SERVER_IP}/api/v1/rooms/create-room`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.error("Server error:", axiosError.response.data);
        } else if (axiosError.request) {
          console.error("No response:", axiosError.request);
        } else {
          console.error("Request error:", axiosError.message);
        }
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  }


  //<======== Update part details ==============>
  // async updatePart(
  //   id: number,
  //   partRequest: PartRequest,
  //   photoFile: FileData | null
  // ): Promise<Part> {
  //   try {
  //     const accessToken = selectAccessToken(store.getState());
  //     const formData = new FormData();
  
  //     // Add partData as a JSON string
  //         // Convert partRequest to a JSON string
  //         const partDataString = JSON.stringify(partRequest);
  //         console.log("partDataString",partDataString )
  //         // Append partData as a string
  //         formData.append('partData', partDataString);
  
  //     // Add photo file if present
  //     if (photoFile) {
  //       formData.append('partPhotoFile', {
  //         uri: photoFile.uri,
  //         name: photoFile.name,
  //         type: photoFile.type,
  //       } as any);
  //     }
  
  //     const response = await axios.put(
  //       `${SERVER_IP}/api/v1/parts/update-part/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );
  
  //     return response.data;
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const axiosError = error as AxiosError;
  //       if (axiosError.response) {
  //         console.error("Server error:", axiosError.response.data);
  //       } else if (axiosError.request) {
  //         console.error("No response:", axiosError.request);
  //       } else {
  //         console.error("Request error:", axiosError.message);
  //       }
  //     } else {
  //       console.error("Unexpected error:", error);
  //     }
  //     throw error;
  //   }
  // },
  


  
  
};

