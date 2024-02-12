"use client"

import React, { useEffect, useState } from "react";
import { authProvider } from "@/app/provider/authProvider/clientSide";
import Card from "../../card";

export function ListMealsRandom({token}){
  const [recipe, setRecips] = useState(null);
    
  useEffect(()=>{
    if(token){
      authProvider.getRecipe(token).then((recipe)=>{
        setRecips(recipe)
      }).catch((e)=>{
        console.log(e)
      })
    }
  },[token])
  return(
    <>{recipe !== null ? recipe.map((recipe, i)=><Card recipe={recipe} key={"CardMeal" + i} /> ):<>no recips where loaded</>}</>
  )
}