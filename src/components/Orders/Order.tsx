import "./style.css";
import { airports } from "./../../constants";
import { find } from "lodash";
import { FC } from "react";
import {
  getBookRef,
  getFlightCities,
  getFlightDate,
  getGuest,
  getPassengers,
  getPrice,
} from "./helpers";
import { IProps, IFlight } from "./types";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";

export const CurrencySymbols: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
};

export const Order: FC<IProps> = ({ order }) => {
  const navigate = useNavigate();
  const departureAirport = find(
    airports,
    (o) => o.code === order.departure_airport_code
  );

  const arrivalAirport = find(
    airports,
    (o) => o.code === order.arrival_airport_code
  );

  const handleClickFlightOrder = (order_id: string) => () => {
    navigate(`/flight-order/${order_id}`);
  };

  const handleClickHotelOrder = (order_id: string) => () => {
    navigate(`/hotel/${order_id}`);
  };

  return (
    <>
      {order.flights?.map((flight: IFlight) => (
        <div
          className="order"
          onClick={handleClickFlightOrder(flight.aita_order.order_id)}
        >
          <Space align="center" direction="horizontal">
            <img
              className="order__flight-logo"
              src={flight.airline.logo_url}
              alt="airline logo"
            />
            <Space direction="vertical" size={0} align="baseline">
              <div className="order__airports-info">
                {getFlightCities(departureAirport, arrivalAirport)}
              </div>
              <Space direction="horizontal">
                <div className="order__additional-info">
                  {getFlightDate(order.arrival, order.departure)}
                </div>
                <div className="order__additional-info">
                  {getPassengers(flight.aita_order.passengers)}
                </div>
                <div className="order__additional-info">
                  {getBookRef(flight.aita_order.booking_reference)}
                </div>
              </Space>
            </Space>
          </Space>
          <Space size={0} direction="vertical" align="end">
            <div className="order__price">
              {getPrice(flight.aita_order.currency, flight.aita_order.price)}
            </div>

            <div className="order__details">
              <a href="#">Order details</a>
            </div>
          </Space>
        </div>
      ))}
      {order.hotels?.map((hotel) => (
        <div
          className="order"
          onClick={handleClickHotelOrder(hotel.aita_order.order_id)}
        >
          <Space align="center" direction="horizontal">
            <div className="order__hotel-logo">
              <img src="images/hotel.png" alt="hotel logo" />
            </div>

            <Space direction="vertical" size={0} align="baseline">
              <div className="order__airports-info">{hotel.name}</div>
              <Space direction="horizontal">
                <div className="order__additional-info">
                  {getFlightDate(order.arrival, order.departure)}
                </div>
                <div className="order__additional-info">
                  {getGuest(hotel.aita_order.booker)}
                  {hotel.aita_order.extra_guests.length > 0 && ", "}
                  {getPassengers(hotel.aita_order.extra_guests)}
                </div>
                <div className="order__additional-info">
                  {getBookRef(hotel.aita_order.hotel_booking_ref)}
                </div>
              </Space>
            </Space>
          </Space>
          <Space size={0} direction="vertical" align="end">
            <div className="order__price">
              {getPrice(hotel.aita_order.currency, hotel.aita_order.price)}
            </div>

            <div className="order__details">
              <a href="#">Order details</a>
            </div>
          </Space>
        </div>
      ))}
    </>
  );
};
