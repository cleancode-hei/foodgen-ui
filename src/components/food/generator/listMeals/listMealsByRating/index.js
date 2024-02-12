"use client"

import React, { useEffect, useState } from "react";
import { authProvider } from "@/app/provider/authProvider/clientSide";
import Card from "../../card";

export function ListMealsRating({token}){
  const [meals, setMeals] = useState(null);
    
  useEffect(()=>{
    if(token){
      authProvider.getMealsRating(token).then((meals)=>{
        setMeals(meals)
      }).catch((e)=>{
        console.log(e)
      })
    }
  },[token])
  return(
    <>{meals !== null ? meals.map((meal, i)=><Card meal={meal} key={"CardMeal" + i} /> ):<>no meals where loaded</>}</>
  )
}