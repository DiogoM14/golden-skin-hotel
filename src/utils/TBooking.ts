import { RoomProps } from "./TRoom";

interface ReservedDates {
  from: Date;
  to: Date;
}

export type BookingProps = {
  _id: string;
  room: RoomProps;
  no_guests: Number;
  extras: Array<string>;
  dates: ReservedDates;
  no_nights: Number;
  observations: string;
  cancelled: Boolean;
  final_price: Number;
};
