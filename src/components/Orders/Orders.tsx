import { useMemo } from "react";
import { getUnixTime } from "date-fns";
import { Order } from "./Order";
import { IOrder } from "./types";
import { Tabs } from "antd";
import { trips } from "../../constants";

const SearchInputStyles = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10% 50%",
};

export const Orders = () => {
  const upcomingOrders = useMemo(
    () =>
      Object.values(trips).filter(
        (trip) => trip.departure < getUnixTime(new Date())
      ) || [],
    [trips]
  ) as unknown as IOrder[];

  const pastOrders = useMemo(
    () =>
      Object.values(trips).filter(
        (trip) => trip.departure > getUnixTime(new Date())
      ) || [],
    [trips]
  ) as unknown as IOrder[];

  return (
    <div className="wrapper">
      <div className="orders-wrapper">
        <div className="orders__heading-wrapper">
          <h2>Orders</h2>
          <input
            placeholder="Search orders"
            type="text"
            className="search-input"
            style={{
              backgroundImage: "url(/images/search.png)",
              ...SearchInputStyles,
            }}
          />
        </div>
        <Tabs
          defaultActiveKey="Upcoming"
          popupClassName="popp"
          items={[
            {
              label: "Upcoming",
              key: "1",
              children: (
                <div className="order-wrapper">
                  {upcomingOrders.map((order) => (
                    <Order key={order.id} order={order} />
                  ))}
                </div>
              ),
            },
            {
              label: "Past",
              key: "2",
              children: (
                <div className="order-wrapper">
                  {pastOrders.map((order) => (
                    <Order key={order.id} order={order} />
                  ))}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};
