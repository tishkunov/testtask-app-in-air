import { find } from "lodash";
import { useMemo } from "react";
import { useParams } from "react-router";
import { trips } from "../../constants";
import { HotelOrder } from "../HotelOrder/HotelOrder";
import { IHotel } from "../Orders/types";

export const HotelOrderPage = () => {
  const hotels = useMemo(
    () =>
      Object.values(trips).reduce((acc: any[], item) => {
        return [...acc, ...item.hotels];
      }, []) as unknown as IHotel[],
    []
  );
  console.log("hotels", hotels);
  const { order_id } = useParams();
  const currentHotel = find(hotels, (o) => o.aita_order.order_id === order_id);
  return <HotelOrder hotel={currentHotel} />;
};
