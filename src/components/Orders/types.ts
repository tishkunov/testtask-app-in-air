export const enum Genders {
  Male = "Male",
  Female = "Female",
}

export interface IPassenger {
  birth_date: string;
  document: string | null;
  email: string;
  ffp: string | null;
  first_name: string;
  gender: Genders;
  last_name: string;
  middle_name?: string | null;
  passenger_id: string;
  passenger_type: string;
  phone: string;
  title: string;
  ssr: null;
}

export const enum Currencies {
  USD = "USD",
  EUR = "EUR",
}

export const enum CurrencySymbol {
  USD = "$",
  EUR = "€",
}

type Airline = {
  code: string;
  name: string;
  logo_url: string;
};

type Equipment = {
  code: string;
  name: string;
};

export type Segment = {
  id: string;
  origin: string;
  destination: string;
  number: string;
  carrier: string;
  airline: Airline;
  duration: number;
  departure_date: number;
  arrival_date: number;
  equipment: Equipment;
  departure_terminal?: number | null;
  arrival_terminal?: number | null;
};

export interface IFlight {
  airline: Airline;
  aita_order: {
    order_id: string;
    passengers: IPassenger[];
    booking_reference: string;
    price: number;
    currency: Currencies;
    inbound_segments?: Segment[];
    outbound_segments?: Segment[];
  };
}

export type IProps = {
  order: IOrder;
};

export interface IOrder {
  arrival: number;
  departure: number;
  flights: IFlight[];
  departure_airport_code: string;
  arrival_airport_code: string;
  hotels: IHotel[];
}

export interface IAirport {
  name: string;
  code: string;
  city: string;
  country: string;
  country_full: string;
  updated_at: number;
  offset: number;
  latitude: number;
  longitude: number;
  disputed: boolean;
}

export type Booker = {
  businessAccountId: string;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
};

export interface IHotel {
  date_from: number;
  date_to: number;
  name: string;
  airline: {
    logo_url: string;
  };
  address: string;

  aita_order: {
    order_id: string;
    booker: Booker;
    extra_guests: IPassenger[];
    hotel_booking_ref: string;
    price: number;
    currency: Currencies;
    pin: string | null;
    fare: {
      description: string;
      policy: {
        cancel: string;
        cancellationDescription: string;
      };
    };
  };
}
