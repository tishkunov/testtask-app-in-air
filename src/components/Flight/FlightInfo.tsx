import { fromUnixTime, format } from "date-fns";
import { FC } from "react";
import { airports } from "../../constants";
import { Segment } from "../Orders/types";

type Props = {
  segment: Segment;
};

export const FlightInfo: FC<Props> = ({ segment }) => {
  return (
    <div className="flight-info">
      <div className="flight-info__airport">
        <p className="flight-info__airport-date">
          {format(fromUnixTime(segment.departure_date), "dd MMM, HH:mm")}
        </p>{" "}
        <p className="flight-info__airport-info">
          {airports.find((airport) => airport.code === segment.origin)?.name} (
          {segment.origin})
        </p>
        <p className="flight-info__airport-info">
          {" "}
          {segment.departure_terminal &&
            `Terminal ${segment.departure_terminal}`}
        </p>
      </div>
      <div className="flight-info__pointer">
        <img src="../images/right-arrow.png" alt="right arrow" />
      </div>
      <div className="flight-info__airport">
        <p className="flight-info__airport-date">
          {format(fromUnixTime(segment.arrival_date), "dd MMM, HH:mm")}{" "}
        </p>
        <p className="flight-info__airport-info">
          <>
            {" "}
            {
              airports.find((airtport) => airtport.code === segment.destination)
                ?.name
            }{" "}
            ({segment.destination})
          </>
        </p>
        <p className="flight-info__airport-info">
          {segment.arrival_terminal && `Terminal ${segment.arrival_terminal}`}
        </p>
      </div>
      <div className="flight-info__airline">
        <img src={segment.airline.logo_url} alt="airline" />
        <p className="flight-info__airline-number">
          {segment.carrier} {segment.number}
        </p>
        <p className="flight-info__airline-type">
          {segment.equipment?.code}
          {segment.equipment?.name}
        </p>
      </div>
    </div>
  );
};
