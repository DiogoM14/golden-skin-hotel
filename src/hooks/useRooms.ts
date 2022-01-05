import { useQuery } from 'react-query'
import { api } from '../services/apiClient';
import { RoomProps } from '../utils/TRoom'

type GetRoomsResponse = {
  totalCount: number
  rooms: RoomProps[]
}

export async function getRooms(page: number): Promise<GetRoomsResponse> {
  const { data, headers } = await api.get('/rooms', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const rooms = data.map((room: RoomProps) => {
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

  return {
    rooms,
    totalCount
  };
}

export function useRooms(page: number) {
  return useQuery(['rooms', page], () => getRooms(page), {
    staleTime: 1000 * 60 * 10
  });
}