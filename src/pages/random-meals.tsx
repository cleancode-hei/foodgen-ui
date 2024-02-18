import { LoadingBoundary } from "@/components/global/suspense";
import { Button } from "@/components/ui/button";
import { MealCard, MealCards } from "@/components/ui/meal-card";
import { Modal, ModalContent } from "@/components/ui/modal";
import { Recipe } from "@/components/ui/recipes";
import {
  AvatarPlace,
  Logo,
  LogoPart,
  Navbar,
  UserInformation,
  UserName,
} from "@/components/ui/navbar";
import { Meal } from "@/types/Meal";
import logo from "/logo.png";

import React, {
  useEffect,
  useState,
} from "react";
import { MealProvider } from "@/providers";
import { DropDown } from "@/components/ui/dropdown";

export const RandomeMealsPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [meal, setMeal] = useState<Meal | null>(null);
  const [refresh, setRefresh] = useState<Object>({});
  const handleOpen = (meal: Meal) => {
    setOpen(true);
    setMeal(meal);
  };
  const handleClose = () => {
    setOpen(false);
    setMeal(null);
  };
  const [meals, setMeals] = useState<Meal[] | null>(null);
  useEffect(() => {
    console.log("fetch");
    MealProvider.findMany("").then((value) => {
      setMeals(value);
    }).catch((e)=>{
      console.log(e);
    });
  }, [refresh]);
  return (
    <>
      <Navbar>
        <LogoPart>
          <Logo src={logo} />
        </LogoPart>
        <UserInformation>
          <UserName>@username</UserName>
          <AvatarPlace>
            <DropDown links={[{label:"test", to:"test"}]}></DropDown>
          </AvatarPlace>
        </UserInformation>
      </Navbar>
      <MealCards>
        <LoadingBoundary<Meal[]> wait={meals}>
          {meals && (
            <>
            {meals.map((meal, i)=>{
              <MealCard key={"cardMeal"+i} handleOpen={handleOpen} meal={meal} />
            })}
            </>
          )}
        </LoadingBoundary>
      </MealCards>

      <Modal open={open}>
        <ModalContent>
          <div className="bg-white p-2 w-[600px] relative rounded-xl overflow-hidden h-[600px]">
            <Button
              onClick={handleClose}
              className="z-10 shadow-md absolute right-0 top-0 bg-[--color-1]"
            >
              X
            </Button>
            <LoadingBoundary<Meal> wait={meal}>
              <Recipe meal={meal} />
            </LoadingBoundary>
          </div>
        </ModalContent>
      </Modal>
      <Button
        className="bg-[--color-1] shadow-md fixed p-3 bottom-5 right-5 z-20"
        onClick={() => {
          setRefresh({});
        }}
      >
        Regenerate
      </Button>
    </>
  );
};
