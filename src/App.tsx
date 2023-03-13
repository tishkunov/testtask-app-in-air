import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from "./components/Header";
import { Orders } from "./components/Orders";
import "./fonts/sf_pro_display.OTF";
import { redirect, Route, Routes } from "react-router";
import { FlightOrderPage } from "./components/pages/FlightOrder";
import { useEffect } from "react";
import { HotelOrderPage } from "./components/pages/HotelOrder";

const queryClient = new QueryClient();

export const ROUTES = {
  ORDERS: "/orders",
  FLIGHT_ORDER: "/flight-order/:order_id",
  HOTEL: "/hotel/:order_id",
};

// TODO: key

export default function App() {
  useEffect(() => {
    redirect(ROUTES.ORDERS);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Routes>
        <Route path={ROUTES.ORDERS} element={<Orders />} />
        <Route path={ROUTES.FLIGHT_ORDER} element={<FlightOrderPage />} />
        <Route path={ROUTES.HOTEL} element={<HotelOrderPage />} />
      </Routes>
    </QueryClientProvider>
  );
}
