export type Amenities = {
  wifi: boolean;
  tv: boolean;
  crib: boolean;
  airConditioning: boolean;
  iron: boolean;
  smokeAlarm: boolean;
};

interface ReservedDates {
  _id: string;
  from: Date;
  to: Date;
}

export type RoomProps = {
  _id: string;
  room_no: Number;
  type: "single" | "double" | "king" | "deluxe";
  no_beds: Number;
  capacity: Number;
  amenities: Amenities;
  price_night: Number;
  images: Array<string>;
  fav_rooms: Array<string>;
  reserved: Array<ReservedDates>;
};
