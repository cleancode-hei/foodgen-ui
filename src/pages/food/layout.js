import React from "react";
import "@/app/globals.css";
import { FoodModal } from "../../components/food/generator/FoodModal";
import ContextProvider from "../../contextProvider";
import IsAuthenticated from "@/app/components/IsAuthenticated";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <IsAuthenticated>
      <ContextProvider>
        <FoodModal />
        {children}
      </ContextProvider>
    </IsAuthenticated>
  );
}