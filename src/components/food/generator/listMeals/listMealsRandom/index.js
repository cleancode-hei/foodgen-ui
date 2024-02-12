"use client"

import React, { useEffect, useState } from "react";
import { authProvider } from "@/app/provider/authProvider/clientSide";
import Card from "../../card";

export function ListMealsRandom({token}){
  const [meals, setMeals] = useState(null);
    
  useEffect(()=>{
    if(token){
      authProvider.getMealsRandom(token).then((meals)=>{
        setMeals(meals)
      }).catch((e)=>{
        return e;
      })
    }
  },[token])
  return(
    <>{meals !== null ? meals.map((meal, i)=><Card meal={meal} key={"CardMeal" + i} /> ):<>no meals where loaded</>}</>
  )
}