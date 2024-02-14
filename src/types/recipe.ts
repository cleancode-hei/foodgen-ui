export type Recipe = {
  id: string;
  name: string;
  readme: string;
};

export type PayloadRecipe = Omit<Recipe, "id">;
export type ListPayloadRicipe = PayloadRecipe[];
