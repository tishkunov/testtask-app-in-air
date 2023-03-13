import { getMonth, getDay, format, fromUnixTime } from "date-fns";
import { CurrencySymbols } from "./Order";
import { Booker, Currencies, IAirport, IPassenger } from "./types";

export const getFlightDate = (arrival: number, departure: number) => {
  const arrivalDate = fromUnixTime(arrival);
  const departureDate = fromUnixTime(departure);
  const arrivalMonth = getMonth(arrivalDate);
  const departureMonth = getMonth(departureDate);
  const arrivalDay = getDay(arrivalDate);
  const departureDay = getDay(departureDate);
  if (arrivalMonth === departureMonth) {
    if (arrivalDay === departureDay) {
      return `${format(arrivalDate, "dd LLL")}`;
    }
    return `${departureDay} - ${arrivalDay} ${format(arrivalDate, "LLL")}`;
  }
};

export const getFlightCities = (
  departureAirport?: IAirport,
  arrivalAirport?: IAirport
) => `${departureAirport?.city} – ${arrivalAirport?.city}`;

export const getPassenger = (passenger: IPassenger) =>
  `${passenger.first_name} ${passenger.last_name[0]}`;

export const getPassengers = (passengers: IPassenger[]) =>
  passengers.map((passenger) => `${getPassenger(passenger)}.`).join(",");
export const getPassengersWithMr = (passengers: IPassenger[]) =>
  passengers.map((passenger) => `Mr. ${getPassenger(passenger)}`).join(",");
export const getBookRef = (bookRef: string) => `Bookref: ${bookRef}`;
export const getPrice = (currency: Currencies, price: number) =>
  `${CurrencySymbols[currency]}${price}`;

export const getGuest = (booker: Booker) =>
  `${booker.first_name} ${booker.last_name[0]}.`;

export const getHiddenEmail = (email: string) =>
  `${email.replace(/(\w{1})[\w.-]+@([\w.]+\w)/, "$1***@$2")}`;
