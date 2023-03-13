import { useParams } from "react-router";
import { trips } from "../../constants";
import { Flight } from "../Flight";
import { find } from "lodash";
import { IFlight } from "../Orders/types";
import { useMemo } from "react";

export const FlightOrderPage = () => {
  const flights = useMemo(
    () =>
      Object.values(trips).reduce((acc: any[], item) => {
        return [...acc, ...item.flights];
      }, []) as unknown as IFlight[],
    []
  );

  const { order_id } = useParams();
  const currentFlight = find(
    flights,
    (o) => o.aita_order.order_id === order_id
  );
  return <Flight flight={currentFlight} />;
};
