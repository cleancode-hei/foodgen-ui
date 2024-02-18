import { ingredientProvider } from "@/providers";
import { Ingredient } from "@/types";
import React, { useEffect, useState } from "react";

export const IngredientsList: React.FC<{
  /* token: string*/
}> = (
  {
    /* token */
  },
) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(
    () => {
      getAllIngredients(/*token*/)
        .then((data) => setIngredients(data))
        .catch((error) =>
          console.error(
            "Une erreur s'est produite lors de la récupération des régions:",
            error,
          ),
        );
    },
    [
      /*token*/
    ],
  );

  async function getAllIngredients(/*token: string*/): Promise<Ingredient[]> {
    try {
      const response = await ingredientProvider.findMany({
        // token,
        page: 1,
        page_size: 100,
      });
      return response;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des régions:",
        error,
      );
      throw error;
    }
  }

  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
};
