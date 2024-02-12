"use client";
import React from "react";
import { useContext, useState } from "react";
import { Context } from "@/app/contextProvider";
import Image from "next/image";
("@/app/contextProvider");
import Modal from "../modal";
import { ListIngredients } from "./ListIngredients";

export function FoodModal() {
  const { data, isOpen, closeModalAndClearData } = useContext(Context);

  if(!data) return null;
  console.log(data.recipe)
  return (
    <Modal className={"h-90"} handleClose={closeModalAndClearData} isOpen={isOpen}>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover" src={data.image ? data.image:""} alt="meal Image"/>
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-full px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Download Recipe</button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.name}</h2>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Description :</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.readme}
                </p>  
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Ingredients :</span>
                <ListIngredients meal={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Modal>
  );
}
