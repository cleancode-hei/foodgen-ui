import { authProvider } from "@/app/provider/authProvider/clientSide";
import ProvideToken from "@/app/provider/sessionProvider";
import React,{ useEffect, useState } from "react"

function ListIngredientsUI({ ingredients }) {
    return (
        <ul class="list-disc list-inside text-[--color-white] font-semibold">
          {ingredients && ingredients.map((i,j) => (
            <li key={"ingredient" + j}>{i.name}</li>
          ))}
        </ul>
    )
}

function ListIngredientsLogique({UI, meal, token}){
  const [recipe, setRecipe] = useState(null);
  useEffect(()=>{
    authProvider.getRecipe(meal.recipe.id,token).then((recipe)=>{
        setRecipe(recipe);
    }).catch((e)=>{
        return e;
    })
  },[token, meal])

  if(!recipe) return <>fetching recipe</>
  
  return(
    <UI ingredients={recipe.ingredients}/>
  )
}

export function ListIngredients({meal}){
  return(
    <ProvideToken Component={({token})=>ListIngredientsLogique({token:token,meal:meal,UI:ListIngredientsUI})}/>
  )
}