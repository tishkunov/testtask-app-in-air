import { Space } from "antd";
import { FC } from "react";
import { getHiddenEmail, getPassenger } from "../Orders/helpers";
import { IFlight, Segment } from "../Orders/types";
import { FlightInfo } from "./FlightInfo";
import "./style.css";

type Props = {
  flight?: IFlight;
};

export const Flight: FC<Props> = ({ flight }) => {
  if (!flight) return null;
  const { aita_order } = flight;
  const {
    booking_reference,
    price,
    inbound_segments,
    outbound_segments,
    passengers,
  } = aita_order;

  return (
    <div className="flight-order">
      <div className="wrapper">
        <Space direction="vertical">
          <div>
            <h2 className="page-heading gray">Success, have a nice flight!</h2>
            <h2 className="page-heading black">Order details</h2>
          </div>

          <p className="email">
            Email sent on{" "}
            <span className="black">
              {!!passengers.length ? getHiddenEmail(passengers[0].email) : ""}
            </span>
          </p>

          <div className="order-info">
            <div>
              <p className="small-heading">booking reference</p>
              <p className="order-info__text">{booking_reference}</p>
            </div>
            <div>
              <p className="small-heading">order amount</p>
              <p className="order-info__text">{price}</p>
            </div>
          </div>
          <p className="small-heading">booked flights</p>
          {outbound_segments?.map((segment) => (
            <FlightInfo segment={segment as Segment} />
          ))}
          {inbound_segments?.map((segment) => (
            <FlightInfo segment={segment} />
          ))}
          <p className="small-heading">Passengers</p>
          <p className="order-text">
            {passengers
              .map((passenger) => `Mr. ${getPassenger(passenger)}`)
              .join(",")}
          </p>
        </Space>
      </div>
    </div>
  );
};
