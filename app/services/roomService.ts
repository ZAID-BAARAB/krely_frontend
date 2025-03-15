// roomService.ts
import axios from 'axios';
import { SERVER_IP } from "@/constants/constants"; // Import server IP
import { store } from '../redux/store';

// Define TypeScript interfaces for the response data
export interface Owner {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  verified: boolean;
}

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

export interface GalleryItem {
  description: string;
  restaurantId: number;
  photoBase64: string;
}

// Interface matching your Postman example
export interface RoomData {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  price: Number;
  city: string;
  website: string;
  roomEmpty: boolean;
  length: string;
  width: string;
  roomType: string;
  description: string;
  contact_number: string;
  special_offers: string;
  bank_account_info: string;
  pet_friendliness: boolean;
  child_friendly_atmosphere: boolean;
  kitchen: boolean;
  bathRoom: boolean;
  tv: boolean;
}

export interface ReactNativeFile {
  uri: string;
  name?: string;
  type?: string;
}




export const RoomService = {

  async createRoom(localRoomData: RoomData, photoFile?: ReactNativeFile): Promise<any> {
    const formData = new FormData(); // Corrected variable name

    console.log("Hello from createRoom");

    // Add roomData as JSON string
    formData.append('roomData', JSON.stringify(localRoomData));

    // Add photo file if provided
    if (photoFile) {
        formData.append('photoFile', {
            uri: photoFile.uri,
            name: photoFile.name || 'room-photo.jpg',
            type: photoFile.type || 'image/jpeg'
        } as any);
    }

    // Get access token from Redux store
    const accessToken = store.getState().auth.accessToken;

    try {
        const response = await axios.post(
            `${SERVER_IP}/api/v1/rooms/create-room`,
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating room:', error);
        throw error;
    }
  },
  
  async getTop10Rooms(): Promise<Room[]> {
    console.log("get rooms i am called");
    try {
      const response = await axios.get<Room[]>(
        `${SERVER_IP}/api/v1/rooms/public/getTop10Rooms`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching top 10 rooms:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  },

  async getRoomById(roomId: number): Promise<Room> {
    try {
      const response = await axios.get<Room>(
        `${SERVER_IP}/api/v1/rooms/public/getRoomById/${roomId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching room details:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  },

  async getGalleryItemsByRoomId(roomId: number): Promise<GalleryItem[]> {
    try {
      const response = await axios.get<GalleryItem[]>(
        `${SERVER_IP}/api/v1/gallery/public/getGalleryItems/${roomId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  },
  
  async searchRoomByCity(city: string): Promise<Room[]> {
    try {
      const response = await axios.get<Room[]>(
        `${SERVER_IP}/api/v1/rooms/public/filter`,
        {
          params: { city } // Pass city as query parameter
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching rooms by city:', error);
      throw error;
    }
  },

};