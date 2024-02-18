import { useState, useEffect } from "react";
import { Meal } from "@/types";
import { MealProvider } from "@/providers";

export const Meals = () => {
  const [meals, setMeals] = useState<Meal[]>([]); 
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const fetchedMeals = await MealProvider.findMany(token);
        setMeals(fetchedMeals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, [token]);

  return (
    <>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </>
  );
};