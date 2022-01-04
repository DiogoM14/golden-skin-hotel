import { useQuery } from 'react-query'
import { api } from '../services/apiClient';
import { RoomProps } from '../utils/TRoom'

export async function getRooms() {
  const { data } = await api.get("/rooms");

  const rooms = data.map((room: any) => {
    return {
      _id: room._id,
      room_no: room.room_no,
      type: room.type,
      no_beds: room.no_beds,
      capacity: room.capacity,
      amenities: room.amenities,
      price_night: room.price_night,
      images: room.images,
      area: room.area,
      reserved: room.reserved
    }
  })

  return rooms;
}

export function useRooms() {
  return useQuery<RoomProps[]>('rooms', getRooms, {
    staleTime: 1000 * 60 * 5
  });
}