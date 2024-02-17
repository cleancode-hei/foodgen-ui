import { LoadingBoundary } from "@/components/global/suspense";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Meal, MealCard, MealCards } from "@/components/ui/mealcard";
import { Modal, ModalContent } from "@/components/ui/modal";
import { Recipe } from "@/components/ui/moremealsinfo";
import {
  AvatarPlace,
  Logo,
  LogoPart,
  Navbar,
  UserInformation,
  UserName,
} from "@/components/ui/navbar";
import { AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import React, {
  ReactNode,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";

export const RandomeMealsPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [meal, setMeal] = useState<Meal | null>(null);
  const handleOpen = (meal: Meal) => {
    setOpen(true);
    setMeal(meal);
  };
  const handleClose = () => {
    setOpen(false);
    setMeal(null);
  };
  const [meals, setMeals] = useState<[Meal] | null>(null);
  useEffect(() => {
    axios.get<[Meal]>("http://localhost:3000/meals").then((meals) => {
      setMeals(meals.data);
      console.log(meals.data);
    });
  }, []);
  return (
    <>
      <Navbar>
        <LogoPart>
          <Logo />
        </LogoPart>
        <UserInformation>
          <UserName>@username</UserName>
          <AvatarPlace>
            <Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
            </Button>
          </AvatarPlace>
        </UserInformation>
      </Navbar>
      <MealCards>
        <LoadingBoundary<[Meal]> wait={meals}>
          {meals && (
            <>
              <MealCard handleOpen={handleOpen} meal={meals[0]} />
            </>
          )}
        </LoadingBoundary>
      </MealCards>

      <Modal handleClose={handleClose} open={open}>
        <ModalContent>
          <div className="bg-black w-[500px] rounded-xl overflow-hidden h-[600px]">
            <LoadingBoundary<Meal> wait={meal}>
              <Recipe meal={meal} />
            </LoadingBoundary>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};
