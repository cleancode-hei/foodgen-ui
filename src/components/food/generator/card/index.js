"use client";

import { Context } from "@/app/contextProvider";
import styles from "./styles.module.css";
import Image from "next/image";
import React, { useContext } from "react";
import { DownloadIcon } from "@/app/components/Icons";

export default function Card({meal}) {
  const { openModalAndDispatchData } = useContext(Context);

  return (
    <div
      data-testid="Card"
      className={`container bg-color-grey p-2 hover:shadow-2xl transition-all duration-200 rounded m-2 drop-shadow-xl ${styles["card-width"]}`}
    >
      <div className="w-full h-full">
        <div className="bg-color-2 h-3/6 w-full shadow-xl rounded">
          <Image alt="my image" width={100} height={100} src={meal.imgage} className="w-full h-full" />
        </div>
        <div className={`p-1 h-2/6`}>
          <h4 className="py-1 text-2xl font-medium truncate">{meal.name}</h4>
          <h4 className="text-md">From : {meal.region.name}</h4>
          <div className="absolute items-center flex flex-row bottom-3 left-3">
            <DownloadIcon />
            <span className="text-lg">{meal.download}</span>
          </div>
        </div>
        <div className="h-1/6 relative">
          <button
            className="btn-app-1 absolute right-1 bottom-1"
            onClick={() => {
              openModalAndDispatchData(meal);
            }}
          >
            Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
