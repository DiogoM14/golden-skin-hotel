import { BookingProps } from "./TBooking";

interface IAddress {
  street: string;
  city: string;
  postal_code: string;
  country: string;
}

export type UserProps = {
  _id: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  email: string;
  phone_number?: string;
  address?: IAddress;
  birthday?: Date;
  nif?: number;
  fav_rooms?: string[];
  bookings?: BookingProps[];
  role?: string;
};
