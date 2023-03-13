import { Space } from "antd";
import { fromUnixTime, format } from "date-fns";
import { FC } from "react";
import { getHiddenEmail, getPassengersWithMr } from "../Orders/helpers";
import { CurrencySymbols } from "../Orders/Order";
import { IHotel, IPassenger } from "../Orders/types";
import "./style.css";

type Props = {
  hotel?: IHotel;
};

export const HotelOrder: FC<Props> = ({ hotel }) => {
  if (!hotel) return null;
  const { aita_order, name, address, date_from, date_to } = hotel;
  const {
    hotel_booking_ref,
    booker,
    fare,
    pin,
    extra_guests,
    price,
    currency,
  } = aita_order;
  console.log("extra_guests", extra_guests);
  console.log(booker);
  return (
    <div className="flight-order split-wrapper">
      <div className="wrapper-half">
        <Space direction="vertical">
          <div>
            <h2 className="page-heading gray">Reservation is confirmed!</h2>
            <h2 className="page-heading black">Order details</h2>
          </div>

          <p className="email">
            Email sent on{" "}
            <span className="black">{getHiddenEmail(booker.email)}</span>
          </p>

          <div className="hotel-order-info">
            <div>
              <p className="small-heading">Confirmation number</p>
              <p className="order-info__text">{hotel_booking_ref}</p>
            </div>
            {pin && (
              <div>
                <p className="small-heading">Pin</p>
                <p className="order-info__text">{pin}</p>
              </div>
            )}
          </div>
          <br />
          <div>
            <p className="order-info__text">{name}</p>
            <p className="flight-info__airport-info">{fare.description}</p>
          </div>
          <div className="flight-info">
            <div className="flight-info__airport">
              <p className="flight-info__airport-date">
                {format(fromUnixTime(date_from), "dd MMM, eee")}
              </p>{" "}
              <p className="flight-info__airport-info">Check-in from 14:00</p>
            </div>
            <div className="flight-info__pointer">
              <img src="../images/right-arrow.png" alt="right arrow" />
            </div>
            <div className="flight-info__airport">
              <p className="flight-info__airport-date">
                {" "}
                {format(fromUnixTime(date_to), "dd MMM, eee")}{" "}
              </p>
              <p className="flight-info__airport-info">Check-out until 12:00</p>
            </div>
          </div>
          <p className="small-heading">Guests</p>
          <p className="order-text">
            {getPassengersWithMr([
              booker as unknown as IPassenger,
              ...extra_guests,
            ])}
          </p>
          <p className="small-heading">Adress</p>
          <p className="order-text">{address}</p>
          <p className="small-heading">Cancel policy</p>
          <p className="order-text">{fare.policy.cancel}</p>
          <p className="small-heading">order amount</p>
          <p className="page-heading black">
            {CurrencySymbols[currency]}
            {price}
          </p>
        </Space>
      </div>
      <img src="../images/map.jpg" alt="map" />
    </div>
  );
};
